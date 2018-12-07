console.log('Yoa are at' + window.location);

//const maxNumArr = 100000;
const myArr=[];
const myArrBezOst=[];
//const value = 6;

const maxNumArr = prompt('Ввести диапазон в которм будет производится расчет');
const value = prompt('ВВести число деление на которое будет проверятся');

createArray(myArr,maxNumArr);

BezOstatkaFromRange(value,myArr);
const p = document.querySelectorAll('p');
console.log(p);
//p.innerHTML = 'oioknkln';

//console.log(myArrBezOst);

function BezOstatkaFromRange(value,myArr){
	let numArr = 0;
	let numArrBezOst = 0;
	
	while(numArr<myArr.length-1){
		if (myArr[numArr]/6 - Math.trunc(myArr[numArr]/6) == 0) {
			//console.log(myArr[numArr]);
			myArrBezOst[numArrBezOst] = myArr[numArr];
			numArrBezOst++;
		}

		//console.log(myArr[numArr],myArr[numArr]/6 - Math.trunc(myArr[numArr]/6));
		numArr++;
	}
	return myArrBezOst;
}

function createArray(myArr,maxNumArr) {
	
	for(i=0; i<=maxNumArr; i++){
	myArr[i] = i+1;
	}
	return myArr;	
}
