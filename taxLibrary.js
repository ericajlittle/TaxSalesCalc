var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


// function taxBranch(companySalesData) {
//   for (var i =0; i < eachCompany.sales.length; i++) {
//     var currentCompany = companySalesData[i];
//     var branchTaxRate = salesTaxRates[currentCompany.province];
//     var branchTaxTotal = addCompanySales(currentCompany) * branchTaxRate;

//     console.log(branchTaxTotal);
// }

// function eachCompSales(companySalesData) {
//   for (var i = 0; i < companySalesData.length; i++) {
//     var currentCompany = companySalesData[i];
//     var currentSalesTotal = addCompanySales(currentCompany);
//     console.log(currentSalesTotal);
//   }
// }
// eachCompSales(companySalesData);


function addCompanySales(eachCompany) {
  var total = 0;
  for (var i =0; i < eachCompany.sales.length; i++) {
    total += eachCompany.sales[i];
  }
  return total;
}
// console.log(addCompanySales(eachCompany));

function calcBranchTaxTotal(eachCompany, branchTotalSales, taxRates) {
  var provinceCode = eachCompany.province;
  var taxRate = taxRates[provinceCode];
  return taxRate * branchTotalSales;
}

function calculateSalesTax(salesData, taxRates) {
  var answer = {};

  for (var i = 0; i < companySalesData.length; i++) {
    var currentCompany = companySalesData[i];
    var currentSalesTotal = addCompanySales(currentCompany);
    var currentTaxTotal = calcBranchTaxTotal(currentCompany, currentSalesTotal, taxRates);
    var currentCompanyName = currentCompany.name;

    if (answer[currentCompanyName] === undefined) {
      var partialAnswer = {
        totalSales: currentSalesTotal,
        totalTaxes: currentTaxTotal
      };
      answer[currentCompanyName] = partialAnswer;
    } else {
      answer[currentCompanyName].totalSales += currentSalesTotal;
      answer[currentCompanyName].totalTaxes += currentTaxTotal;
    }
  }

  return answer;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/