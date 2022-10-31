const getButton=document.getElementById('js-button');
const getWrapper=document.getElementById('js-modal_wrapper');
const pTag=document.getElementById('js-pTag');

getButton.addEventListener('click',()=>{
    getWrapper.classList.add('active');
});

pTag.addEventListener('click',()=>{
    getWrapper.classList.remove('active');
});

addEventListener('scroll',(e)=>{
    console.log(scrollY)
    getWrapper.classList.remove('active');
})

getWrapper.addEventListener('click',(e)=>{
    if (e.target===e.currentTarget){
    getWrapper.classList.remove('active');
    }
});

const getTest=document.getElementById('js-test');
 
getTest.addEventListener('click',(e)=>{
    console.log(e.target);
    console.log(e.currentTarget);

});