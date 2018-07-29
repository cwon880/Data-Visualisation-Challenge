import {JSONresponeSales} from "data";

const dates = JSONresponeSales.map(function (data){
    var buckets = data.sales_over_time.buckets //nested map function because I want to run through buckets array
    return buckets.map(function (date){
        return date.key_as_string
    });
});

const sales = JSONresponeSales.map(function (data){
    var buckets = data.sales_over_time.buckets //duplicate code to above but works for now
    return buckets.map(function (sale){
        return sale.total_sales
    });
});

