// Addition js


var t1=document.querySelector(".t1")
var t2=document.querySelector(".t2")
var t3=document.querySelector(".t3")
var btn=document.querySelector(".btn")

btn.addEventListener("click",function(){
    var a,b,c;
    a=parseInt(t1.value);
    b=parseInt(t2.value);
    c=a+b;
    t3.value=c
})

// ---------------------------->>>>

// sidebar js 

// var box=document.querySelector(".box")
// var btn=document.querySelector(".btn")

// btn.addEventListener("click",function(){
//     if(box.classList.contains('box'))
//     {
//         box.classList.remove('box')
//         box.classList.add('active')
//         btn.value=2
//         console.log(btn.value)
//     }
//     else{
//         box.classList.remove('active')
//         box.classList.add('box')  
//         btn.value=3
//         console.log(btn.value)
//     }
// })