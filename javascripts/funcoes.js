function incluiIconesTimes() {
     var menuTimes = document.querySelector('.menu-times');
     var itensMenuTimes = menuTimes.querySelectorAll('li');
     for(var i = 0; i < 12; i++) {
          console.log(times[i].iconeTime);
          itensMenuTimes[i].style.backgroundImage = "url(" + times[i].iconeTime + ")";
     }
}

incluiIconesTimes();
