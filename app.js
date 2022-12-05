const butn=document.getElementById("button");
const divbg=document.getElementById("canvas");

function change(){
    let color="0123456789ABCDEF";
    let constant="#";
    for (let i=0 ; i<6 ; i++) {
        let val=Math.floor(Math.random()*16); //return random value between 0-15
        constant=constant+color[val];
    }
    return constant;
};

let output = () => {
    divbg.style.backgroundColor=change();
}

butn.addEventListener("click",output);