'use strict';

let branch1 = {

    branchName: 'Seattle',
    minNumOfCustPerHour: 23,
    maxNumOfCustPerHour: 65,
    AvgCookieSalePerCust: 6.3,
    numOfCustPerHour: [],
    hourOperation: [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7],
    amount: [],

    randomNumber: function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        this.numOfCustPerHour = Math.floor(Math.random() * (max - min + 1) + min);
        return (this.numOfCustPerHour)
    },

    addingNum: function () {
        this.numOfCustPerHour.push(this.randomNumber);
    },

    calculatCookies: function () {
        let total = this.AvgCookieSalePerCust * this.numOfCustPerHour;
        return (total);

    },
    addCalculat: function () {
        this.amount.push(this.calculatCookies);
    },


    render: function () {

        for (let j = 0; j < this.hourOperation.length; j++) {
            this.numOfCustPerHour = this.numOfCustPerHour * this.hourOperation[j];
            document.write(this.numOfCustPerHour);
        }
      let divEl = document.getElementById('container');

      let h2el = document.createElement ('h2');
      h2el.textContent = this.branchName;
      divEl.appendChild(h2el);

      let ulEl = document.createElement('ul');
      divEl.appendChild(ulEl);
      for(let i = 0; i < this.amount.length; i++){
          let liEl = document.createElement('li');
          liEl.textContent=this.amount[i];
          ulEl.appendChild(liEl)
      }

    }
}
branch1.render();
branch1.randomNumber(23, 65);
branch1.addingNum();

