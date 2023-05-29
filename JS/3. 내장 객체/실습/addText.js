'use strict';
window.onload =function(){

    let container =document.querySelector('#container')
    let order =document.querySelector('#order')
    let orderInfo =document.querySelector('#orderInfo')


    order.addEventListener('click', ()=>{

        // 요소노드 생성
        let p = document.createElement('p')


        let innerText = document.querySelector('#container>h2').innerText;

        // 텍스트 노드 생성
        // 주어진 텍스트(innerText)를 가지고 새로운 텍스트 노드를 생성하는 코드
        // 변수 orderText에는 생성된 텍스트 노드가 저장됨. 
        // 이후 해당 텍스트 노드를 적절한 위치에 추가하여 HTML 문서에 텍스트를 나타낼 수 있음
        let orderText = document.createTextNode(innerText)

        // p 요소에 생성된 텍스트 노드(orderText)를 자식 요소로 추가하는 코드
        // appendChild()를 호출하여 orderText를 p 요소의 자식 노드로 추가하면, 
        // 해당 p 요소에 텍스트가 추가되어 웹 페이지에서 텍스트가 나타남
        p.appendChild(orderText);

        //생성된 텍스트 노드 스타일 지정
        p.style.fontSize = '0.8em';
        p.style.color = 'blue';
        p.style.fontWeight = 800;

        // orderInfo 요소에 p 요소를 추가
        orderInfo.appendChild(p);
    });
}