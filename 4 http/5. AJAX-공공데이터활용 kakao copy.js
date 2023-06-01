//마커클러스터러도 기능 추가하고 싶었는데...fail...

// map를 전역 변수로 선언
var map;

window.onload = function(){
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 10 // 지도의 확대 레벨
    };
    // 지도를 표시할 div와  지도 옵션으로 지도를 생성
    map = new kakao.maps.Map(mapContainer, mapOption);

    // 마커 클러스터러를 생성합니다 
    var clusterer = new kakao.maps.MarkerClusterer({
        map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
        averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
        minLevel: 10 // 클러스터 할 최소 지도 레벨 
    });
  

     // 현재 나의 위치를 확인하고 mapX, mapY 요소의 value 값에 세팅하기
     if ("geolocation" in navigator) {
        /* 위치정보 사용 가능 */
        
        // 현재위치 요청
        // getCurrentPosition(성공콜백, 오류콜백)
        navigator.geolocation.getCurrentPosition(
            function(position){
                doSomething(position.coords.latitude, position.coords.longitude);
            }
        );
    } else {
        /* 위치정보 사용 불가능 */
        alert('geolocation 지원 불가! - 현재 위치를 알 수 없습니다.');
    }
 
    let btn = document.querySelector('#btnCampInfo');

    // let  키워드로 선언하면 자동완성
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
            .then((json) => {
                // 가공된 데이터를 처리
                console.log('json', json);

                // 주변에 캠핑장이 없는경우 메세지 처리
            if(json.response.body.items == ''){
                alert('주변에 캠핑장이 없습니다. 반경을 확대해보세요!');
                return;
            }
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
      

        let mapX = document.querySelector('input[name=mapX]');
        let mapY = document.querySelector('input[name=mapY]');
    
        mapX.value = latitude;
        mapY.value = longitude;

        // 현재 위치를 받아온 후 지도의 
        // 중심좌표를 변경하고 
        // 접속위치에 마커를 표시 

        // 지도의 중심위치를 변경
        var locPosition = new kakao.maps.LatLng(longitude, latitude);
        // 지도 중심좌표를 접속위치로 변경합니다
        map.setCenter(locPosition);
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            map:map,
            position: locPosition
        });
    }

    //캠핑장 정보 출력
    function printCampInfo(itemArr){
        // 매개변수로 배열을 받아 배열에 입력된 정보를 화면에 출력
        // let itemArr = jsObj.response.body.items.item;
        let resDiv = document.querySelector('#result');

        // div 초기화
        resDiv.innerHTML = '';
        // resDiv 요소의 내부 HTML에 <ul> 태그를 추가하는 코드
        resDiv.innerHTML += '<ul>';
        
        for(item of itemArr){
            resDiv.innerHTML += `
                <li>
                    <h1>${item.facltNm}</h1>
                    <p><img src="${item.firstImageUrl}" alt="캠핑장 이미지"></p>
                    <p>${item.intro}</p>
                    <p>${item.mapX}, ${item.mapY}</p>      
                </li>
            `;

            //마커 생성
            var marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: new kakao.maps.LatLng(item.mapY, item.mapX), // 마커를 표시할 위치
                title : item.facltNm // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
    
            });
        }

                markers.push(marker);
                clusterer.addMarkers(markers);
        
        resDiv.innerHTML += '</ul>';


   
         
    }
        
    