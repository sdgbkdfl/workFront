'use strict';
// console.log('test')
win1 = window.open('07. BOM.html', 'BOM', 'width=500, height=500');
window.onload = ()=>{

    // 전에는 팝업할 때 많이 썼었으나 요즘은 아님
    btn1.addEventListener('click', function(){
        // window.open(); 새탭
        // window.open('http://www.naver.com'); //새탭열리고 url이동
        window.open('http://www.naver.com', 'naver'); //open(url,창이름)

        //open(url,창이름,'속성')    
        window.open('07. BOM.html','BOM','width=500, height=500');
        // 창이름을 지정 하고 동일한 이름에 다시 open()하게 되면 열리창의 내용이 변경
    });

    /*일자 관련 함수
     변수명.get어쩌구*/

    // 타이머 관련 메소드
    // window.setTimeout()
    btn2.addEventListener('click', function(){
        let timerId = 0;

        // 새창띄우기
        let newWindow = window.open();
        newWindow.alert('3초 후 이 페이지는 종료 됩니다.') 
        
        // setTimeout(콜백함수, 시간)
        // 일정시간 경과 후 콜백함수 한번 실행
        timerId = window.setTimeout(()=>{
            newWindow.close
        },3000);
        
        // 타이머 ID를 clearTimeout() 함수에 전달하면 해당 ID의 타이머를 취소할 수 있다
        clearTimeout(timerId)
    });

    let timerId = 0;
    btnStart.addEventListener('click', ()=>{

        //일정시간마다 콜백함수를 반복 실행
        // window.setInterval(함수, 시간)
        // 반환된 숫자값(식별값)을 이용해 종료 시킬 수 있음
        timerId = window.setInterval(()=>{
            // 현재날짜, 시간 정보룰 담은 객체
            let date = new Date();

            // area1.innerHTML = date.toTimeString();
            area1.innerHTML 
            = `${date.getHours()} : ${date.getMinutes()} :`  
            + `<span id='second'> ${date.getSeconds()} </span>`;

        }, 1000);//1s마다 한번씩 함수 실행

        console.log('timerId', timerId)
    }); 

    btnStop.addEventListener('click',  ()=>{
        clearInterval(timerId);
    });

    btn3.addEventListener('click',  ()=>{
        area3.innerHTML = '<h4>location 객체</h4>';

        for(key in location){
            // console.log('key')
            // // 객체[속성]
            // //객체.속성
            // console.log('value :',location['key']);

            area3.innerHTML += 
                `key :${key}, value : ${location[key]}<br>`
        }
    });
}