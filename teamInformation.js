personen = document.querySelectorAll(".personInfo")



function handleInformation(person, event) {

  if (event === "show") {
    personen[person-1].style.display = "block";
  }

  if (event === "disappear") {
    personen[person-1].style.display = "none";
  }

}


  document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById('anzeige-interaktiv');
    var model = document.getElementById('three-js-model');
    var viewed = false;

    function startTimer() {
      setTimeout(function() {
        popup.style.opacity = '0';
        setTimeout(function() {
          popup.style.display = 'none';
        }, 500);
      }, 3000);
    }

    popup.addEventListener("mouseenter", function() {
      if (!viewed) {
        viewed = true;
        startTimer();
      }
    });

    model.addEventListener("mouseenter", function() {
      if (!viewed) {
        viewed = true;
        startTimer();
      }
    });
  });

