// Funktsioon ühel real ning lõpus () paneb käima
;(() => {
  console.log("hi")
})()

// == / ===

console.log(1 == "1")
console.log(1 === "1")

// String to number
let number = "2"
console.log(parseInt(number))
console.log(+number)

// Trading places
;(() => {
  let a = 99,
    b = 1

  console.log({ a, b })
  ;[a, b] = [b, a]

  console.log({ a, b })
})()

// Arrow deconstruct
;(() => {
  const array = () => [1, 2, 3, 4, 47]

  const deconstruct = () => {
    const [b, , d, , a] = array()

    return { a, b, d }
  }

  console.log(deconstruct())
})()
