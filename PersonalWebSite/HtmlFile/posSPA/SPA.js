

$('#login').css("display","block");
$('#PlaceOrder').css("display","none");
$('#edit-profile').css("display","none");
$('#ManageBrand').css("display","none");
$('#ManageCatagory').css("display","none");
$('#ManageProduct').css("display","none");
$('#dashbord').css("display","none");

$('#loginbtn').click(function () {

 });

 $('#loginbtn').click(function () {
     $('#login').css("display","none");
     $('#dashbord').css("display","block");

 });
$('#orderbtn').click(function () {
    $('#dashbord').css("display","none");
    $('#PlaceOrder').css("display","flex");

});
$('#edit-profile-btn').click(function () {
    $('#dashbord').css("display","none");
    $('#edit-profile').css("display","block");

});

$('#managecatagorybtn').click(function () {
    $('#dashbord').css("display","none");
    $('#ManageCatagory').css("display","block");

});
$('#homemenu').click(function () {
    $('#login').css("display","none");
    $('#PlaceOrder').css("display","none");
    $('#edit-profile').css("display","none");
    $('#ManageBrand').css("display","none");
    $('#ManageCatagory').css("display","none");
    $('#ManageProduct').css("display","none");
    $('#dashbord').css("display","block");


});
$('#managebrandbtn').click(function () {
    $('#dashbord').css("display","none");
    $('#ManageBrand').css("display","block");

});
$('#manageprductbtn').click(function () {
    $('#dashbord').css("display","none");
    $('#login').css("display","none");
    $('#PlaceOrder').css("display","none");
    $('#edit-profile').css("display","none");
    $('#ManageBrand').css("display","none");
    $('#ManageCatagory').css("display","none");
    $('#ManageProduct').css("display","block");
    // $('#ManageProduct').css("display","block");

});




//
// var managecatagorybtn = document.getElementById('managecatagorybtn');
// managecatagorybtn.addEventListener("click", function () {
//     PlaceOrder.style.display ='none';
//
//     editprofile.style.display ='none';
//
//     managebrand.style.display ='none';
//
//     managecatagory.style.display ='block';
//
//     manageproduct.style.display ='none';
//
//     login.style.display ='none';
//
//     dashbord.style.display ='none';
//
// })
// var managebrandbtn = document.getElementById('managebrandbtn');
// managebrandbtn.addEventListener("click", function () {
//     PlaceOrder.style.display ='none';
//
//     editprofile.style.display ='none';
//
//     managebrand.style.display ='block';
//
//     managecatagory.style.display ='none';
//
//     manageproduct.style.display ='none';
//
//     login.style.display ='none';
//
//     dashbord.style.display ='none';
//
// })
//
//
//
