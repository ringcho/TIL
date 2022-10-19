const me = {
    name: 'jack',
    phonenum: '01012345678',
    'samsung products': {
        buds: 'G bus pro 2',
        phone: 'Galaxy s21',
    },
}

console.log(me.name)
console.log(me.phonenum)
console.log(me['samsung products'])
console.log(me['samsung products'].buds)

// 객체를 정의할 때 key와 해당하는 변수의 이름이 같으면 축약 가능

const books = ['learning JS', 'learning Python']
const magazines = ['Vogue', 'Maxim']

const bookshop = {
    books,
    magazines,
}

console.log(bookshop.books)

// method 선언시 function 생략 가능

const obj = {
    greeting() {
        console.log('Hi!')
    }
}
obj.greeting()

// 구조분해할당

const userInfo = {
    name: 'ssafy kim',
    userId: 'ssafy08222222',
    phoneNumber: '01087654321',
    emali: 'hello@ssafy.com'
}

const {name} = userInfo
const {userId} = userInfo
const {phoneNumber} = userInfo
const {emali} = userInfo

console.log(name, userId, phoneNumber, emali)

// Spread syntax

const obj_2 = { b:2, c: 3}
const newobj = { a:1, ...obj_2, d:4, e:5}

console.log(newobj)
