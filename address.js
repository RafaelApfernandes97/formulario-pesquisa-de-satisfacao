var address = require('address');
var arr = []

address.mac(function(err,address){
    arr.push(address);
    console.log(arr);
})


