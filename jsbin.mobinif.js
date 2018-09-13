function triangleTunnel(){
var c = document.getElementById('myCanvas').getContext('2d');
var x = 80;
var y = 25;
var a = 140;
var b = 100;
var z = 20;
var d = 120;

for (i=0;i<=20;i++){
var k = (i*10);
c.beginPath();
c.moveTo(x+k,y+k);
c.lineTo(z+k,b+k);
c.lineTo(d+k,b+k);
c.lineTo(a+k,b+k);
c.closePath();
c.stroke();
}
  }
triangleTunnel();