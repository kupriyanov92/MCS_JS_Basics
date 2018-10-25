const Colored = document.querySelector('.page');  
const quest = prompt('Какой цвет фона хочешь установить');  
const questColorText = prompt('Какой цвет текста хочешь установить');  
const nameInspires = document.querySelector('span'); 
const nmInspires = prompt('Кто вас вдохновляет'); 
nameInspires.innerHTML = nmInspires; 
const namePicture = document.querySelector('img');  
const Picture = prompt('Введите адрес картинки');  
namePicture.setAttribute('src',Picture); 
const Text = document.querySelector('.shortBio'); 
const vvText = prompt('Введите текст страницы');  
Text.innerHTML = vvText;  
Colored.style.backgroundColor = quest;  
Colored.style.color = questColorText;  

const shortBio = document.querySelector('.shortBio');
console.log(shortBio.className);
 shortBio.className += ' animated';
  

 