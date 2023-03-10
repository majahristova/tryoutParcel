import anime from "animejs";

import {text} from "./modules/module"

console.log(text)

anime({
    targets: 'h1',
    rotate: 350,
    duration: 3000
})

const img = document.createElement('img');
document.body.appendChild(img)


console.log(import.meta)

const imgUrl = new URL('./images/vegetarianlogo.png', import.meta.url);

img.src = imgUrl;
