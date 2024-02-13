document.querySelectorAll('strong').forEach(val=>{if(val.innerText.includes('Verified Purchase')){console.log('s')
  val.parentElement.insertAdjacentHTML('beforebegin',`<img src=''>`)
}})

document.querySelector('section:nth-last-of-type(1)').remove();

document.querySelectorAll('p,h1,span,strong,h2,h3,h4,h5,h6,i,u,b').forEach(val=>{try{if(!val.firstChild.tagName && (!val.textContent.startsWith('\n') || !val.textContent.startsWith(' ')) && val.textContent.includes("__strike__")){val.style.textDecoration="line-through";val.innerText=val.innerText.replace('__strike__',''); console.log(val) }}catch(e){}})