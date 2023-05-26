
// 중요
window.onload = function(){
// 화면 단 모두 보여준 후 마지막에(준비완료되고) 스크립트 가져옴
    var r = parseInt(Math.random()*256);
    var g = parseInt(Math.random()*256);
    var b = parseInt(Math.random()*256);

    document.body.style.backgroundColor=`rgb(${r}, ${g}, ${b})`;
}

function setColor(){
    // 0부터 ~255까지의 임의의 수 추출
    var r = parseInt(Math.random()*256);
    var g = parseInt(Math.random()*256);
    var b = parseInt(Math.random()*256);

    document.body.style.backgroundColor=`rgb(${r}, ${g}, ${b})`;
}
// setColor

