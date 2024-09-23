let input=document.querySelector("input");
let btn=document.querySelector("button");
let list=document.querySelector("ul");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText= input.value;
    let del = document.createElement("button");
    del.innerText="delete";
    del.classList.add("delete");
    list.appendChild(item);
    item.appendChild(del);


 
    input.value="";
});
   list.addEventListener("click",function(event){
    
    if (event.target.nodeName =="BUTTON"){
        let listitem=event.target.parentElement;
        listitem.remove();
        console.log(listitem);
}
 

    });


 
// doesn't delete new btns
//let delbtn = document.querySelectorAll(".delete");
 //for(del of delbtn){
  //  del.addEventListener("click",function(){
   //     let par = this.parentElement;
       // par.remove();
//
 //   });
// }