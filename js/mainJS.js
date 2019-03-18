function change(){
    document.getElementById("test").src="images/me1.jpg";
}
function changeBack(){
    document.getElementById("test").src="images/me2.jpg";
}
function textChange(){
    document.getElementById("detailsChange").innerHTML = "Oh, brilliant blade, cold of steel.<br>Rendering infinite darkness!<br>And crush my enemies to nothing!<br><br>SAVAGE WOLF FURY!<br>(This is me, imagining I was sort of a hero of a story...)";
}
function textChangeBack(){
    document.getElementById("detailsChange").innerHTML = "Hi! I'm Reinhardt. <br>You may call me Rein.<br>You may also call me Raisins, my internet identity<br>(Very Unique Right?)";
}
function launchIG(){
    window.open("https://www.instagram.com/raisins.no.bogus/?hl=en", '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
}
function launchFB(){
    window.open("https://twitter.com/raisins_n_bogus", '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
}
function launchWP(){
    window.open("https://raisinsnobogus.wordpress.com/", '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
}
function myMove() {
    var elem = document.getElementById("test"); 
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + 'px'; 
        elem.style.left = pos + 'px'; 
      }
    }
  }
