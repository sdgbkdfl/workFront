'use strict';
window.onload = function(){
    /*
    만약 현재시간이 12시 이전이면
    images/morning.jpg 이미지
    아니면 afternoon 이미지 */

        var date = new Date();
        var hours = date.getHours();

        let container =document.querySelector('#container')

        // - 이미지 노드 요소 추가
        let imgNode = document.createElement('img');
      
        // 시간에 따라 이미지 경로를 설정
        let imgSrc= (hours<12)
                        ? 'images/morning.jpg' : 'images/afternoon.jpg';

        //이미지 속성 등록
        imgNode.src = imgSrc;

        // 컨테이너 박스의 자식으로 연결
        container.appendChild(imgNode)
}