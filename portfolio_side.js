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
    }
})
function togglePortfolioPopup()
{
    document.querySelector(".portfolio_popup").classList.toggle("open");
}
document.querySelector(".portfolio_popup-close").addEventListener("click",togglePortfolioPopup);