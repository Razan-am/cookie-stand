'use strict';

let branch1 = {

    branchName: 'Seattle',
    minNumOfCustPerHour: 23,
    maxNumOfCustPerHour: 65,
    AvgCookieSalePerCust: 6.3,
    hourOperation: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7],

    render: function () {
        let calculat = [];
        for (let i = 0; i < this.hourOperation.length; i++) {
            let workHour = parseInt(prompt('please choose the work hour?'));

            calculat.push = this.AvgCookieSalePerCust *= this.hourOperation[i];

        }
        console.log(calculat);
        document.write(calculat[5]);
    }


}
branch1.render();

