let cards = document.querySelectorAll(".accordion");

cards.forEach((card , index) =>{
    let header = card.querySelector("header");
    header.addEventListener("click" , ()=>{
        card.classList.toggle("open");
        let p = card.querySelector(".description");
        if(card.classList.contains("open")){
            p.style.height = `${p.scrollHeight}px`;
            card.querySelector("i").classList.replace("fa-plus","fa-minus");
        }else{
            p.style.height = "0px";
            card.querySelector("i").classList.replace("fa-minus","fa-plus");
        }
        removeClass(index);
    })
})

function removeClass(index1){
    cards.forEach((card2 , index2) =>{
        if(index1 != index2){
            card2.classList.remove("open");
            let p2 = card2.querySelector(".description");
            p2.style.height = `0px`;
            card2.querySelector("i").classList.replace("fa-minus","fa-plus");
        }
    })
}