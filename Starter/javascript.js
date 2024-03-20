const btn = document.querySelector('#btn');
const input1 = document.querySelector('#num1');
const input2 = document.querySelector('#num2');

function add(num1, num2) {
  return (num1 + num2);
}

btn.addEventListener('click', function () {
  console.log(add(input1.value, input2.value))
})