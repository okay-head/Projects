"use strict";
let div = Object.values(document.querySelectorAll(".container>div"));
let span = Object.values(document.querySelectorAll(".container>div>span"));
const last = document.querySelector(".gap");
const root = document.getElementsByTagName("html")[0];
window.onscroll = () => {
   function offset(element) {
      const x = Math.round(
         window.scrollY + element.getBoundingClientRect().top
      );
      return x;
   }

   function addClass() {

      // once the user scrolls to the end, return
      if (window.scrollY > root.scrollHeight - 1050) {

         //add 'filter' class to everyelement and return
         span.forEach((element)=>{
            element.classList.add('filter');
         });
         
         //couldn't find any better way to save memory
         //I actually wanted to termintate the onscroll function
         div = 0;
         span = 0;
         return;
      }

      div.forEach((element, index) => {
         if (window.scrollY > offset(element) - 500) {
            span[index].classList.add("filter");
            // console.log(span[index]);
            // div.shift();
         }
      });
   }

   addClass();
};
