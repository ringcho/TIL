// const test = {
//     prop: 42,
//     func () { return this.prop}
// }

// console.log(test.func())

// console.log(this === global)

// function f1(){
//     return this
// }

// const f2 = () => this

// console.log(f1() === global)

// const squaure = (number) => {
//     console.log(arguments)
//     console.log(this)

//     return number * number
// }
// squaure(2)

// var foo = function () {
//     console.dir(this)
// }

// foo()

// var obj = {foo: foo}
// obj.foo()

// var instance = new foo()

// var bar = {name: 'bar'}
// foo.call(bar)
// foo.apply(bar)
// foo.bind(bar)()

// console.log(this === global)

// var ga = 'Global variable'

// console.log(ga)
// console.log(global.ga)

// function foo() {
//     console.log('invoked!')
// }

// global.foo()

console.log(console)
console.log(document)