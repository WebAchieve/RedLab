
const scrollObserver = new IntersectionObserver(
    (entries) =>{
        entries.forEach((entry) => {
            if(entry.isIntersecting){
               /*  let delay = Math.ceil(entry.target.dataset.index*0.2 * 10) / 10;  */
                entry.target.classList.add('enter');
                
               /*  entry.target.style.transitionDelay = delay+"s"; */
                scrollObserver.unobserve(entry.target);
               
            }
        });
    }
)




export default{
    bind(el){
        el.classList.add('before-enter');
        scrollObserver.observe(el);
    }
}