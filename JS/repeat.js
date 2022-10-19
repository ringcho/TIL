let i = 0
while(i<6){
    console.log(i)
    i += 1
}

for (let i = 0; i < 6; i++){
    console.log(i)
}

const fruits = {a:'apple', b:'banana'}

for (const key in fruits){
    console.log(key)
    console.log(fruits[key])
}

for (const key of fruits){
    console.log(key)
    console.log(fruits[key])
}


const numbers = [0, 1, 2, 3]

for (const number of numbers){
    console.log(number, typeof number)
}
for (const number in numbers){
    console.log(number, typeof number)
}
