function expandNav() {
    if (document.getElementById("header").style.display == "none") {
        document.getElementById("header").style.display = "block";
    } else {
        document.getElementById("header").style.display = "none";
    }
}

const mql = window.matchMedia("(max-width:640px)");

// mql.onload = helpMe(mql);
// mql.onchange = helpMe(mql);

function getBig(image) {
    document.getElementById('text').style.display = 'none';

    const active = document.getElementById('active');

    active.style.backgroundImage = "url("+image.src+")";
    active.className = 'activeClassBig'
    document.getElementById('alt').innerHTML = image.alt;

    document.getElementById('textSmall').style.display = 'none';


    const activeSmall = document.getElementById('activeSmall');
    activeSmall.style.backgroundImage = "url("+image.src+")";
    activeSmall.className = 'activeClassBig';
    document.getElementById('altSmall') = image.alt;
}

function getSmall() {
        if (document.getElementById('text').style.display == 'none') {
            document.getElementById('text').style.display = 'inline-block'
        }
        const active = document.getElementById('active');
        active.style.backgroundImage = "url(' ')";
        active.style.backgroundColor = "#4e6766";
        active.className = 'activeClass'
        document.getElementById('alt').innerHTML = "";

        if (document.getElementById('textSmall').style.display == 'none') {
            document.getElementById('textSmall').style.display = 'inline-block'
        }
        const activeSmall = document.getElementById('activeSmall');
        activeSmall.style.backgroundImage = "url(' ')";
        activeSmall.style.backgroundColor = '#4e6766';
        activeSmall.className = 'activeClass';
        document.getElementById('altSmall').innerHTML = '';
}

window.onload = function () {

    const text = document.getElementById('text');
    
    function mediaQuery (ql) {
        if (ql.matches) {
            console.log("geez");
            document.getElementById('bigScreen').style.display = "none";
            document.getElementById('smallScreen').style.display = 'block';
          } else {
            console.log("help");
            document.getElementById('smallScreen').style.display = 'none';
            document.getElementById('bigScreen').style.display = 'block';
          }
    }

    mql.addEventListener('load', mediaQuery(mql))
    mql.addEventListener('change', mediaQuery)
}


// I think this is a functioning breakpoint function... just in case we'll save it as a comment
// function myFunction(x) {
//     if (x.matches) { // If media query matches
//       document.getElementById('text').innerHTML = "It worked"
//     } else {
//       document.body.style.backgroundColor = "pink";
//     }
//   }

// var x = window.matchMedia("(max-width: 640px)")
// myFunction(x) // Call listener function at run time
// x.addEventListener(myFunction) // Attach listener function on state changes
