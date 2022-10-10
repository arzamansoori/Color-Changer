const btn = document.getElementById("button");

btn.addEventListener("click", () => {
    const canva = document.getElementById("canvas");
    let combination = "0123456789ABCDEF";
    let constant = "#";

    for(let i=0; i<6; i++){
        constant = constant + combination[Math.floor(Math.random() * 16)];
    }
    canva.style.backgroundColor = constant;
});