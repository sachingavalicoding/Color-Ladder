
let idx = 0;
let hex = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
let changeColor = () => {
   /*  let color = ['red', 'green', 'blue', 'yellow', 'purple', 'black', 'pink']; */
    let body = document.querySelector('body');
    let text = document.getElementById('para');
    text.style.textTransform = 'uppercase';

    /*     text.innerText = color[idx];
        text.style.color = color[idx];
        body.style.backgroundColor=color[idx++];  */

    /*    if(idx > color.length-1){
           idx = 0;
       } */

    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[randomNumber()];
    }
    text.innerText = hexColor;
    text.style.color = hexColor;
    body.style.backgroundColor = hexColor;

};

const randomNumber = ()=>{
    console.log(Math.floor(Math.random() * hex.length));
   return (Math.floor(Math.random() * hex.length));
};

