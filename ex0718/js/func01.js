var result01 = document.getElementById("func1");
var result02 = document.getElementById("func2");
var result03 = document.getElementById("func3");
// var result04 = document.getElementById("func4");
var result05 = document.getElementById("func5");

var result;

//--------------------  함수 선언 ----------------
function line() {

    // 특정기능을 반복 사용하기 위해서
    result01.innerHTML += "<p>" + "**********" + "<p>";
}
line();
line();
line();
line();

//--------------------  함수를 이용한 구구단 -------
var dan = 2;
// result = 0;

function multiply(ii) {
    // result02.innerHTML = result02.innerHTML + (dan * ii);
    result02.innerHTML += dan + " *----- " + ii + " = " + (dan * ii) + "<br>";
}
for (let i = 1; i < 5; i++) {
    multiply(i);
}

//--------------------  함수를 이용한 더하기 -------
function add(num01, num02) {

    // var hap = 2 + 3;
    var hap = num01 + num02;

    result03.innerHTML += hap + "<br>";
}

add(2, 3);
add(45, 3463);
add(123685, 45690);

//----------------  함수를 이용한 버튼 이벤트 처리 -------
function flower(flowerName) {

    switch (flowerName) {
        case "무궁화": alert("무궁화 동호회를 추천합니다!");
            break;
        case "장미": alert("장미 동호회를 추천합니다!");
            break;
        case "국화": alert("국화 동호회를 추천합니다!");
            break;
    }

}
// flower(flowerName)

//-------------------  함수 return -------
result = 0;
var first = 13;
var last = 7;

function all(a, b) {
    var sam = a + b;

    return sam;
}

var result = all(first, last);
result05.innerHTML += "결과값: " + result;



