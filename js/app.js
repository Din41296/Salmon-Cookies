'use strict';
let hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let cookies = [];
function Cookie(name,min,max,avg,img){
  this.name = name;
  this.min=min;
  this.max = max;
  this.avg=avg;
  this.img=img;
  this.avgCookiePerHour=[];
  this.totalCookies =0;
  cookies.push(this);
}
Cookie.prototype.randomCus= function() {
  return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
};
Cookie.prototype.custPerHour = function(){
  let custPerHour = [];
  for (let i = 0; i < hoursOpen.length; i++) {
    custPerHour.push(this.randomCus());
  }
  return custPerHour;
};
let avgCookiePerHour = [];
Cookie.prototype.avgCookiePerHour=function () {
  let custPerHour = this.custPerHour();
  for (let i = 0; i < custPerHour.length; i++) {
    avgCookiePerHour.push(Math.floor(this.avgCookie * custPerHour[i]));
  }
  return avgCookiePerHour;
},

Cookie.prototype.totalCookies=function () {
  let avgCookiePerHour= this.avgCookiePerHour();
  let total = 0;
  for (let i = 0; i < avgCookiePerHour.length; i++) {
    total = total + avgCookiePerHour[i];
  }
  return total;
};

let container = document.getElementById('container');
let tableEl = document.createElement('Table');
container.appendChild(tableEl);

function createTableHeader(){
  let trEl=document.createElement('tr');
  tableEl.appendChild(trEl);
  let thEl1=document.createElement('th');
  trEl.appendChild(thEl1);
  for(let i=0;i<hoursOpen.length;i++){

    let thEl = document.createElement('th');
    thEl.textContent = hoursOpen[i];
    trEl.appendChild(thEl);
  }


  let thEl2 = document.createElement('th');
  thEl2.textContent='Daily Location Total';
  trEl.appendChild(thEl2);






}
createTableHeader();

let seattle = new Cookie('Seattle',23,65,6.3,'img/fish.PNG');
let tokyo = new Cookie('Tokyo',3,24,1.2,'img/fish.PNG');
let dubai = new Cookie('Dubai',11,38,3.7,'img/fish.PNG');
let paris = new Cookie('Paris',20,38,2.3,'img/fish.PNG');
let lima = new Cookie('Lima',2,16,4.6,'img/fish.PNG');

for(let i=0;i<cookies.length;i++) {
  let trEl=document.createElement('tr');
  tableEl.appendChild(trEl);

  let tdEl1=document.createElement('td');
  tdEl1.textContent= cookies[i].name;
  tableEl.appendChild(trEl);
  trEl.appendChild(tdEl1);










}
function createTableFooter(){
  let tfootEl=document.createElement('tfoot');
  tableEl.appendChild(tfootEl);
  let tfEl=document.createElement('tf');
  tfootEl.appendChild(tfEl);
  let trEl=document.createElement('tr');
  trEl.textContent='Total';
  tfEl.appendChild(trEl);

}
createTableFooter();









console.log(seattle);
console.log(tokyo);
console.log(dubai);
console.log(paris);
console.log(lima);
console.log(cookies);





