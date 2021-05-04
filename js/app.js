'use strict';

//lab07

let brachesArray = [];

let hourOperation = ['6:00am', '7:00am', '8:00am', '9:00am', '10:am', '11:am', '12pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];


function Stores(branchName, minNumOfCustPerHour, maxNumOfCustPerHour, AvgCookieSalePerCust) {
    this.branchName = branchName;
    this.minNumOfCustPerHour = minNumOfCustPerHour;
    this.maxNumOfCustPerHour = maxNumOfCustPerHour;
    this.AvgCookieSalePerCust = AvgCookieSalePerCust;
    this.numOfCustPerHour = [];
    this.calculatCookiesPerHour = [];
    this.totalAmount = 0;
    // this.totalOfSalesPerDay = 0;
    // this.totals = 0;
    brachesArray.push(this);
}
console.log(brachesArray);
Stores.prototype.randomNumber = function () {
    for (let num = 0; num < hourOperation.length; num++) {
        //generat random number
        this.numOfCustPerHour.push(Math.floor(Math.random() * (this.maxNumOfCustPerHour - this.minNumOfCustPerHour + 1) + this.minNumOfCustPerHour));

    }
}
Stores.prototype.calculation = function () {
    for (let index = 0; index < hourOperation.length; index++) {
        //calculation for avarege cookies * random number
        this.calculatCookiesPerHour.push(Math.ceil(this.numOfCustPerHour[index] * this.AvgCookieSalePerCust));

        //total number cookies per hour
        this.totalAmount += this.calculatCookiesPerHour[index];


    }
}





let divEl = document.getElementById('container');

let tavblEl = document.createElement('table');
divEl.appendChild(tavblEl);


function render1() {


    let tHeader1 = document.createElement('tr');
    tavblEl.appendChild(tHeader1);
    for (let th = 0; th < hourOperation.length; th++) {
        let thel1 = document.createElement('th');
        tHeader1.appendChild(thel1);
        thel1.textContent = `${hourOperation[th]}`;
    }
    let thel1 = document.createElement('th');
    tHeader1.appendChild(thel1);
    thel1.textContent = 'Daily Location Total';
}

Stores.prototype.render2 = function () {

    let tBody = document.createElement('tr');
    tavblEl.appendChild(tBody);

    let td1 = document.createElement('td');
    tBody.appendChild(td1);
    td1.textContent = this.branchName;

    for (let calc = 0; calc < this.calculatCookiesPerHour.length; calc++) {
        let td2 = document.createElement('td');
        tBody.appendChild(td2);
        td2.textContent = this.calculatCookiesPerHour[calc];
    }

    let td3 = document.createElement('td');
    tBody.appendChild(td3);
    td3.textContent = this.totalAmount;

}

function render4() {


    let tfooter = document.createElement('tr');
    tavblEl.appendChild(tfooter);

    let td4 = document.createElement('td');
    tfooter.appendChild(td4)
    td4.textContent = 'Totals:';

    
    let totals = 0;

    for (let total = 0; total < hourOperation.length; total++) {
        let totalOfSalesPerDay = 0;
        for (let i = 0; i < brachesArray.length; i++) {
            totalOfSalesPerDay += brachesArray[i].calculatCookiesPerHour[total];
            totals += brachesArray[i].totalAmount ;

        }


        let td5 = document.createElement('td');
        tfooter.appendChild(td5);
        td5.textContent = totalOfSalesPerDay;
    }

    let td6 = document.createElement('td');
    tfooter.appendChild(td6);
    td6.textContent = totals;


}




let seattle = new Stores('Seattle', 23, 65, 6.3);
seattle.randomNumber();
seattle.calculation();
render1();
seattle.render2();





let tokyo = new Stores('Tokyo', 3, 24, 1.2);
tokyo.randomNumber();
tokyo.calculation();
tokyo.render2();

let dubai = new Stores('Dubai', 11, 38, 3.7);
dubai.randomNumber();
dubai.calculation();
dubai.render2();


let paris = new Stores('Paris', 20, 38, 2.3);
paris.randomNumber();
paris.calculation();
paris.render2();


let lima = new Stores('Lima', 2, 16, 4.6);
lima.randomNumber();
lima.calculation();
lima.render2();

render4();


// let branch1 = {

//     branchName: 'Seattle',
//     minNumOfCustPerHour: 23,
//     maxNumOfCustPerHour: 65,
//     AvgCookieSalePerCust: 6.3,
//     hourOperation: ['6:00am', '7:00am', '8:00am', '9:00am', '10:am', '11:am', '12pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],
//     numOfCustPerHour: [],
//     calculatCookiesPerHour: [],
//     totalAmount: 0,

//     randomNumber: function () {

//         for (let num = 0; num < this.hourOperation.length; num++) {
//             //generat random number
//             this.numOfCustPerHour.push(Math.floor(Math.random() * (this.maxNumOfCustPerHour - this.minNumOfCustPerHour + 1) + this.minNumOfCustPerHour));

//         }
//     },

//     calculation: function () {
//         for (let index = 0; index < this.hourOperation.length; index++) {
//             //calculation for avarege cookies * random number
//             this.calculatCookiesPerHour.push(Math.ceil(this.numOfCustPerHour[index] * this.AvgCookieSalePerCust));

//             //total number cookies per hour
//             this.totalAmount += this.calculatCookiesPerHour[index];


//         }
//     },


//     render: function () {
//         let divEl = document.getElementById('container');

//         let h2el = document.createElement('h2');
//         h2el.textContent = this.branchName;
//         divEl.appendChild(h2el);

//         let ulEl = document.createElement('ul');
//         divEl.appendChild(ulEl);
//         for (let i = 0; i < this.hourOperation.length; i++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${this.hourOperation[i]} ${this.calculatCookiesPerHour[i]} cookies`;
//         }

//         let totalli = document.createElement('li');
//         ulEl.appendChild(totalli);
//         totalli.textContent = `Total: ${this.totalAmount} cookies`

//     }
// }
// branch1.randomNumber();
// branch1.calculation();
// branch1.render();



// let branch2 = {

//     branchName: 'Tokyo',
//     minNumOfCustPerHour: 3,
//     maxNumOfCustPerHour: 24,
//     AvgCookieSalePerCust: 1.2,
//     hourOperation: ['6:00am', '7:00am', '8:00am', '9:00am', '10:am', '11:am', '12pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],
//     numOfCustPerHour: [],
//     calculatCookiesPerHour: [],
//     totalAmount: 0,

//     randomNumber: function () {

//         for (let num = 0; num < this.hourOperation.length; num++) {
//             //generat random number
//             this.numOfCustPerHour.push(Math.floor(Math.random() * (this.maxNumOfCustPerHour - this.minNumOfCustPerHour + 1) + this.minNumOfCustPerHour));

//         }
//     },

//     calculation: function (){
//         for (let index = 0; index < this.hourOperation.length; index++) {
//             //calculation for avarege cookies * random number
//             this.calculatCookiesPerHour.push(Math.ceil(this.numOfCustPerHour[index]*this.AvgCookieSalePerCust));

//             //total number cookies per hour
//             this.totalAmount += this.calculatCookiesPerHour[index];


//         }
//     },


//     render: function () {
//         let divEl = document.getElementById('container');

//         let h2el = document.createElement('h2');
//         h2el.textContent = this.branchName;
//         divEl.appendChild(h2el);

//         let ulEl = document.createElement('ul');
//         divEl.appendChild(ulEl);
//         for (let i = 0; i < this.hourOperation.length; i++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${this.hourOperation[i]} ${this.calculatCookiesPerHour[i]} cookies`;
//         }

//         let totalli = document.createElement('li');
//         ulEl.appendChild(totalli);
//         totalli.textContent = `Total: ${this.totalAmount} cookies`

//     }
// }
// branch2.randomNumber();
// branch2.calculation();
// branch2.render();


// let branch3 = {

//     branchName: 'Dubai',
//     minNumOfCustPerHour: 11,
//     maxNumOfCustPerHour: 38,
//     AvgCookieSalePerCust: 3.7,
//     hourOperation: ['6:00am', '7:00am', '8:00am', '9:00am', '10:am', '11:am', '12pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],
//     numOfCustPerHour: [],
//     calculatCookiesPerHour: [],
//     totalAmount: 0,

//     randomNumber: function () {

//         for (let num = 0; num < this.hourOperation.length; num++) {
//             //generat random number
//             this.numOfCustPerHour.push(Math.floor(Math.random() * (this.maxNumOfCustPerHour - this.minNumOfCustPerHour + 1) + this.minNumOfCustPerHour));

//         }
//     },

//     calculation: function (){
//         for (let index = 0; index < this.hourOperation.length; index++) {
//             //calculation for avarege cookies * random number
//             this.calculatCookiesPerHour.push(Math.ceil(this.numOfCustPerHour[index]*this.AvgCookieSalePerCust));

//             //total number cookies per hour
//             this.totalAmount += this.calculatCookiesPerHour[index];


//         }
//     },


//     render: function () {
//         let divEl = document.getElementById('container');

//         let h2el = document.createElement('h2');
//         h2el.textContent = this.branchName;
//         divEl.appendChild(h2el);

//         let ulEl = document.createElement('ul');
//         divEl.appendChild(ulEl);
//         for (let i = 0; i < this.hourOperation.length; i++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${this.hourOperation[i]} ${this.calculatCookiesPerHour[i]} cookies`;
//         }

//         let totalli = document.createElement('li');
//         ulEl.appendChild(totalli);
//         totalli.textContent = `Total: ${this.totalAmount} cookies`

//     }
// }
// branch3.randomNumber();
// branch3.calculation();
// branch3.render();

// let branch4 = {

//     branchName: 'Paris',
//     minNumOfCustPerHour: 20,
//     maxNumOfCustPerHour: 38,
//     AvgCookieSalePerCust: 2.3,
//     hourOperation: ['6:00am', '7:00am', '8:00am', '9:00am', '10:am', '11:am', '12pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],
//     numOfCustPerHour: [],
//     calculatCookiesPerHour: [],
//     totalAmount: 0,

//     randomNumber: function () {

//         for (let num = 0; num < this.hourOperation.length; num++) {
//             //generat random number
//             this.numOfCustPerHour.push(Math.floor(Math.random() * (this.maxNumOfCustPerHour - this.minNumOfCustPerHour + 1) + this.minNumOfCustPerHour));

//         }
//     },

//     calculation: function (){
//         for (let index = 0; index < this.hourOperation.length; index++) {
//             //calculation for avarege cookies * random number
//             this.calculatCookiesPerHour.push(Math.ceil(this.numOfCustPerHour[index]*this.AvgCookieSalePerCust));

//             //total number cookies per hour
//             this.totalAmount += this.calculatCookiesPerHour[index];


//         }
//     },


//     render: function () {
//         let divEl = document.getElementById('container');

//         let h2el = document.createElement('h2');
//         h2el.textContent = this.branchName;
//         divEl.appendChild(h2el);

//         let ulEl = document.createElement('ul');
//         divEl.appendChild(ulEl);
//         for (let i = 0; i < this.hourOperation.length; i++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${this.hourOperation[i]} ${this.calculatCookiesPerHour[i]} cookies`;
//         }

//         let totalli = document.createElement('li');
//         ulEl.appendChild(totalli);
//         totalli.textContent = `Total: ${this.totalAmount} cookies`

//     }
// }
// branch4.randomNumber();
// branch4.calculation();
// branch4.render();

// let branch5 = {

//     branchName: 'Lima',
//     minNumOfCustPerHour: 2,
//     maxNumOfCustPerHour: 16,
//     AvgCookieSalePerCust: 4.6,
//     hourOperation: ['6:00am', '7:00am', '8:00am', '9:00am', '10:am', '11:am', '12pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],
//     numOfCustPerHour: [],
//     calculatCookiesPerHour: [],
//     totalAmount: 0,

//     randomNumber: function () {

//         for (let num = 0; num < this.hourOperation.length; num++) {
//             //generat random number
//             this.numOfCustPerHour.push(Math.floor(Math.random() * (this.maxNumOfCustPerHour - this.minNumOfCustPerHour + 1) + this.minNumOfCustPerHour));

//         }
//     },

//     calculation: function (){
//         for (let index = 0; index < this.hourOperation.length; index++) {
//             //calculation for avarege cookies * random number
//             this.calculatCookiesPerHour.push(Math.ceil(this.numOfCustPerHour[index]*this.AvgCookieSalePerCust));

//             //total number cookies per hour
//             this.totalAmount += this.calculatCookiesPerHour[index];


//         }
//     },


//     render: function () {
//         let divEl = document.getElementById('container');

//         let h2el = document.createElement('h2');
//         h2el.textContent = this.branchName;
//         divEl.appendChild(h2el);

//         let ulEl = document.createElement('ul');
//         divEl.appendChild(ulEl);
//         for (let i = 0; i < this.hourOperation.length; i++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${this.hourOperation[i]} ${this.calculatCookiesPerHour[i]} cookies`;
//         }

//         let totalli = document.createElement('li');
//         ulEl.appendChild(totalli);
//         totalli.textContent = `Total: ${this.totalAmount} cookies`

//     }
// }
// branch5.randomNumber();
// branch5.calculation();
// branch5.render();