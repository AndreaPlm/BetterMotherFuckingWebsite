
/*window.setTimeout(function () {
    let userName=window.prompt('Quel est ton nom ?');
    if (userName===null) {return false}

    let confirmation=confirm('Hey ' + userName +' le site xxxvidsxxx est trop bien. Voulez vous le visiter ?');
          if (confirmation){ document.location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
          else {window.close ()};

}, 10000);*/


function switchStyle(style){
document.getElementById("styleNormal").setAttribute("href", style);
}
