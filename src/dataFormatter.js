
function dataFormatter(JSONresponeSales){ //class has a single function which extracts the date and sales figures from data.js
    const dates = JSONresponeSales.map(function (data){
      var buckets = data.sales_over_time.buckets //nested map function because I want to run
          return buckets.map(function (date){    //through buckets array within the JSONresponseSales array to extract the date of sales
          return date.key_as_string
        });
    });

    const sales = JSONresponeSales.map(function (data){
      var buckets = data.sales_over_time.buckets //duplicate code to above but works for now, this extracts value of sale
        return buckets.map(function (sale){
        return sale.total_sales.value
        });
    });


    const extractedSales = [{}];  //for loop to construct formatted data, I'm sure there's a better way to do this without loops
    for (var j = 0;j < dates[0].length;j++){ //but haven't figured it out yet
        extractedSales[j] = {date: dates[0][j],car: sales[0][j],phone: sales[1][j]}
    }
    return extractedSales;
}
export {dataFormatter}; //export function so it can be used in EducationPage.jsx



