const btn = document.querySelector('#btn')
const input1 = document.querySelector('#num1')! as HTMLInputElement
const input2 = document.querySelector('#num2')! as HTMLInputElement

function add(num1: number, num2: number) {
  return num1 + num2
}

btn.addEventListener('click', function () {
  const result = add(+input1.value, +input2.value)
  console.log(result)
})