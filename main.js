import './style.css'
import $ from 'jquery';

document.addEventListener('DOMContentLoaded', function() {
  
   $('#mobile_close').on('click', ()=>{

    $('#mobile_header').children().fadeOut(200);
    $('#bluryDiv').removeClass("blurDiv")
    $('#mobile_header').animate({ width: '0' }, 300);
   })

   $('#mobile_open').on('click',()=>{
    $('#mobile_header').children().fadeIn(200);
    $('#bluryDiv').addClass("blurDiv");
    $('#mobile_header').animate({ width: '18rem' }, 300);
   })



  });



