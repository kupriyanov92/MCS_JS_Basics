let SummaDeneg = prompt('Сколько у вас денег?');
let KolVoApple = prompt('Сколько вы купилия яблок?');
let KolVoBatonov = prompt('Сколько вы купили батонов?');
let SummaApple = parseInt(prompt('Сколько стоит одно яблоко')) * parseInt(KolVoApple) + ' рублей';
let SummaBatonov = parseInt(prompt('Сколько стоит один батон')) * parseInt(KolVoBatonov) + ' рублей';
let YesDeneg = parseInt(SummaBatonov)+parseInt(SummaApple)<parseInt(SummaDeneg);
document.write(YesDeneg);
