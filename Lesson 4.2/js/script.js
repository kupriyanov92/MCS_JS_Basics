console.log('You are at' + window.location);

const rock = 0; //камень
const scissors = 1;//ножницы
const paper = 2;//бумага

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);
console.log('computer',computer);
console.log('player',player);

// опишем все условия и будем выводить в консоль 'computer win' или 'player win'
if ((computer ==1) && (player ==2) || (computer ==0) && (player ==1) ||  (computer ==2) && (player ==0) ) {
	console.log('computer win');
}
else if(computer != player) {
	console.log('player win');
}
else {
	console.log('No winner!!');
}