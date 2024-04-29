const textBox = document.getElementById('text-box');
const leftBox = document.getElementById('left-box');
const rightBox = document.getElementById('right-box');

document.getElementById('set-color-btn').addEventListener('click', () => {
  leftBox.style.backgroundColor = textBox.value;
});

document.getElementById('random-color-btn').addEventListener('click', () => {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  rightBox.style.backgroundColor = randomColor;
});

document.getElementById('reset-color-btn').addEventListener('click', () => {
  leftBox.style.backgroundColor = 'white';
  rightBox.style.backgroundColor = 'white';
});