const input = "Zeeshan Ahmad Khan"

setTimeout(() => {
    const inputArr = input.split('')
    const outputArr = inputArr.reverse()
    const output = outputArr.join('')
    console.log(output)
    // OR
    // console.log(input.split('').reverse().join(''))
}, 2000)