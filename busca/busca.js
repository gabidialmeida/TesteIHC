
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
  }
  
  function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
  }

  
  var coll = document.getElementsByClassName("collapsible");
var i;


    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
          console.log("cheguei");
          this.classList.toggle("active");
          var content = this.nextElementSibling;
          if (content.style.maxHeight){
            content.style.maxHeight = null;
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
          } 
        });
      }

