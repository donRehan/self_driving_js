// Road canvas
const canvas=document.getElementById('myCanvas');
canvas.width=200;

// car 
const ctx = canvas.getContext('2d');
const car = new Car(100,100,30,50);

//console.log('Car drawn:', this.x, this.y, this.width, this.height);
//car.draw(ctx);
animate();
//
function animate(){
  car.update();

  canvas.height=window.innerHeight;
  car.draw(ctx);
  requestAnimationFrame(animate);
}
