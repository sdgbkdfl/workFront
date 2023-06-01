//마커 여러개 ??????

window.onload = function(){

 // 현재 나의 위치를 확인하고 mapX, mapY 요소의 value 값에 세팅하기
 if ("geolocation" in navigator) {
    /* 위치정보 사용 가능 */

    // 현재위치 요청
    // getCurrentPosition(성공콜백, 오류콜백)
    navigator.geolocation.getCurrentPosition(function(position){
    doSomething(position.coords.latitude, position.coords.longitude);
    });
} else {
    /* 위치정보 사용 불가능 */
    alert('geolocation 지원 불가! - 현재위치를 알 수 없습니다.');
}
    let btn = document.querySelector('#btnCampInfo');

    // let  키워드로 선언하면 자동완성됨
    btn.addEventListener('click', (e)=>{
        // 기본이벤트 제거
        e.preventDefault();

        let campForm = document.querySelector('#campForm');
        let formDate = new FormData(campForm);

        let url = 'https://apis.data.go.kr/B551011/GoCamping/locationBasedList?'
        let parms = '';
        // key/value pairs 반환
        for(let pair of formDate.entries()){
            // console.log('pair[0]', pair[0]);
            // console.log('pair[1]', pair[1]);

            parms +=`${pair[0]}=${pair[1]}&`

            // let parms = pair.join('&'); 
            // console.log(parms);
        } 
            url += parms;
            console.log('url',url);

            //ES6에서 url 요청결과 받아옴
            fetch(url)
            // 요청결과가 성공이라면
            // 화살표함수에서 한줄인경우 return문과 {}가 생략가능
            // res.json() : javascript object로 반환
            // 서버의 데이터를 가져오기 위한 GET 요청
                .then(res => res.json())  // 응답을 JSON 형태로 변환
                .then((json)=>{
                    // 가공된 데이터를 처리
                    console.log('json', json);
                    //캠핑장 리스트를 매개변수로 넣어줌
                    printCampInfo(json.response.body.items.item);    
                })
                .catch((err) => console.log(err));    
            });
        }

            // 현재위치를 받아서 mapX, mapY에 출력
            function doSomething(longitude, latitude){
                console.log('longitude:', longitude); //경도
                console.log('latitude:',latitude); //위도
                // let resDiv = document.querySelector('#result');
                // resDiv.innerHTML = `경도 : ${latitude}, 위도 : ${longitude}`;
                 
                let mapX = document.querySelector('input[name=mapX]');
                let mapY = document.querySelector('input[name=mapY]');

                mapX.value = longitude;
                mapY.value = latitude;
              }
            

            //캠핑장 정보 출력
            function printCampInfo(itemArr){
                // 매개변수로 배열을 받아 배열에 입력된 정보를 화면에 출력
                // let itemArr = jsObj.response.body.items.item;
                let resDiv = document.querySelector('#result');

                // div 초기화
                resDiv.innerHTML = '';
                
                resDiv.innerHTML += '<ul>';
                
                for(item of itemArr){
                    resDiv.innerHTML += `
                        <li>
                        <h1>${item.facltNm}</h1>
                        <p><img src="${item.firstImageUrl}" alt="캠핑장 이미지"></p>
                        <p>${item.intro}</p>    
                    </li>
                    `;
                }
                
                resDiv.innerHTML += '</ul>';

                
        
            }
        
    