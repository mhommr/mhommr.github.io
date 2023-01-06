function expandNav() {
    if (document.getElementById("header").style.display == "none") {
        document.getElementById("header").style.display = "block";
    } else {
        document.getElementById("header").style.display = "none";
    }
}

function getBig(image) {
    if (document.getElementById('text').style.display == 'inline-block') {
        document.getElementById('text').style.display = 'none';
    } else {
        document.getElementById('text').style.display = 'inline-block';
    }
    
    if (document.getElementById('active').backgroundImage == undefined) {
        document.getElementById('active').id = "activeBig";
        document.getElementById('activeBig').style.backgroundImage = "url("+image.src+")";
        document.getElementById('alt').innerHTML = image.alt;
        console.log(document.getElementById('activeBig').backgroundImage)
    }
    
    // if (document.getElementById('placeholder').img == undefined) {
    //     document.getElementById('active').id = "activeBig";
    //     console.log(document.getElementById(''))
    //     document.getElementById('activeBig').style.backgroundImage = "url("+image.src+")"
    //     document.getElementById('alt').innerHTML = image.alt;
    // }


    /*document.getElementById("active").style.backgroundImage = "url("+image.src+")";
    document.getElementById("active").style.backgroundColor = "#000000";
    document.getElementById("alt").innerHTML = image.alt;*/
}

function getSmall() {
    console.log(document.getElementById('activeBig').backgroundImage)
    if (document.getElementById('text').style.display == 'none') {
        document.getElementById('text').style.display = 'inline-block'
    }
    document.getElementById('activeBig').id='active';
    document.getElementById('active').style.backgroundImage = "url(' ')";
    document.getElementById('active').style.backgroundColor = "#4e6766";
    document.getElementById('alt').innerHTML = "";
    

    // document.getElementById("active").style.backgroundImage = "url(' ')";
    // document.getElementById("active").style.backgroundColor = "#4e6766";
    // document.getElementById("alt").innerHTML = ""
}
