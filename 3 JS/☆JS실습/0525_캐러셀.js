// 'use strict';
window.onload = function(){
    // 이미지 배열 만들기
    pics = ['pic-1.jpg','pic-2.jpg','pic-3.jpg','pic-4.jpg','pic-5.jpg'];

    // 컨테이너 박스의  배경화면 
    // 배열의 0번째 인덱스 값을 넣어 봅시다.

    //1. 컨테이너 박스접근
    // 아이디로 접근
    
    index = 0;

    // 컨테이너 박스의 밷그라운드 설정
    // 배열의 설정 0번째 이미지를 보여줌
    container.style.backgroundImage = 'url(images/'+ pics[index]+')';


    // 왼쪽 버튼 클릭 시 0보다 작은지
    left.addEventListener('click', function(){
        index--;

        if(index < 0){
            // 마지막 그림으로 이동
            index = pics.length-1;
        }
        container.style.backgroundImage = 'url(images/'+pics[index]+')';


    });

    // 오른쪽 버튼 클릭시 배열의 총길이보다 크거나 같은지
    right.addEventListener('click', function(){
        index++;

        // 마지막 인덱스인 경우 0으로 초기화
        if(index >=pics.length ){
            index=0;
        }
        container.style.backgroundImage = 'url(images/'+pics[index]+')';

    });
}

// index, pics는 전역함수로 선언

// 일정간격으로 반복적으로 콜백함수를 실앵
// setInterval(콜백함수, 대기시간(밀리초), (콜백함수의 인자나열))
var i=0;
var interval = setInterval(function(){
    // i++
    // console.log('setInterval'+10);
     imgChange();

},1000);

function imgChange(){
    index++;
    // 마지막 인덱스인 경우 0으로 초기화
    if(index >=pics.length){
        index=0;
    }
    container.style.backgroundImage = 'url(images/'+pics[index]+')';
}
    
//interval 중지
function stop(){
    console.log('setInterval중지');
    clearInterval(interval);
}


