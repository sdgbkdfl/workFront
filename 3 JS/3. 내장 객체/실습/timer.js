'use strict';
    // 버튼 요소 불러와서 저장
    let bttn = document.querySelector('#bttn');
    //박스  요소 불러와서 저장
    let notiBox = document.querySelector('#noti-box');
   
    bttn.addEventListener('click', function(){

        // 박스 생성
        let notiDiv = document.createElement('div');
        notiDiv.classList.add('notiDiv')

        notiDiv.innerHTML ='알림 내용';
        // 텍스트 노드 만드는 것보다 간단.
        // let notiText = document.createTextNode('알림내용');

        // 화면 출력을 위해 자식 요소로 등록
        notiBox.appendChild(notiDiv);


        //3초후 실행
        setTimeout(()=>{
            //요소 삭제
            notiDiv.remove();
        }, 2000);
        

    });

