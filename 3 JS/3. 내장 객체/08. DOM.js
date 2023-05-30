'use strict';
window.onload = function(){
    //텍스트 노드가 있는 요소 노드 생성
    btn1.addEventListener('click', ()=>{
        // 요소노드 생성
        let elementNode = document.createElement('h3');

        // 텍스트 노드 생성
        let textNode = document.createTextNode('운수 좋은 날');

        // 요소와 텍스트 노드 연결
        // 연결 (자식 요소로 등록), 부모 요소의 맨 마지막 요소로 추가됨
        elementNode.appendChild(textNode);
        area1.appendChild(elementNode);

        area1.innerHTML += `<h3>innerHTML로도 가능합니다.</h3>`;
    });

    // 텍스트 노드가 없는 요소 노드 생성
    // 요소의 속성을 설정하는 방법
    btn2.addEventListener('click', function(){

        // 요소노드 생성
        // - 이미지 요소 노드 생성
        let imgNode = document.createElement('img');

        // 속성 설정하는 방법
        imgNode.src ='images/morning.jpg';
        imgNode.setAttribute('height','100px')
        imgNode.setAttribute('width','150px')

        // 연결(자식요소로 추가)
        area2.appendChild(imgNode)

        // 알던 방식
        area2.innerHTML += `<img src="images/morning.jpg" width ='150px' height='100px'>`;
    });

    // 객체 노드 삭제
    btn3.addEventListener('click', (e)=>{
        area3.remove();

        // 이벤트가 발생한 요소
        let target=e.target;
        console.log(target)

        // 상위요소를 반환
        console.log(target.parentNode);

        //상위요소의 자식노드를 삭제
        let delNode = document.getElementById('area1');
        target.parentNode.removeChild(delNode);
    });

    // 원하는 위치에 노드 삽입하기
    btn4.addEventListener('click', ()=>{
        //p요소 생성, text node 생성, 두개 연결, 부모요소 선택, 삽입하고 싶은 위치의 노드선택

        // 요소노드 생성
        let pNode = document.createElement('p');

        // 텍스트 노드 생성
        let textNode = document.createTextNode('어향가지 그라탕');
  
        // 요소와 텍스트 노드 연결
        pNode.appendChild(textNode);

        //부모 요소 선택
        let body =document.querySelector('body');
         
        //노드 선택 (삽입하고 싶은 위치의 요소를 선택) h1 선택
        let h1 =document.querySelector('h1');

        // insertBefore(추가할요소, 추가할위치의 요소)
        body.insertBefore(pNode, h1);
        body.appendChild(pNode);   
    });




}
