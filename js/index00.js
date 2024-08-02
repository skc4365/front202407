$("#login").click(function (e) {
    // let opt = "top=150, left=-500, width=400, height=300, status=no, menubar=no, toolbar=no, resizable=no";
    let opt = "top=150, left=-500, width=400, height=300, status=no, menubar=no, toolbar=no, resizable=no";
    let myLogin = open("../login00.html", "login", opt);
    // 
    /*myLogin.focus();

    alert(myLogin.location.href); // (*) about:blank, loading hasn't started yet

    myLogin.onload = function () {
        let html = `<div style="font-size:30px">Welcome!</div>`;
        myLogin.document.body.insertAdjacentHTML('afterbegin', html);
    };*/
    // 팝업에서 창에 접근
    /*
    myLogin.document.write(
        "<script>window.opener.document.body.innerHTML = 'Test'<\/script>"
    );*/


});

$("#subMenu>li").click(function (e) {
    $("#result").innerHTML(e);

});

$("#btnDrop").mouseenter(function (e) {
    $("#subMenu").stop().show(500);

});
$("#nav").mouseleave(function (e) {
    $("#subMenu").stop().hide(1000);

});

$("#title").children().click(function (e) {
    $(this).parent().css("border", "1px solid red");
    $(this).css("border", "1px solid blue");



    // $(this).attr("display", "none");
    // alert($(this).attr("id"))
});


