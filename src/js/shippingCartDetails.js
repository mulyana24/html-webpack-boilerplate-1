import {addClass, removeClass} from './utils-class'

let data = {
    "complete-name": "",
    "email-address": "",
    "address": "",
    "phone-number": "",
    "courier": "",
    "payment": ""
}

const inputs = document.querySelectorAll("#shipping-details input[data-input]")

for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    
    input.addEventListener("change", function (event) {
        console.dir(event.target)
        data[event.target.id] = event.target.value
        console.log(data)
        check()
    })
    
}

const options = document.querySelectorAll("#shipping-details button[data-name]")
for (let index = 0; index < options.length; index++) {
    const option = options[index];
    
    option.addEventListener("click", function(){
        const value = this.attributes['data-value'].value
        const name = this.attributes['data-name'].value

        data[name] = value

        check()
    })
}

function check(){
    console.log(data)
    const find = Object.values(data).filter( (item) => item === "" )

    if (find.length === 0) {
        document.querySelector("#shipping-details button[type='submit']").disabled = false
    }
}