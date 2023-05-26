'use strict';
window.onload =function(){

    let container =document.querySelector('#container')
    let order =document.querySelector('#order')
    let orderInfo =document.querySelector('#orderInfo')


    order.addEventListener('click', ()=>{

        // // 요소노드 생성
        // // 텍스트 노드 생성
        // // 요소와 텍스트 노드 연결
        // // 연결 (자식 요소로 등록)
        // // 부모 요소 선택
        // // 삽입하고 싶은 위치의 노드선택


        let p = document.createElement('p')

        let innerText = document.querySelector('#container>h2').innerText;

        let orderText = document.createTextNode(innerText)

        p.appendChild(orderText);
            p.style.fontSize = '0.8em';
            p.style.color = 'blue';
            p.style.fontWeight = 800;

        orderInfo.appendChild(p);
    });
}