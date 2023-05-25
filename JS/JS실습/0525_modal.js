// 'use strict';
window.onload = function(){
    // 프로필보기 눌럿을때 보였다가 엑스 누르면 사라짐...
    // function안에 function만들면 외부에서 실행안되쥬
    // function test(){}
    // 함수안에 정의하면 내부함수
    let open = document.getElementById('open');
    let close = document.getElementById('close');
    let modal = document.getElementById ('modal-box');
    // 아이디에 특수문자(-)가 입력되서 아이디로 바로 접근 안됨!

    open.addEventListener('click', function(){
        // 모달창 열기
        // class속성 active추가
        modal.classList.add('active');
   
    });

    close.addEventListener('click', function(){
        // 모달창 닫기
        // class속성 active제거
        modal.classList.remove('active');
        
    });
}
