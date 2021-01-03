var productid = $("#txtItemcode").val();
console.log(productid);

// $("#productbtn").click(function () {
//     var productid = $("#txtItemcode").val();
//     var productname =$("#txtItemName").val();
//     var qty =$("#txt-qty").val();
//     var unitprive =$("#txtUnitPrice").val();
//     var total = $("#txttotalPrice").val();
//
//     var row = `<tr><th scope="row">${productname}</th> <td>${unitprive}</td> <td>${qty}</td> <td>${total}</td> <td>
//     <button  class=" btn btn-danger" type="button" style="width: 100%"> <i class="fa fa-remove">&nbsp;</i>Remove</button> </td></tr>`
//
//     $("#tbodyorder").append(row);
//
//     $("#tbodyorder tr").click(function () {
//         var name = $($(this).children().get(0)).text();
//         var unitprice =$($(this).children().get(1)).text();
//         var qty =$($(this).children().get(2)).text();
//         var total =$($(this).children().get(3)).text();
//
//         $('#txtItemName').val(name);
//         $('#txtUnitPrice').val(unitprice);
//         $('#txt-qty').val(qty);
//         $('#txttotalPrice').val(total);
//
//         console.log(name,unitprice,qty,total);
//
//     })
//
//
// });

$("#addcatagory").click(function () {

    var catagoryname = $('#catagory-name').val();
    var i = i+1;

    var row = ` <tr><th scope="row">${i}</th> <td>${catagoryname}
 </td><td><button type="button" class="btn btn-success">Active
 </button></td><td><button type="button" class="btn btn-danger">Delete
 </button><button type="button" class="btn btn-info">Edit</button></td></tr>`

});

$("#tbodycatagory").append(row);

$("#tbodycatagory tr").click(function () {

    var name = $(this).children().get(1).text();
    $('#catagory-name').text(name);

})