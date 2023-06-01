'use strict';
window.onload = function(){
//   웹표준 기술을 이용해서 회원가입폼을 만드려고 해.  
// 항목은 ID, ID중복검사 버튼, 비밀번호, 성명, E-Mail, 핸드폰, 성별(남,여 체크), 취미(공부,등산, 게임, 낚시, 쇼핑), 자기소개(100자이내)로 구성하고 
// 폼의 하단 중앙부엔 회원가입 버튼과 취소 버튼을 만들고자해. 1) 값 전달 방식은 post 방식으로 한다.
// 2) ID중복검사 버튼의 type은 button을 작성한다.
// 3) 핸드폰 번호 앞자리는 반드시 선택하도록 유효성 검사를 하시오.
// 4) 성별도 남자, 여자 중에서 1개를 선택하도록 유효성 검사를 하시오.
// 5) 취미는 반드시 2개 이상 선택 하도록 유효성 검사를 하시오.
// 6) 자기소개는 100자 이내로 입력 하도록 유효성 검사를 하시오.
// 7) 회원가입 버튼의 type은 submit으로 작성하시오.
// 8) 입력 및 선택 양식에 대해서 모두 유효성 검사를 하시오.
// 9) 취소버튼을 클릭하면 input box가 모두 초기화 되도록 하시오. 이 같은 조건에 맞는 양식을 만드는 코드 알려줘
  
        // let timerId = 0;
        // btnStart.addEventListener('click', ()=>{
    
        //     //일정시간마다 콜백함수를 반복 실행
        //     // window.setInterval(함수, 시간)
        //     // 반환된 숫자값(식별값)을 이용해 종료 시킬 수 있음
        //     timerId = window.setInterval(()=>{
        //         // 현재날짜, 시간 정보룰 담은 객체
        //         let date = new Date();
    
        //         // area1.innerHTML = date.toTimeString();
        //         area1.innerHTML 
        //         = `${date.getHours()} : ${date.getMinutes()} :`  
        //         + `<span id='second'> ${date.getSeconds()} </span>`;
    
        //     }, 1000);//1s마다 한번씩 함수 실행
    
        //     console.log('timerId', timerId)
        // }); 

        // function testjson() {
        //     const students = [
        //       {
        //         name: '고경희',
        //         major: '컴퓨터공학',
        //         grade: 2,
        //         phone: '010-1111-2222'
        //       },
        //       {
        //         name: '홍길동',
        //         major: '컴퓨터공학',
        //         grade: 2,
        //         phone: '010-2222-3333'
        //       }
        //     ];
          
        //     const jsonStr = JSON.stringify(students);
        //     console.log(jsonStr);
        //   }
          
        //   // testjson 함수 호출
        //   testjson();


        function validateForm() {
            let hobbyCheckboxes = document.querySelectorAll('input[name="hobby"]:checked');
            
            if (hobbyCheckboxes.length < 2) {
              alert('취미는 2개 이상 선택해야 합니다.');
              
            }else{

            }
            
            return true;
          }
          
        //   document.getElementById('myForm').addEventListener('submit', function(event) {
        //     event.preventDefault(); // 기본 제출 동작 막기
        //     if (validateForm()) {
        //       this.submit(); // 유효성 검사를 통과한 경우 폼 제출
        //     }
        //   });



            // ID 유효성 검사
            // 중복 검사 버튼 클릭 여부 확인
      
            // 비밀번호 유효성 검사
      
            // 성명 유효성 검사
      
            // E-Mail 유효성 검사
      
            // 핸드폰 번호 유효성 검사
      
            // 성별 선택 여부 확인
      
            // 취미 선택 여부 확인
      
            // 자기소개 유효성 검사
      
            // 폼 제출
          
      
          function resetForm() {
            resetForm.addEventListener('click', function(){
                document.getElementById('signupForm').reset();
            })
          }
      
          function toggleForm() {
            signupButton.addEventListener('click', function(){

                let form = document.getElementById("signupForm");
                let button = document.getElementById("#signupButton");
                
                if (form.style.display === "none") {
                  form.style.display = "block";
                  button.textContent = "취소";
                } else {
                  form.style.display = "none";
                  button.textContent = "회원가입";
                }
            });
          }
          


      
}
