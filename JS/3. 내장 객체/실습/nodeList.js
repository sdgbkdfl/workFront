'use strict';
window.onload =function(){
    // addNode.addEventListener('click', funtion(){

    // // 요소노드 생성
    // // 텍스트 노드 생성
    // // 요소와 텍스트 노드 연결
    // // 연결 (자식 요소로 등록)
    // // 부모 요소 선택
    // // 삽입하고 싶은 위치의 노드선택


    // })


    // let body = document.createElement('body')

    // let p1 = document.createElement('p1');
    // p1.textContent = 'java';
    
    // let p2 = document.createElement('p2');
    // p1.textContent = 'Oracle';
 
    // body.appendChild(p1);
    // body.appendChild(p2);
 //--------------------------------------------------------------
//  선생님 하신 것
  /*
        <p>Java</p>
        <p>Oracle</p>
        <p>JSP/Servlet</p>
        <p>SPRING</p>
    */
        btn1.addEventListener('click', function(){
            let javaNode = document.createElement('p');
            //javaNode.innerHTML = 'Java';
            let javaTextNode = document.createTextNode('Java');
    
            // 텍스트 노드를 자식노드로 등록
            javaNode.appendChild(javaTextNode);
    
            // 부모요소 선택
            let body = document.querySelector('body');
            // 삽입할 위치의 요소 선택
            let p = document.querySelector('p');
    
            // 요소를 선택한요소의 앞에 삽입
            body.insertBefore(javaNode, p);
    
            let oracleNode = document.createElement('p');
            let oracleTextNode = document.createTextNode('Oracle');
            oracleNode.appendChild(oracleTextNode);
            body.insertBefore(oracleNode, p);
    
            let jspNode = document.createElement('p');
            let jspTextNode = document.createTextNode('Jsp/Servlet');
            jspNode.appendChild(jspTextNode);
            body.appendChild(jspNode);
    
            let springNode = document.createElement('p');
            let springTextNode = document.createTextNode('Spring');
            springNode.appendChild(springTextNode);
            body.appendChild(springNode);
    
        });


// 응용문제------------------------------------------------------
// 페이지가 모두 불러들여져오면 바로 실행
// 위치 찾아다가 삽입
    items = document.querySelector('#items');
    li = document.querySelector('li');

    let javaNode = document.querySelector('li');
    let javaText = document.createTextNode("java");

    javaNode.appendChild(javaText);

    items.insertBefore(javaNode, li)
    // 왜 안되지/...?
//--------------------------------------------------------------
// 선생님 하신것
items = document.querySelector('#items');
li = document.querySelector('li');

let javaNode = document.createElement('li');
let javaTextNode = document.createTextNode('Java');
javaNode.appendChild(javaTextNode);
items.insertBefore(javaNode, li);

let oracleNode = document.createElement('li');
let oracleTextNode = document.createTextNode('Oracle');
oracleNode.appendChild(oracleTextNode);
items.insertBefore(oracleNode, li);

let jspNode = document.createElement('li');
let jspTextNode = document.createTextNode('Jsp/Servlet');
jspNode.appendChild(jspTextNode);
items.appendChild(jspNode, li);

let springNode = document.createElement('li');
let springTextNode = document.createTextNode('Spring');
springNode.appendChild(springTextNode);
items.appendChild(springNode, li);










}