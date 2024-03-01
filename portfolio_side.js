const tabs= document.querySelectorAll('[data-target]'),
tabContent= document.querySelectorAll('[data-content]')
tabs.forEach(tab=>{
    tab.addEventListener("click",()=>{
        const target= document.querySelector(tab.dataset.target)
        tabContent.forEach(tabContents=>{
            tabContents.classList.remove('skills_active')
        })
        
        tabs.forEach(t=>{
            t.classList.remove('skills_active')
        })
        tab.classList.add('skills_active')
        target.classList.add('skills_active')
    })
})

let mixerPortfolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("work_button")){
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})
function togglePortfolioPopup()
{
    document.querySelector(".portfolio_popup").classList.toggle("open");
}
document.querySelector(".portfolio_popup-close").addEventListener("click",togglePortfolioPopup);
function portfolioItemDetails(portfolioItem)
{
    document.querySelector(".pp_thumbnail img").src= portfolioItem.querySelector(".work_img").src;
    document.querySelector(".portfolio_popup-subtitle span").innerHTML= portfolioItem.querySelector(".work_title").innerHTML;
    document.querySelector(".portfolio_popup-body").innerHTML= portfolioItem.querySelector("portfolio_item-details").innerHTML;

}
const modalViews = document.querySelectorAll('.services_modal'),
    modalBtns = document.querySelectorAll('.services_button'),
    modalCloses = document.querySelectorAll('.services_modal-close');

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    });
});
modalCloses.forEach((modalclose)=>{
    modalclose.addEventListener("click",()=>{
        modalViews.forEach((modalView)=>
        {
            modalView.classList.remove('active-modal');
        })
    })
})
var swiper = new Swiper(".testimonials_container", {
    spaceBetween: 30,
    loop:true,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },    breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 70,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
      }
  });
