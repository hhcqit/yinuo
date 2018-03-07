$(window).resize(FnResize);
FnResize();
function FnResize() {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 375*16 + 'px';
  } 
