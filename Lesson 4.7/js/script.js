/*let SummaDeneg = prompt('Сколько у вас денег?');
let KolVoApple = prompt('Сколько вы купилия яблок?');
let KolVoBatonov = prompt('Сколько вы купили батонов?');
let SummaApple = parseInt(prompt('Сколько стоит одно яблоко')) * parseInt(KolVoApple) + ' рублей';
let SummaBatonov = parseInt(prompt('Сколько стоит один батон')) * parseInt(KolVoBatonov) + ' рублей';
let YesDeneg = parseInt(SummaBatonov)+parseInt(SummaApple)<parseInt(SummaDeneg);
document.write(YesDeneg);*/

function haveEnough(SummaDeneg,KolVoApple,KolVoBatonov,CenaApple,CenaBatonov) {
	let YesDeneg;

 SummaApple =  parseInt(KolVoApple)*parseInt(CenaApple) + ' рублей';
 SummaBatonov =  parseInt(KolVoBatonov)*parseInt(CenaBatonov) + ' рублей';
 console.log('Сумма яблок',SummaApple);
 console.log('Сумма батонов',SummaBatonov);
 console.log('Сумма денег',SummaDeneg);
 SummaDeneg >= (parseInt(SummaApple+SummaBatonov)) ? YesDeneg = 'Денег достаточно' : YesDeneg = 'Не хватает денег';

 return YesDeneg;
}

console.log(haveEnough( parseInt(prompt('Сколько у вас денег?')),
						parseInt(prompt('Сколько вы купилия яблок?')),
						parseInt(prompt('Сколько вы купилия ,батонов?')),
						parseInt(prompt('Сколько стоит одно яблоко')),
						parseInt(prompt('Сколько стоит один батон'))));
