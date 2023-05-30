window.onload = () => {
    btn1.addEventListener('click', ()=>{
        // 객체선언
        let product = {
            0:  '배열 흉내',    // 객체명['속성명'] 으로 접근 가능
            pName : '아이폰12'
            , price : 1000000
            , price : 1500000   // 중복선언시 마지막에 입력된 값으로 세팅
            , brand : '애플'
            , spec : ['OLED', 'ISO15']
        };

        console.log('product : ', product);
        area1.innerHTML = '객체 선언 테스트';
        area1.innerHTML += `객체명['속성명'] 으로 접근하는 방법 <br>`;
        area.innerHTML += `product[0] : ${product[0]}<br>`
        area.innerHTML += `product['pName'] : ${product['pName']}<br>`
        area.innerHTML += `product['price'] : ${product['price']}<br>`
        area.innerHTML += `product['brand'] : ${product['brand']}<br>`
        area.innerHTML += `product['spec'][0] : ${product['spec'][0]}<br>`
        area.innerHTML += `product['spec'][1] : ${product['spec'][1]}<br><br>`

        area1.innerHTML += `객체명.속성명 으로 접근하는 방법 <br>`;
        area.innerHTML += `product.pName : ${product.pName} <br>`;
        area.innerHTML += `product.price : ${product.price} <br>`;
        area.innerHTML += `product.brand : ${product.brand} <br>`;
        area.innerHTML += `product.spec[0] : ${product.spec[0]} <br>`;
        area.innerHTML += `product.spec[1] : ${product.spec[1]} <br>`;


        // 속성명에 공백, 특수문자가 입력된 경우 '', ""로 묶어 주어야 하며
        // .을 이용해서 접근이 불가능 하다
        // []를 이용해서 값을 가져올 수 있다.
        let user = {
            'user name' : '금잔디'
            , user_age : 19
            , 'id!!' : 'goldrawn'
        };

        area.innerHTML += `공백이나 특수문자가 속성명에 있는 경우 대괄호를 이용해서 값을 가져올 수 있다. <br>`;
        // area.innerHTML += `user.user name : ${user.user name} <br>'; ERR
        area.innerHTML += `user['user name'] : ${user['user name']} <br>`;
        area.innerHTML += `user.user_age : ${user.user_age} <br>`;
        area.innerHTML += `user['id!!'] : ${user['id!!']} <br>`;

    });

    btn2.addEventListener('click', ()=>{
        let name = '구준표';
        
        // 객체선언
        let dog = {
            name : '둥이'
            , kind : '진돗개'
            // 객체의 메소드 
            , eat : function(food){
                // 객체의 내부속성에 접근하기 위해서 this를 사용 합니다
                console.log(`${this['kind']} ${this.name}가 ${food}를 먹습니다`);
            }
        }

        dog.eat('고구마');

    });

    btn3.addEventListener('click', ()=>{
        let game = {
            title : '카트라이더 러쉬 플러스'
            , price:0
            , supportOS:['win7', 'win10']
            , service :true
        };

        console.log(game);

        for( const key in game ){
            console.log(`key : ${key}, game[key] : ${game[key]}`);
        }
    });
     
    btn4.addEventListener('click',()=>{
        // 빈 객체 선언
        let student = {};

        // 객체의 속성 추가 
        // 속성이 이미 존재하는 경우 업데이트 없는경우 추가
        student.name = '구준표';
        student.age = 20;
        student['job'] = '재벌'

        // 객체에 메서드 추가
        student.whoAreYou = function(){
            let str = '';
            
            for(const key in this){
                if(typeof(this[key]) !== 'function'){
                    str += `${key} : ${this[key]}\n`;
                }
            }

            return str;
        };

        console.log(student);
        console.log(student.whoAreYou());
        
        // 객체에 해당 속성이 
        // 정의되어 있으면 true
        // 없으면 false
        console.log('job' in student);

        // 객체의 속성을 제거
        delete(student.job);

        console.log(student);
        console.log(student.whoAreYou());
        console.log('job' in student);

    });
}