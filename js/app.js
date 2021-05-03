'use strict';

let branch1 = {

    branchName: 'Seattle',
    minNumOfCustPerHour: 23,
    maxNumOfCustPerHour: 65,
    AvgCookieSalePerCust: 6.3,
    hourOperation: ['6:00am', '7:00am', '8:00am', '9:00am', '10:am', '11:am', '12pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],
    numOfCustPerHour: [],
    calculatCookiesPerHour: [],
    totalAmount: 0,

    randomNumber: function () {

        for (let num = 0; num < this.hourOperation.length; num++) {
            //generat random number
            this.numOfCustPerHour.push(Math.floor(Math.random() * (this.maxNumOfCustPerHour - this.minNumOfCustPerHour + 1) + this.minNumOfCustPerHour));

        }
    },

    calculation: function (){
        for (let index = 0; index < this.hourOperation.length; index++) {
            //calculation for avarege cookies * random number
            this.calculatCookiesPerHour.push(Math.ceil(this.numOfCustPerHour[index]*this.AvgCookieSalePerCust));
            
            //total number cookies per hour
            this.totalAmount += this.calculatCookiesPerHour[index];


        }
    },


    render: function () {
        let divEl = document.getElementById('container');

        let h2el = document.createElement('h2');
        h2el.textContent = this.branchName;
        divEl.appendChild(h2el);

        let ulEl = document.createElement('ul');
        divEl.appendChild(ulEl);
        for (let i = 0; i < this.hourOperation.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${this.hourOperation[i]} ${this.calculatCookiesPerHour[i]} cookies`;
        }

        let totalli = document.createElement('li');
        ulEl.appendChild(totalli);
        totalli.textContent = `Total: ${this.totalAmount} cookies`

    }
}
branch1.randomNumber();
branch1.calculation();
branch1.render();



let branch2 = {

    branchName: 'Tokyo',
    minNumOfCustPerHour: 3,
    maxNumOfCustPerHour: 24,
    AvgCookieSalePerCust: 1.2,
    hourOperation: ['6:00am', '7:00am', '8:00am', '9:00am', '10:am', '11:am', '12pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],
    numOfCustPerHour: [],
    calculatCookiesPerHour: [],
    totalAmount: 0,

    randomNumber: function () {

        for (let num = 0; num < this.hourOperation.length; num++) {
            //generat random number
            this.numOfCustPerHour.push(Math.floor(Math.random() * (this.maxNumOfCustPerHour - this.minNumOfCustPerHour + 1) + this.minNumOfCustPerHour));

        }
    },

    calculation: function (){
        for (let index = 0; index < this.hourOperation.length; index++) {
            //calculation for avarege cookies * random number
            this.calculatCookiesPerHour.push(Math.ceil(this.numOfCustPerHour[index]*this.AvgCookieSalePerCust));
            
            //total number cookies per hour
            this.totalAmount += this.calculatCookiesPerHour[index];


        }
    },


    render: function () {
        let divEl = document.getElementById('container');

        let h2el = document.createElement('h2');
        h2el.textContent = this.branchName;
        divEl.appendChild(h2el);

        let ulEl = document.createElement('ul');
        divEl.appendChild(ulEl);
        for (let i = 0; i < this.hourOperation.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${this.hourOperation[i]} ${this.calculatCookiesPerHour[i]} cookies`;
        }

        let totalli = document.createElement('li');
        ulEl.appendChild(totalli);
        totalli.textContent = `Total: ${this.totalAmount} cookies`

    }
}
branch2.randomNumber();
branch2.calculation();
branch2.render();


let branch3 = {

    branchName: 'Dubai',
    minNumOfCustPerHour: 11,
    maxNumOfCustPerHour: 38,
    AvgCookieSalePerCust: 3.7,
    hourOperation: ['6:00am', '7:00am', '8:00am', '9:00am', '10:am', '11:am', '12pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],
    numOfCustPerHour: [],
    calculatCookiesPerHour: [],
    totalAmount: 0,

    randomNumber: function () {

        for (let num = 0; num < this.hourOperation.length; num++) {
            //generat random number
            this.numOfCustPerHour.push(Math.floor(Math.random() * (this.maxNumOfCustPerHour - this.minNumOfCustPerHour + 1) + this.minNumOfCustPerHour));

        }
    },

    calculation: function (){
        for (let index = 0; index < this.hourOperation.length; index++) {
            //calculation for avarege cookies * random number
            this.calculatCookiesPerHour.push(Math.ceil(this.numOfCustPerHour[index]*this.AvgCookieSalePerCust));
            
            //total number cookies per hour
            this.totalAmount += this.calculatCookiesPerHour[index];


        }
    },


    render: function () {
        let divEl = document.getElementById('container');

        let h2el = document.createElement('h2');
        h2el.textContent = this.branchName;
        divEl.appendChild(h2el);

        let ulEl = document.createElement('ul');
        divEl.appendChild(ulEl);
        for (let i = 0; i < this.hourOperation.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${this.hourOperation[i]} ${this.calculatCookiesPerHour[i]} cookies`;
        }

        let totalli = document.createElement('li');
        ulEl.appendChild(totalli);
        totalli.textContent = `Total: ${this.totalAmount} cookies`

    }
}
branch3.randomNumber();
branch3.calculation();
branch3.render();

let branch4 = {

    branchName: 'Paris',
    minNumOfCustPerHour: 20,
    maxNumOfCustPerHour: 38,
    AvgCookieSalePerCust: 2.3,
    hourOperation: ['6:00am', '7:00am', '8:00am', '9:00am', '10:am', '11:am', '12pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],
    numOfCustPerHour: [],
    calculatCookiesPerHour: [],
    totalAmount: 0,

    randomNumber: function () {

        for (let num = 0; num < this.hourOperation.length; num++) {
            //generat random number
            this.numOfCustPerHour.push(Math.floor(Math.random() * (this.maxNumOfCustPerHour - this.minNumOfCustPerHour + 1) + this.minNumOfCustPerHour));

        }
    },

    calculation: function (){
        for (let index = 0; index < this.hourOperation.length; index++) {
            //calculation for avarege cookies * random number
            this.calculatCookiesPerHour.push(Math.ceil(this.numOfCustPerHour[index]*this.AvgCookieSalePerCust));
            
            //total number cookies per hour
            this.totalAmount += this.calculatCookiesPerHour[index];


        }
    },


    render: function () {
        let divEl = document.getElementById('container');

        let h2el = document.createElement('h2');
        h2el.textContent = this.branchName;
        divEl.appendChild(h2el);

        let ulEl = document.createElement('ul');
        divEl.appendChild(ulEl);
        for (let i = 0; i < this.hourOperation.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${this.hourOperation[i]} ${this.calculatCookiesPerHour[i]} cookies`;
        }

        let totalli = document.createElement('li');
        ulEl.appendChild(totalli);
        totalli.textContent = `Total: ${this.totalAmount} cookies`

    }
}
branch4.randomNumber();
branch4.calculation();
branch4.render();

let branch5 = {

    branchName: 'Lima',
    minNumOfCustPerHour: 2,
    maxNumOfCustPerHour: 16,
    AvgCookieSalePerCust: 4.6,
    hourOperation: ['6:00am', '7:00am', '8:00am', '9:00am', '10:am', '11:am', '12pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],
    numOfCustPerHour: [],
    calculatCookiesPerHour: [],
    totalAmount: 0,

    randomNumber: function () {

        for (let num = 0; num < this.hourOperation.length; num++) {
            //generat random number
            this.numOfCustPerHour.push(Math.floor(Math.random() * (this.maxNumOfCustPerHour - this.minNumOfCustPerHour + 1) + this.minNumOfCustPerHour));

        }
    },

    calculation: function (){
        for (let index = 0; index < this.hourOperation.length; index++) {
            //calculation for avarege cookies * random number
            this.calculatCookiesPerHour.push(Math.ceil(this.numOfCustPerHour[index]*this.AvgCookieSalePerCust));
            
            //total number cookies per hour
            this.totalAmount += this.calculatCookiesPerHour[index];


        }
    },


    render: function () {
        let divEl = document.getElementById('container');

        let h2el = document.createElement('h2');
        h2el.textContent = this.branchName;
        divEl.appendChild(h2el);

        let ulEl = document.createElement('ul');
        divEl.appendChild(ulEl);
        for (let i = 0; i < this.hourOperation.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${this.hourOperation[i]} ${this.calculatCookiesPerHour[i]} cookies`;
        }

        let totalli = document.createElement('li');
        ulEl.appendChild(totalli);
        totalli.textContent = `Total: ${this.totalAmount} cookies`

    }
}
branch5.randomNumber();
branch5.calculation();
branch5.render();