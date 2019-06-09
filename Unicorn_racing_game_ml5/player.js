// Code credit:
// 🌈Dan Shiffman🌈’s Eyeo Festival Talk
// https://github.com/CodingTrain/Eyeo-Festival-2019
class Player {
  constructor(index, y, img) {
    this.index = index;
    this.x = 0;
    this.y = y;
    this.img = img;
    this.r = 100;
    this.hasWon = false;
  }
  
  show() {
    //ellipse(this.x, this.y, 100);
    imageMode(CENTER);
    image(this.img, this.x + this.r/2, this.y, this.r, this.r);
  }
  
  move() {
    this.x += 10; 
  }
  
  win() {
   if (this.x > width && !this.hasWon) {
    createElement('h2', `🌈🌈player ${this.index} won!!🌈🌈`);
     this.hasWon = true;
   }
     
  }
}
