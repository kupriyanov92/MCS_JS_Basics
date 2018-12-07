console.log('Yoa are at' + window.location);

let crypto = [
{
  name : "Bitcoin",
  price: 661
},
{
  name : "Epherium",
  price: 567
},
{
  name : "LiteCoin",
  price: 479
}
]
const h = document.getElementsByTagName('h1');
//console.log(h);

counter =0 ;
while(counter < h.length) {
//console.log('counter=',counter);

//console.log(crypto[counter].name);
h[counter].innerHTML = crypto[counter].name;
counter++;
}

const p = document.getElementsByTagName('p');
console.log(p);
const d = document.getElementsByTagName('div');
console.log(d);

counter2=0;
while(counter2 < p.length){
p[counter2].innerHTML = crypto[counter2].price;
d[counter2].style.width = String(crypto[counter2].price)+'px';
console.log(d[counter2].style.width);
counter2++;

}

/*const h1=document.getElementById('Crypto');
console.log(h1);


const h2=document.getElementById('Crypto');
console.log(h2);

const h3=document.getElementById('Crypto');
console.log(h3);*/




