'use strict';
let hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];



let cookies = [];
function Cookie(name, min, max, avg, img) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.img = img;
  this.randCust = [],
  this.avgCookiePerHour = [],
  this.total = 0,
  cookies.push(this);
}

let seattle = new Cookie('Seattle', 23, 65, 6.3, 'img/fish.PNG');
let tokyo = new Cookie('Tokyo', 3, 24, 1.2, 'img/fish.PNG');
let dubai = new Cookie('Dubai', 11, 38, 3.7, 'img/fish.PNG');
let paris = new Cookie('Paris', 20, 38, 2.3, 'img/fish.PNG');
let lima = new Cookie('Lima', 2, 16, 4.6, 'img/fish.PNG');

Cookie.prototype.randCust = function () {
  for (let i = 0; i < hoursOpen.length; i++) {
    let min = Math.ceil(min);
    let max = Math.floor(max);
    let randCust = Math.floor(Math.random() * (max - min + 1) + min);
    this.randCust.push(randCust);
  }
};

Cookie.prototype.avgCookiePerHour = function () {
  for (let i = 0; i < hoursOpen.length; i++) {
    let avgCookiePerHour = Math.floor(this.randCust[i] * this.avgCookiePerCus);
    this.avgCookiePerHour.push(avgCookiePerHour);
    this.total += this.avgCookiePerHour[i];
  }
};



let container = document.getElementById('container');
let tableEl = document.createElement('Table');
container.appendChild(tableEl);
Cookie.prototype.render = function () {
  let trEl = document.createElement('tr');
  let tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
  for (let i = 0; i < hoursOpen.length; i++) {
    let tdEl = document.createElement('td');
    tdEl.textContent = this.avgCookiePerHour[i];
    trEl.appendChild(tdEl);
  }

  let tdTotalEl = document.createElement('td');
  tdTotalEl.textContent = this.total;
  trEl.appendChild(tdTotalEl);
  tableEl.appendChild(trEl);

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
  tableEl.appendChild(tfootEl);
  let tfEl = document.createElement('tf');
  tfootEl.appendChild(tfEl);
  let trEl = document.createElement('tr');
  trEl.textContent = 'Total';
  tfEl.appendChild(trEl);
  let megaTotal = 0;
  for (let h = 0; h < hoursOpen.length; h++) {
    let tdEl = document.createElement('td');
    let sum = 0;

    for (let s = 0; s < cookies.length; s++) {

      sum = sum + cookies[s].avgCookiesPerHour[h];
    }
    megaTotal += sum;
    tdEl.textContent = sum;
    tfootEl.appendChild(tdEl);
  }
  let totalTdEl = document.createElement('td');
  totalTdEl.textContent = megaTotal;
  tfootEl.appendChild(totalTdEl);

}




createTableHeader();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
createTableFooter();















