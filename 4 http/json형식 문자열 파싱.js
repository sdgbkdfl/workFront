// 버튼이 클릭되면 json 형식 문자열을 파싱해서 화면 출력
window.onload = function(){
    let btn = document.querySelector('#enroll');
    enroll.addEventListener('click', (e)=>{

        // 기본이벤트 (submit)제거
        e.preventDefault();

        // 반복문을 이용하여 배열에 들어있는 데이터 출력
        // for...of 구문은 반복 가능한(iterable) 객체를 순회하기 위해 사용되는 반복문
        // for (let key in jsObj) {} : key 변수는 jsObj 객체의 각 속성
        // 버튼 누르면 계속 반복되게 하고 싶은디/...

        for(obj of jsObj){
            let tableBody = document.querySelector('#attendant tbody');
            let row = document.createElement('tr');
            let nameCell = document.createElement('td');
            let majorCell = document.createElement('td');
            let gradeCell = document.createElement('td');
          
            nameCell.textContent = jsObj.name;
            majorCell.textContent = jsObj.major;
            gradeCell.textContent = jsObj.grade;
            //gradeCell.innerHTML(jsObj.grade)
          


            row.appendChild(nameCell);
            row.appendChild(majorCell);
            row.appendChild(gradeCell);
          
            tableBody.appendChild(row);
            console.log(obj);
        }

        // for (let i = 0; i < jsObj.length; i++) {
        //     console.log(jsObj[i]);
        //     //화면에 출력
        //     let tableBody = document.querySelector('#attendant tbody');
        //     let row = document.createElement('tr');
        //     let nameCell = document.createElement('td');
        //     let majorCell = document.createElement('td');
        //     let gradeCell = document.createElement('td');
          
        //     nameCell.textContent = jsObj[i].name;
        //     majorCell.textContent = jsObj[i].major;
        //     gradeCell.textContent = jsObj[i].grade;
        //     //gradeCell.innerHTML(jsObj.grade)
          
        //     row.appendChild(nameCell);
        //     row.appendChild(majorCell);
        //     row.appendChild(gradeCell);
          
        //     tableBody.appendChild(row);
            
        //   }
       
    });
}
    //json형식의 문자열
    // let jsonStr = `{
        //     "name" : "금잔디",
        //     "major" : "컴퓨터공학",
        //     "grade" : 2
        // }`;
        
        
        // 배열로 만듦
        // []안에 json문자열을 
        let jsonStr = `[
            {
                "name" : "금잔디",
                "major" : "컴퓨터공학",
                "grade" : 2
            },
            {
                "name" : "구준표",
                "major" : "컴퓨터공학",
                "grade" : 2
            },
            {
                "name" : "김첨지",
                "major" : "컴퓨터공학",
                "grade" : 2
            },
            {
                "name" : "박혁거세",
                "major" : "컴퓨터공학",
                "grade" : 2
            }
            
        ]`
        
        //jsObj로 변경
        let jsObj = JSON.parse(jsonStr);

        //문자열 형식으로 변경
        //JSON.stringify(jsObj)