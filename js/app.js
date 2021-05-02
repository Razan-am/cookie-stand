'use strict';

let branch1 = {

    branchName: 'Seattle',
    minNumOfCustPerHour: 23,
    maxNumOfCustPerHour: 65,
    AvgCookieSalePerCust: 6.3,
    hourOperation: ['6:00am', '7:00am', '8:00am', '9:00am', '10:am', '11:am', '12pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],
    numOfCustPerHour: 0,
    totalAmount: 0,

    randomNumber: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        this.numOfCustPerHour = Math.floor(Math.random() * (max - min + 1) + min) * this.AvgCookieSalePerCust;
        return this.numOfCustPerHour
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
            liEl.textContent = `${this.hourOperation[i]} ${this.randomNumber(this.minNumOfCustPerHour,this.axNumOfCustPerHour)} cookies`;
            ulEl.appendChild(liEl);

            this.totalAmount += this.randomNumber(this.minNumOfCustPerHour,this.axNumOfCustPerHour);
        }

        liEl = document.createElement('li');
        liEl.textContent = `Totalamount ${this.totalAmount} cookies`;
        ulEl.appendChild(liEl);

    }
}
branch1.render();

let branch2 = {

    branchName: 'Tokyo',
    minNumOfCustPerHour: 3,
    maxNumOfCustPerHour: 24,
    AvgCookieSalePerCust: 1.2,
    hourOperation: ['6:00am', '7:00am', '8:00am', '9:00am', '10:am', '11:am', '12pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],
    numOfCustPerHour: 0,
    totalAmount: 0,

    randomNumber: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        this.numOfCustPerHour = Math.floor(Math.random() * (max - min + 1) + min) * this.AvgCookieSalePerCust;
        return this.numOfCustPerHour
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
            liEl.textContent = `${this.hourOperation[i]} ${this.randomNumber(this.minNumOfCustPerHour,this.axNumOfCustPerHour)} cookies`;
            ulEl.appendChild(liEl);

            this.totalAmount += this.randomNumber(this.minNumOfCustPerHour,this.axNumOfCustPerHour);
        }

        liEl = document.createElement('li');
        liEl.textContent = `Totalamount ${this.totalAmount} cookies`;
        ulEl.appendChild(liEl);

    }
}
branch2.render();


let branch3 = {

    branchName: 'Dubai',
    minNumOfCustPerHour: 11,
    maxNumOfCustPerHour: 38,
    AvgCookieSalePerCust: 3.7,
    hourOperation: ['6:00am', '7:00am', '8:00am', '9:00am', '10:am', '11:am', '12pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],
    numOfCustPerHour: 0,
    totalAmount: 0,

    randomNumber: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        this.numOfCustPerHour = Math.floor(Math.random() * (max - min + 1) + min) * this.AvgCookieSalePerCust;
        return this.numOfCustPerHour
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
            liEl.textContent = `${this.hourOperation[i]} ${this.randomNumber(this.minNumOfCustPerHour,this.axNumOfCustPerHour)} cookies`;
            ulEl.appendChild(liEl);

            this.totalAmount += this.randomNumber(this.minNumOfCustPerHour,this.axNumOfCustPerHour);
        }

        liEl = document.createElement('li');
        liEl.textContent = `Totalamount ${this.totalAmount} cookies`;
        ulEl.appendChild(liEl);

    }
}
branch3.render();

let branch4 = {

    branchName: 'Paris',
    minNumOfCustPerHour: 20,
    maxNumOfCustPerHour: 38,
    AvgCookieSalePerCust: 2.3,
    hourOperation: ['6:00am', '7:00am', '8:00am', '9:00am', '10:am', '11:am', '12pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],
    numOfCustPerHour: 0,
    totalAmount: 0,

    randomNumber: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        this.numOfCustPerHour = Math.floor(Math.random() * (max - min + 1) + min) * this.AvgCookieSalePerCust;
        return this.numOfCustPerHour
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
            liEl.textContent = `${this.hourOperation[i]} ${this.randomNumber(this.minNumOfCustPerHour,this.axNumOfCustPerHour)} cookies`;
            ulEl.appendChild(liEl);

            this.totalAmount += this.randomNumber(this.minNumOfCustPerHour,this.axNumOfCustPerHour);
        }

        liEl = document.createElement('li');
        liEl.textContent = `Totalamount ${this.totalAmount} cookies`;
        ulEl.appendChild(liEl);

    }
}
branch4.render();


let branch5 = {

    branchName: 'Lima',
    minNumOfCustPerHour: 2,
    maxNumOfCustPerHour: 16,
    AvgCookieSalePerCust: 4.6,
    hourOperation: ['6:00am', '7:00am', '8:00am', '9:00am', '10:am', '11:am', '12pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],
    numOfCustPerHour: 0,
    totalAmount: 0,

    randomNumber: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        this.numOfCustPerHour = Math.floor(Math.random() * (max - min + 1) + min) * this.AvgCookieSalePerCust;
        return this.numOfCustPerHour
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
            liEl.textContent = `${this.hourOperation[i]} ${this.randomNumber(this.minNumOfCustPerHour,this.axNumOfCustPerHour)} cookies`;
            ulEl.appendChild(liEl);

            this.totalAmount += this.randomNumber(this.minNumOfCustPerHour,this.axNumOfCustPerHour);
        }

        liEl = document.createElement('li');
        liEl.textContent = `Totalamount ${this.totalAmount} cookies`;
        ulEl.appendChild(liEl);

    }
}
branch5.render();

