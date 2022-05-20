import {addClass, removeClass} from './utils-class'

const sliders = document.getElementsByClassName("slider")

for (let index = 0; index < sliders.length; index++) {
    const slide = sliders[index];
    
    const items = slide.querySelectorAll(".slider .item")
    const previews = slide.querySelector("div > .preview")

    for (let i = 0; i < items.length; i++) {
        const itemTrigger = items[i];
        
        itemTrigger.addEventListener("click", function(){
            const dataImg = this.attributes?.['data-img']?.value
            for (let j = 0; j < items.length; j++) {
                const triggerNeedToRemove = items[j];
                
                removeClass(triggerNeedToRemove, "selected")
            }
            addClass(itemTrigger, "selected")

            previews.querySelector("img").setAttribute("src", dataImg)
        })
    }
}