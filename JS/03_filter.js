const product = [
    {name:'cucu', type:'vege'},
    {name:'bana', type:'fruit'},
    {name:'carrot', type:'vege'},
    {name:'apple', type:'fruit'},
]

const fruits = product.filter((product) => {
    return product.type === 'fruit'
})

console.log(fruits)