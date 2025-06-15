

function changeit(){
document.querySelectorAll('.boxes').forEach((element) => {
    element.style.transition = 'backgroundImage 0.5s';
    element.style.backgroundImage = `radial-gradient(white, ${getRandomColor()})`;
});
}

changeit()


function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  
  return color;
}