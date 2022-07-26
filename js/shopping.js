window.addEventListener("load",()=>{

  let add = document.getElementsByClassName("add");
  let myList = document.getElementsByClassName("my-list")[0];
  let pay = document.getElementsByClassName('pay')[0];
  
  for(let i=0;i<add.length;i++){
    add[i].addEventListener("click",addTo);
  }

  function addTo(el){

    let selec = document.createElement("ul");
    selec.classList.add("selected");

    let addB = el.target;
    let box = addB.parentElement;
    let sImage = box.children[0].src;
    let sName = box.children[1].innerText;
    let sPrice = box.children[2].innerText;

    selec.innerHTML= `
 
     <li><img src=${sImage}></li>
     <li>${sName}</li>
     <li class="iprice">${sPrice}</li>
     <li ><input type = 'number' value = '1' class="qty"></li>
     <li class="tprice">${sPrice}</li>
     <li><input type="button" value="Remove" class="rmv"></li>
    `;
    myList.append(selec);

    let qty=document.getElementsByClassName('qty');

    for(let i=0;i<qty.length;i++){
      toPay();

      qty[i].addEventListener("change",(el)=>{

         let input = el.target;
         let ibox = input.parentElement.parentElement;
         let iprice = ibox.getElementsByClassName("iprice")[0];
         let tprice = ibox.getElementsByClassName("tprice")[0];
  
         tprice.innerText =input.value * Number(iprice.innerHTML.replace('$',''))+'$';


         if(input.value<=0){
          input.value=1;
          tprice.innerText =iprice.innerText;
         }
         toPay();
     }) 
   }
  

   let rmv = document.getElementsByClassName("rmv");

   for(let i=0;i<rmv.length;i++){

    rmv[i].addEventListener("click",(el)=>{

      let rButton=el.target;
      let item=rButton.parentElement.parentElement;

      item.remove();
      toPay();
    })
   }
 
  }
   function toPay(){
    let t = 0;
    let tprice = document.getElementsByClassName('tprice');
    for(let i=0;i<tprice.length;i++){
        t+=Number(tprice[i].innerHTML.replace('$',''));
    }
    pay.innerText = t + '$';
}

  })