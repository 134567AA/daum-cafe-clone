// top 버튼 
window.addEventListener('scroll',function(){
  let nowScroll = document.scrollingElement.scrollTop;
    if(nowScroll > 600){
        document.getElementById("top").style.display = "block" ;
    }
    if(nowScroll == 0){
        document.getElementById("top").style.display ="none";
    }
  console.log(nowScroll);

});




function openNav(){
    document.getElementById("myNav").style.left="0%";
}
function backNav(){
    document.getElementById("myNav").style.left="-100%";
}
function gTime(){
var dt = new Date();
var yr = dt.getFullYear();
var mth = dt.getMonth()+1;
var gdt = dt.getDate();
var hours = dt.getHours();
var min = dt.getMinutes();
var sed = dt.getSeconds();


document.getElementsByClassName('dt')[0].innerHTML = yr+"."+ mth + "." + gdt + "  " + "<span>" + hours+"시"+min+"분"+sed+"초" +"</span>";
}

setInterval(gTime,1000);
var ind = 1;

function pSlide(n){
    viewSlide(ind += n);
}

function viewSlide(n){
    var i,slides;
    slides = document.getElementsByClassName("sliderin");
    if(n > slides.length) ind = 1;
    if(n < 1) ind = slides.length;
    for(i=0; i < slides.length ; i++);{
        slides[i].style.display= "none";
    }
    slides[ind-1].className =  "slidein";


// var elements = document.getElementsByTagName("li");
// for(i=0; i<4; i++){
//     elements[i].classList.remove('active');
// }

// var ct = Math.floor(Math.random()*4);
// console.log(ct);

 slides[ind-1].style.display="block";
    slides[ind-1].classNane += " fade";
}
// function back(){
//     document.getElementById("page2").style.display="block";
//     document.getElementById("page1").style.display="none";
// }
// function front(){
//     document.getElementById("page2").style.display="none";
//     document.getElementById("page1").style.display="block";
// }
function autoSlide(){
    var n = ind++;
    var slides = document.getElementsByClassName("sliderin");
    if(n > slides.length) n = 0;
    if(n < 1) n = slides.length;
}

$('.circle2').click(function(){
    $('.hey').hide();
    $('.hey2').show();
});
$('.circle').click(function(){
    $('.hey2').hide();
    $('.hey').show();
});