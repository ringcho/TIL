const avengers = [
    {name:'tony', age:45},
    {name:'chris', age:32},
    { name: 'Thor', age: 400}
]

const tony = avengers.find((avengers) => {
    return avengers.name === 'tony'
} 
)
console.log(tony)