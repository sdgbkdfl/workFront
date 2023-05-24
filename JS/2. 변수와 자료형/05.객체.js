// window.onload = function(){
// // 객체선언

// let product = {
//     0:'배열 흉내',//객체명['속성명']으로 접근 가능
//      pName : '아이폰12', 
//      price : 1000 , //중복선언시 마지막으로 접근
//      brand : 'apple',
//      spec : ['qled','is015']
//     };


// console.log()
// area1.innerHTML = '객체선언 테스트';

// }
// let user = {
//     'user name' = '금잔디',
//     userAge : 19,
    


//     'id!!' : 'goldrown'



//     btn2.addE.addVentListenar('click')
// // 객체의 내부조건에 덥그ㄴ하기 우랴ㅜ냐뷰속성 서용
// }htn3 =add

// console.log (덩보;
// for)
btn4.addEventListener('click',()=>{
    // 빈객체 선언
    let student={};

    //객체에 속성 추가
    student.name ='금잔디'
    student.age= 20;
    student['job'] = '학생'

    // 객체에 메서드 추가
    student.whoAreYou = function(){
        // 객체에 해당속서잉 저으이되어 있으면 true
        
        let str = '';

        for(const key in this){
            if(typeof(this[key]) !== 'function'){
                str += `${key}: ${this[key]}\n`;
            }
        }
        return str;
        }
})