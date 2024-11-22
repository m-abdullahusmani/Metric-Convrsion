//Loader
$(window).on("load",function()
{
  $(".loader").fadeOut("slow");
});




// using es6
    const navSlide=()=>{ //arrow function 
    const burger=document.querySelector('.burger');
    const nav=document.querySelector('.nav-links');
    const navLinks=document.querySelectorAll('.nav-links li');
        burger.addEventListener('click',()=>{
            //toggle nav
            nav.classList.toggle('nav-active');
            //animate links
            navLinks.forEach((link, index)=>{
                if(link.style.animation){
                    link.style.animation='';
                } else{
                    link.style.animation=`navLinkFade 0.5s ease forwards ${index / 7+0.5}s`//javascriptt string m use krne k lye ` lagate hai
                }  
            });
        });
    }    
    navSlide(); 

    
    $(document).ready(function(){
        $('#heading1demo').textillate({
            loop:true,
            duration:5000
        });
    })
    $(document).ready(function(){
        $('#demo1').textillate({
            loop:true
        });
    })
           
 
  
    
    $( document ).ready(function( $ ) {
        $( '#example1' ).sliderPro({
            width: 960,
            height: 500,
            arrows: true,
            buttons: false,
            waitForLayers: true,
            thumbnailWidth: 200,
            thumbnailHeight: 100,
            thumbnailPointer: true,
            autoplay: false,
            autoScaleLayers: false,
            breakpoints: {
                500: {
                    thumbnailWidth: 120,
                    thumbnailHeight: 50
                }
            }
        });
    });

 
    AOS.init({
                duration: 1100,
            })


    function myFunctionshow() 
    {
        document.getElementById("hide").style.marginLeft="0%";

    }   
    function myFunctionhide() 
    { 
        document.getElementById("hide").style.marginLeft="-40%";


    }
    
    
    