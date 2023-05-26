//  읽어와서 배열로 만들기... 
// document.grtElementById('id').value
// 문제1
function arrayTest1(){
    //la요소를 선택 후 태그안의 문자열을 배열로 만들기
    let la1 =  document.getElementById('la1').innerText.split(',');
    let la2 =  document.getElementById('la2').innerText.split(',');
    let la3 =  document.getElementById('la3').innerText.split(',');
    let la4 =  document.getElementById('la4').innerText.split(',');

    // console.log(la1);
    // console.log(la2);
    // console.log(la3);
    // console.log(la4);

    // 배열을 합쳐서 새로운 배열 생성
    let arr = la1.concat(la2,la3,la4);

    // text필드 값 읽어오기
    let text = document.getElementById('text').value;

    // text값이 속해있는 index 반환
    //없으면 -1
    let index = arr.indexOf(text);

    if(index>=0){
        alert(`index : ${index}`);
    }else{
        alert(`${text} 는 존재하지 않습니다.`);
    }
}

// 문제 2번
function reverseTest(){

    // 아이디로 참조하여 변수에 담음
    let stringla1 = document.getElementById('stringla1').innerText.split('').reverse();
    let stringla2 = document.getElementById('stringla2').innerText.split('').reverse();
    // innerText 속성을 사용하여  id가 "stringla1"인 요소의 내부 텍스트를 가져옴
    // split('')을 호출하여 가져온 텍스트를 문자열로 분할
    //각각의 문자열 reverse 해줌

    // let data1 = stringla1.reverse();
    // let data2 = stringla2.reverse();
    // → 위와 같이 data변수에 담아주면서 reverse 줘도 ok

    let arr2 = stringla1.concat(stringla2);
    //concat 사용하여 stringla1와 stringla2 배열 합하여 새로운 배열을 arr2변수에 담아줌

    let res = arr2.join('');
    //arr2에 담아준 배열의 요소들을 결합하여 하나의 문자열로 반환해줌

    document.getElementById('print').innerText = res;
    // document.getElementById('print')는 
    // id 속성이 "print"인 요소를 찾는 JavaScript의 함수
    // .innerText는 요소의 텍스트 콘텐츠를 가져오거나 설정하는 속성
    // = 기호는 대입 연산자로, 우변의 값을 좌변에 대입하는 역할!!
    // 따라서 res 변수의 값을 "print" 요소의 텍스트 콘텐츠로 설정
    // res 변수의 값을 <p> 요소의 텍스트로 출력하는 역할
          
}

// 문제 3번
// 전역변수
let data=[];

function input(){
    let strInput = document.getElementById('strInput');
    
    // 배열에 값을 저장
    data.push(strInput.value);

    //value 속성 초기화
    strInput.value ='';
}    
   
function print(){
// let arry3 = [`${input1}, ${input2} ,${input3}`];
// let arryTxt = arry3.getElementById
// result2.innerHTML = `${arry3.sort}`; 

console.log('print()');

data.sort().reverse();

document.getElementById('print2')

print2.innerHTML = data.join();

}

// 문제 4번 내가 해본거
// function arrayTest3(){
//     let stringla4 = document.getElementById(stringla4).innerHTML.split('');

//     let remove = document.getElementById(remove).value;
//     let index2 = stringla4.indexOf(remove);

//     let add = document.getElementById(add).value;
//     let index3 = stringla4.indexOf(add);

//     if(index>=0){
//         print4.innerHTML = index2.splice(${remove}, 1,0)
//     }else{
//         print4.innerHTML = index3.splice(${add}, 0,1)
//     }
// }
// 문제 4번
function arrayTest3(){
    // 보기에 입력된 문자열을 배열로 만들기
    let stringla4 = document.getElementById('stringla4').innerText.split(' ');
    // split(' ') 배열이 빈칸으로 구분되어져있기 때문에 빈칸 안넣어주면 값 삭제 안됨

    // let arr = stringla4;

    // 텍스트필드에 입력된 값을 변수에 저장
    let remove = document.getElementById('remove').value;
    let add = document.getElementById('add').value;

    // 삭제할 요소를 인덱스를 확인 후 삭제
    let index = stringla4.indexOf(remove);

        if(index>=0){
            stringla4.splice(index,1);
        }

    // 추가할 요소를 배열 맨 마지막에 추가 
    stringla4.push(add);

    //출력
    let print4 = document.getElementById('print4');
    print4.innerHTML= stringla4.join('');

}