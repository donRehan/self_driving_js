// Road canvas
const canvas=document.getElementById('myCanvas');
canvas.height=window.innerHeight;
canvas.width=200;

// car 
const ctx = canvas.getContext('2d');
const car = new Car(100,100,30,50);
car.draw(ctx);

//console.log('Car drawn:', this.x, this.y, this.width, this.height);
