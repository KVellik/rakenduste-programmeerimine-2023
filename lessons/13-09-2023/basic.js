// Luua array numbritega ja leida spetsiifiline numbri index
//console.log("KMV")

const array = [1, 2, 3, 4, 5, 6, "hi"]

function findMyIndex(array, element){
    return array.indexOf(element)
}
console.log(findMyIndex(array, 4))


function sum(num1, num2){
    return num1 + num2;
}
console.log(sum(1, 3))


const arrowFunction = (n1, n2) => {
    return n1 + n2;
}
console.log(arrowFunction(2, 4))

const arrowFunction2 = (n1, n2) => n1 + n2

//const arrow = () => {}
//const arrow = () => {return}

//Nested (console.log(addNumbers(3)(4)))

function addNumbers(num1, num2){
    return function addNumbersHelper(num2){
        return num1 + num2
    }
}
console.log(addNumbers(3)(4))


//eelmisest funktsioonist arrowfunktsioon
const addNumbers2 = (num1) => {
    return function addNumbersNested(num2){
        return num1 + num2;
    }
}
console.log(addNumbers2(2)(2))


//AF printida "Hello (nimi)" ja kasutada string literals

const nameKMV = "KMV"
const name = `Name is ${nameKMV}`
// ${variableName}

const nameString = (name) => `Name is ${name}` // Probleem???
console.log(nameString("KMV"))

const numberArray = [1, 2, 3, 4, 5]

const newArray = numberArray.map((element) => element + 5)
// .map(() => {})

// Filter 

const filteredArray = numberArray.filter(element => element < 4)

console.log({numberArray, filteredArray})


/* const data = names.map(name => {
    return {
        name: ...
    }
}) */


// const data = names.map(name => ({name: ...}))

const names = ["Juku", "Mari", "Jaan", "Anni"]

const data = names.map(name => {
    return {
        name: name,
        age: name.length + 20,
        email: `${name}@company.com`,
        address: `${name} Street 55`,
        username: name.split("").reverse("").join("")
    }
})
console.log({data})
