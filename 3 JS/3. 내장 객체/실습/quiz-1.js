'use strict';
window.onload = function(){
    // enroll.addEventListener('submit', function(){

    //     let container = document.querySelector('#container');

    //     let nameNode = document.createElement('td');
    //     let majorNode = document.createElement('td');

    //     let nameText = document.createTextNode("고길동");
    //     let majorText = document.createTextNode("컴퓨터공학");

    //     nameNode.appendChild(nameText);
    //     majorNode.appendChild(majorText);

    //     let thead = document.querySelector('thead');
    //     let td = document.querySelector('td');

    //     thead.insertBefore(nameNode, td);
    // });
//--------------------------------------------------------------------------------
    // 버튼 요소 선택
    let btn = document.querySelector("#enroll");

    btn.addEventListener('click', function(e){
        // 버튼이 하나인 경우 click 이벤트 실행 후 기본 이벤트인 submit이 동작함
        // 기본이벤트 제거해주어야 정보 입력됨
        e.preventDefault();

        // input필드에 입력된 내용을 변수에 저장
       let userName = document.querySelector('#username').value;
       let userMajor = document.querySelector('#major').value;

       let tbody = document.querySelector("attendant > tbody");

        // 테이블 행 생성
        let newTr = document.createElement('tr');
        // 테이블 칸 생성
        let newTdName = document.createElement('td');

        newTdName.innerHTML = userName;
        
        let newTdMajor = document.createElement('td');
        
        newTdMajor.innerHTML = userMajor;

        // 행에 자식 요소로 칸 추가
        newTr.appendChild(newTdName);
        newTr.appendChild(newTdMajor);

        // 테이블에 자식요소로 행을 추가
        tbody.appendChild(newTr);
    });
}