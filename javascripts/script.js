function mySearched(){var input=document.getElementById("mySearch"),filter=input.value.toUpperCase(),ul=document.getElementById("myMenu"),li=ul.getElementsByTagName("li");for(var i=0;i<li.length;i++){var a=li[i].getElementsByTagName("a")[0];a&&(a.innerHTML.toUpperCase().indexOf(filter)>-1?li[i].style.display="":li[i].style.display="none")}}

function openSearch(){  document.getElementById("myOverlay").style.width = "100%";}

function closeSearch(){  document.getElementById("myOverlay").style.width = "0%";}

function toggleResponsiveClass(){var x=document.getElementById("myTopnav");x.classList.contains("topnav")&&!x.classList.contains("responsive")?x.classList.add("responsive"):x.classList.remove("responsive")}

function handleScroll(){var header=document.getElementById("myTopnav"),sticky=header.offsetTop;window.pageYOffset>sticky?header.classList.add("sticky"):header.classList.remove("sticky"),header.classList.contains("sticky")||header.classList.remove("responsive")}

window.onscroll=function(){handleScroll()};

  