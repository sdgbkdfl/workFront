'use strict';
// 웹페이지가 로드되면 실행
window.onload = function(){
    /*
    만약 현재시간이 12시 이전이면
    images/morning.jpg 이미지
    아니면 afternoon 이미지 */

      
        // 현재 날짜와 시간을 나타내는 Date객체(내장 객체)를 생성
        let date = new Date();
        //getHours()는 Date 객체에서 현재 시간을 가져와 변수 hours에 할당
        let hours = date.getHours();

        // container라는 변수에 
        // 선택된 HTML 문서에서 id 속성이 "container"인 요소를 할당
        let container =document.querySelector('#container')

        // - 이미지 노드 요소 추가
        let imgNode = document.createElement('img');
      
        // 시간에 따라 이미지 경로를 설정
        let imgSrc= (hours<12)
                        ? 'images/morning.jpg' : 'images/afternoon.jpg';

        //이미지 속성 등록
        //src는 이미지 속성 중 하나
        //imgNode.src : img 요소의 속성 중 하나인 src에 이미지 URL을 설정하는 코드
        //imgSrc는 이미지의 URL을 가지고 있는 변수
        imgNode.src = imgSrc;

        //imgNode 요소를 container 요소의 자식으로 추가하는 코드
        //추가된 imgNode 요소는 container 요소의 마지막 자식 요소로 배치
        container.appendChild(imgNode)
}