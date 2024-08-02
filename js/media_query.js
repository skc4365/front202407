// 페이지 리사이징시에 페이지새로고침 발생
window.onresize = function () {
    document.location.reload();
}
// 미디어쿼리 적용
if (matchMedia("screen and (max-width: 700px)").matches) {
    // 세로모드
    $("#myDimension").html("창크기" + window.outerWidth);
    // $(".wrap").css({
    //     "background-color": "yellow",
    //     "color": "orange"
    // });

    // 공지사항과 게시판 재정렬
    $("#split").css("display", "block");
} else if (matchMedia("not all and (orientation: landscape)").matches) {
    // 세로모드_모바일체크
    $("#myDimension").html("창크기" + window.outerWidth);
    // $(".wrap").css({
    //     "background-color": "orange",
    //     "color": "white"
    // });

    // 공지사항과 게시판 재정렬
    $("#split").css("display", "block");
} else if ("screen and (min-width: 1024px)") {
    // 가로모드
    $("#myDimension").html("창크기" + window.outerWidth + "DIV분할화면");
    // $(".wrap").css({
    //     "border": "1px solid red",
    //     "background-color": "olive",
    //     "color": "white"
    // });
    // 공지사항과 게시판 재정렬
    $(".split").css(
        {
            "display": "flex",
            "align-items": "center"
        }
    );

}
