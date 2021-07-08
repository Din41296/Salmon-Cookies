'use strict';

let hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];



let shops = [];
function Cookie(name, min, max, avg, img) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.img = img;
  this.randCust = [],
  this.cookiesPerHour = [],
  this.dailyTotal = 0,
  shops.push(this);
}


Cookie.prototype.generateRandCust = function () {
  for (let i = 0; i < hoursOpen.length; i++) {
    let min = Math.ceil(this.min);
    let max = Math.floor(this.max);
    let randCust = Math.floor(Math.random() * (max - min + 1) + min);
    this.randCust.push(randCust);
  }
};

Cookie.prototype.generateCookiesPerHour = function () {
  for (let i = 0; i < hoursOpen.length; i++) {
    let cookie = Math.floor(this.randCust[i] * this.avg);
    this.cookiesPerHour.push(cookie);
    this.dailyTotal += this.cookiesPerHour[i];
  }
};



let container = document.getElementById('container');
// let container = document.getElementById('container');
console.log(container);
let tableEl = document.createElement('Table');
container.appendChild(tableEl);

Cookie.prototype.render = function () {
  let trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  let tdEl = document.createElement('td');
  trEl.appendChild(tdEl);
  tdEl.textContent = this.name;
  for (let i = 0; i < hoursOpen.length; i++) {
    let tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[i];
    trEl.appendChild(tdEl);
  }

  let tdTotalEl = document.createElement('td');
  tdTotalEl.textContent = this.dailyTotal;
  trEl.appendChild(tdTotalEl);

};









function createTableHeader() {
  let trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  let thEl1 = document.createElement('th');
  trEl.appendChild(thEl1);

  for (let i = 0; i < hoursOpen.length; i++) {

    let thEl = document.createElement('th');
    thEl.textContent = hoursOpen[i];
    trEl.appendChild(thEl);
  }


  let thEl2 = document.createElement('th');
  thEl2.textContent = 'Daily Location Total';
  trEl.appendChild(thEl2);

}






function createTableFooter() {
  let tfootEl = document.createElement('tfoot');
  let tdEl = document.createElement('td');
  tdEl.textContent = 'Totals';
  tfootEl.appendChild(tdEl);
  tableEl.appendChild(tfootEl);
  let totalOfTotal = 0;

  for (let h = 0; h < hoursOpen.length; h++) {
    let tdEl = document.createElement('td');
    let sum = 0;

    for (let i = 0; i < shops.length; i++) {

      sum = sum + shops[i].cookiesPerHour[h];
    }
    totalOfTotal += sum;
    tdEl.textContent = sum;
    tfootEl.appendChild(tdEl);
  }
  let totalTdEl = document.createElement('td');
  totalTdEl.textContent = totalOfTotal;
  tfootEl.appendChild(totalTdEl);
}



let seattle = new Cookie('Seattle', 23, 65, 6.3);
let tokyo = new Cookie('Tokyo', 3, 24, 1.2);
let dubai = new Cookie('Dubai', 11, 38, 3.7);
let paris = new Cookie('Paris', 20, 38, 2.3);
let lima = new Cookie('Lima', 2, 16, 4.6);
// console.log(seattle.randCust);
// seattle.generateRandCust();
// seattle.generateCookiesPerHour();
// console.log(seattle);



createTableHeader();
for (let i = 0; i < shops.length; i++) {
  shops[i].generateRandCust();
  shops[i].generateCookiesPerHour();
  shops[i].render();
}


createTableFooter();
deleteRow();


function deleteRow() {
  let rowCount = tableEl.rows.length;
  console.log(rowCount);
  tableEl.deleteRow(-1);
}

let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', addShop);
function addShop(event) {
  event.preventDefault();
  let shopName = event.target.shopName.value;
  let min = event.target.min.value;
  let max = event.target.max.value;
  let avg = event.target.avg.value;
  console.log(shopName, min, max, avg);

  let newStore = new Cookie(shopName, min, max, avg);
  newStore.generateRandCust();
  newStore.generateCookiesPerHour();
  newStore.render();
  
  createTableFooter();
  console.log(newStore);
  
}














