const arr = []


const one = document.getElementById('one')
const two = document.getElementById('2')
const three = document.getElementById('3')
const four = document.getElementById('4')
const five = document.getElementById('5')
const submit = document.getElementById('submit')
const btn = document.querySelectorAll('button');
const span = document.getElementById('span')

const body = document.getElementById('body')

one.addEventListener('click',()=>{
    arr.push(1);
    return arr;
})

two.addEventListener('click',()=>{
    arr.push(2);
    return arr
})

three.addEventListener('click',()=>{
    arr.push(3);
    return arr
})

four.addEventListener('click',()=>{
    arr.push(4);
    return arr
})

five.addEventListener('click',()=>{
    arr.push(5);
    return arr
})
