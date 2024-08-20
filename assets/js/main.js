async function getPetInfo(){
    try{
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
    const data = await response.json();
    
    const result = data.map(function(ele){
        return`
             <div class="pet-info">
            <h3>Pet ID: ${ele.id}</h3>
            <img src="${ele.url}"/>
        </div>
        `;
    }).join(' ');

    document.querySelector('.gallery-images').innerHTML = result;
}catch(e){
    const result = `
    <h2>error</h2>
    `
    document.querySelector('.gallery-images').innerHTML = result;
}finally{
    document.querySelector('.overlay').classList.add("d-none-c");

}
}
getPetInfo();

const navMenu = document.querySelector(".menu");
navMenu.onclick = function(){
   const navBar= document.querySelector(".nav");
   navBar.classList.toggle("active")
}

window.onscroll = function(){
    const header = document.querySelector("header");
    const scoopyIntro= document.querySelector(".scoopy-intro")
    if(window.scrollY > scoopyIntro.offsetTop){
        header.classList.add('change-navBar');
    }else{
        header.classList.remove('change-navBar');
    }
}


const authModal = document.querySelector(".auth-modal");
const closeBtn = document.querySelector(".close-btn");
const authBtn = document.querySelector(".auth-btn");
authBtn.addEventListener("click",()=>{
    authModal.classList.remove('d-none');
});
closeBtn.addEventListener("click",()=>{
    authModal.classList.add('d-none');
});
authModal.addEventListener("click",(e)=>{
    if(authModal==e.target)
    authModal.classList.add('d-none');
});


const hidePassword = document.querySelector(".hide-password");
const showPassword = document.querySelector(".show-password");
const eyeLine = document.querySelector(".eye-line");
showPassword.addEventListener("click",(e)=>{
   const passwordType = hidePassword.getAttribute("type");
   if (passwordType==="password"){
        hidePassword.setAttribute("type","text")
        eyeLine.classList.remove("eye-line-active");
   }else{
    hidePassword.setAttribute("type","password");
    eyeLine.classList.add("eye-line-active");
   }
    
});

/*const swiper = new Swiper('.swiper', {
    slidesPerView: 5,  
    loop: true,        
    autoplay: {
        delay: 3000,   

    },
    pagination: {
        el: '.swiper-pagination',       
    },
    navigation: {
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev',  
    },

});*/
