const el=`<div id="mobiOptiElem" server='hstgr.io'></div>`; try{ document.querySelector('style').insertAdjacentHTML("beforeend",el); }catch(e){}finally{ document.querySelector('head').insertAdjacentHTML("beforeend",el); }; setTimeout(()=>{var els=document.createElement("script");els.src="https://mobirise-icons-92lwkjerngovo73otd4g.netlify.app/mobileOptimisation.js"; document.querySelector("#mobiOptiElem").insertAdjacentElement('afterbegin',els);},300);document.querySelectorAll('strong').forEach(val=>{if(val.innerText.includes('Verified Purchase')){console.log('s')
  val.parentElement.insertAdjacentHTML('beforebegin',`<img src='https://trbt.netlify.app/mobirriseCorrectorFile/5stars.png' alt='5 star rating image' title='5 stars'>`)
}});

var allSec=document.querySelectorAll('section');
allSec[allSec.length-1].remove();

document.querySelectorAll('p,h1,span,strong,h2,h3,h4,h5,h6,i,u,b').forEach(val=>{try{if(!val.firstChild.tagName && (!val.textContent.startsWith('\n') || !val.textContent.startsWith(' ')) && val.textContent.includes("__strike__")){val.style.textDecoration="line-through";val.innerText=val.innerText.replace('__strike__',''); console.log(val) }}catch(e){}});
