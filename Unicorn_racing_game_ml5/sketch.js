// Code credit:
// 🌈Dan Shiffman🌈’s Eyeo Festival Talk
// https://github.com/CodingTrain/Eyeo-Festival-2019

let players = [];
let images = [];
let bkg;
let imageClassifier;
let soundClassifier;
let video;
let imageModel = 'https://storage.googleapis.com/tm-pro-a6966.appspot.com/eyeo/model.json';
let soundModel = 'https://storage.googleapis.com/tm-speech-commands/eyeo2/model.json'


function preload() {
  video = createCapture(VIDEO);
  video.size(320, 240);
  for (let i = 0; i < 4; i++) {
    images[i] = loadImage(`data/player${i}.png`);
  }
  bkg = loadImage('data/background.jpg');
  imageClassifier = ml5.imageClassifier(imageModel);
  soundClassifier = ml5.soundClassifier(soundModel);
}

function setup() {
  createCanvas(800, 450);
  //celebrate();
  for (let i = 0; i < 4; i++) {
    players[i] = new Player(i + 1, 100 + i * 100, images[i]);
  }
  imageClassifier.classify(video, gotImageResult);
  soundClassifier.classify(gotSoundResult);
}

function gotSoundResult(error, results) {
  let label = results[0].label;
  if (label == 'audience') {
    players[3].move();
  }
}

function gotImageResult(error, results) {
  let label = results[0].label;
  players[label].move();
  imageClassifier.classify(video, gotImageResult);
}

function draw() {
  imageMode(CORNER);
  background(bkg);
  for (let p of players) {
    p.show();
    p.win();
  }
}

function keyPressed() {
  players[key].move();
}