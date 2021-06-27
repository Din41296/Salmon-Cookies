'use strict';

let hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avgCookie: 6.3,
  img:'img/fish.PNG',

  randomCus: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  },
  custPerHour: function () {
    let custPerHour = [];
    for (let i = 0; i < hoursOpen.length; i++) {
      custPerHour.push(this.randomCus());
    }
    return custPerHour;
  },
  avgCookiePerHour: function () {
    let avgCookiePerHour = [];
    let custPerHour = this.custPerHour();
    for (let i = 0; i < custPerHour.length; i++) {
      avgCookiePerHour.push(Math.floor(this.avgCookie * custPerHour[i]));
    }
    return avgCookiePerHour;
  },
  totalCookies: function () {
    let avgCookiePerHour= this.avgCookiePerHour();
    let total = 0;
    for (let i = 0; i < avgCookiePerHour.length; i++) {
      total = total + avgCookiePerHour[i];
    }
    return total;
  },
  render: function(){

    let divEl = document.getElementById('parent');
    let articleEl = document.createElement('article');
    divEl.appendChild(articleEl);
    let imgEl=document.createElement('img');
    articleEl.appendChild(imgEl);
    imgEl.setAttribute('src',this.img);
    let h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;
    let ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);

    for (let i = 0; i < hoursOpen.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hoursOpen[i]} : ${seattle.avgCookiePerHour()[i]} cookies`;
    }
    let totalEl = document.createElement('li');
    ulEl.appendChild(totalEl);
    totalEl.textContent = `Total : ${seattle.totalCookies()} cookies`;

  }

};
seattle.render();
// console.log(seattle.custPerHour());
seattle.avgCookiePerHour();
seattle.totalCookies();
seattle.custPerHour();



// For Tokyo
let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avgCookie: 1.2,

  randomCus: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  },
  custPerHour: function () {
    let custPerHour = [];
    for (let i = 0; i < hoursOpen.length; i++) {
      custPerHour.push(this.randomCus());
    }
    return custPerHour;
  },
  avgCookiePerHour: function () {
    let avgCookiePerHour = [];
    let custPerHour = this.custPerHour();
    for (let i = 0; i < custPerHour.length; i++) {
      avgCookiePerHour.push(Math.floor(this.avgCookie * custPerHour[i]));
    }
    return avgCookiePerHour;
  },
  totalCookies: function () {
    let avgCookiePerHour= this.avgCookiePerHour();
    let total = 0;
    for (let i = 0; i < avgCookiePerHour.length; i++) {
      total = total + avgCookiePerHour[i];
    }
    return total;
  },
  render: function(){

    let divEl = document.getElementById('parent');
    let articleEl = document.createElement('article');
    divEl.appendChild(articleEl);
    let h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;
    let ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);

    for (let i = 0; i < hoursOpen.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hoursOpen[i]} : ${seattle.avgCookiePerHour()[i]} cookies`;
    }
    let totalEl = document.createElement('li');
    ulEl.appendChild(totalEl);
    totalEl.textContent = `Total : ${seattle.totalCookies()} cookies`;
  }

};
tokyo.render();

// For Dubai
let dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avgCookie: 3.7,

  randomCus: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  },
  custPerHour: function () {
    let custPerHour = [];
    for (let i = 0; i < hoursOpen.length; i++) {
      custPerHour.push(this.randomCus());
    }
    return custPerHour;
  },
  avgCookiePerHour: function () {
    let avgCookiePerHour = [];
    let custPerHour = this.custPerHour();
    for (let i = 0; i < custPerHour.length; i++) {
      avgCookiePerHour.push(Math.floor(this.avgCookie * custPerHour[i]));
    }
    return avgCookiePerHour;
  },
  totalCookies: function () {
    let avgCookiePerHour= this.avgCookiePerHour();
    let total = 0;
    for (let i = 0; i < avgCookiePerHour.length; i++) {
      total = total + avgCookiePerHour[i];
    }
    return total;
  },
  render: function(){

    let divEl = document.getElementById('parent');
    let articleEl = document.createElement('article');
    divEl.appendChild(articleEl);
    let h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;
    let ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);

    for (let i = 0; i < hoursOpen.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hoursOpen[i]} : ${seattle.avgCookiePerHour()[i]} cookies`;
    }
    let totalEl = document.createElement('li');
    ulEl.appendChild(totalEl);
    totalEl.textContent = `Total : ${seattle.totalCookies()} cookies`;


  }

};
dubai.render();


// for Paris
let paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avgCookie: 2.3,

  randomCus: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  },
  custPerHour: function () {
    let custPerHour = [];
    for (let i = 0; i < hoursOpen.length; i++) {
      custPerHour.push(this.randomCus());
    }
    return custPerHour;
  },
  avgCookiePerHour: function () {
    let avgCookiePerHour = [];
    let custPerHour = this.custPerHour();
    for (let i = 0; i < custPerHour.length; i++) {
      avgCookiePerHour.push(Math.floor(this.avgCookie * custPerHour[i]));
    }
    return avgCookiePerHour;
  },
  totalCookies: function () {
    let avgCookiePerHour= this.avgCookiePerHour();
    let total = 0;
    for (let i = 0; i < avgCookiePerHour.length; i++) {
      total = total + avgCookiePerHour[i];
    }
    return total;
  },
  render: function(){

    let divEl = document.getElementById('parent');
    let articleEl = document.createElement('article');
    divEl.appendChild(articleEl);
    let h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;
    let ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);

    for (let i = 0; i < hoursOpen.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hoursOpen[i]} : ${seattle.avgCookiePerHour()[i]} cookies`;
    }
    let totalEl = document.createElement('li');
    ulEl.appendChild(totalEl);
    totalEl.textContent = `Total : ${seattle.totalCookies()} cookies`;
  }

};
paris.render();

// for Lima
let lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  avgCookie: 4.6,

  randomCus: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  },
  custPerHour: function () {
    let custPerHour = [];
    for (let i = 0; i < hoursOpen.length; i++) {
      custPerHour.push(this.randomCus());
    }
    return custPerHour;
  },
  avgCookiePerHour: function () {
    let avgCookiePerHour = [];
    let custPerHour = this.custPerHour();
    for (let i = 0; i < custPerHour.length; i++) {
      avgCookiePerHour.push(Math.floor(this.avgCookie * custPerHour[i]));
    }
    return avgCookiePerHour;
  },
  totalCookies: function () {
    let avgCookiePerHour= this.avgCookiePerHour();
    let total = 0;
    for (let i = 0; i < avgCookiePerHour.length; i++) {
      total = total + avgCookiePerHour[i];
    }
    return total;
  },
  render: function(){

    let divEl = document.getElementById('parent');
    let articleEl = document.createElement('article');
    divEl.appendChild(articleEl);
    let h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;
    let ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);

    for (let i = 0; i < hoursOpen.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hoursOpen[i]} : ${seattle.avgCookiePerHour()[i]} cookies`;
    }
    let totalEl = document.createElement('li');
    ulEl.appendChild(totalEl);
    totalEl.textContent = `Total : ${seattle.totalCookies()} cookies`;
  }

};
lima.render();
