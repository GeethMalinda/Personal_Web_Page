// var qty = '';
// var up = ''
// $("#p-txt-qty").text().change(function () {
// qty = $(this).val();
// });
//
// $("#p-txt-UnitPrice").text().change(function () {
// up = $(this).val();
// });
//
// $("#p-txt-totalPrice").change(function () {
//     var a = $(this).text(qty * up);
//     console.log(a);
// })

var qty ='';
var unitprice="";
$("#p-txt-qty").change(function () {

    qty = $(this).val();
});
$("#p-txt-UnitPrice").change(function () {
    unitprice = $(this).val();
})

$("#p-txt-totalPrice").focus(function () {
    $(this).val(qty * unitprice);
})