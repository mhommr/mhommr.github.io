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
    document.getElementById("active").style.backgroundImage = "url("+image.src+")";
    document.getElementById("active").style.backgroundColor = "#000000";
    document.getElementById("alt").innerHTML = image.alt;
}

function getSmall() {
    if (document.getElementById('text').style.display == 'none') {
        document.getElementById('text').style.display = 'inline-block'
    }
    document.getElementById("active").style.backgroundImage = "url(' ')";
    document.getElementById("active").style.backgroundColor = "#4e6766";
    document.getElementById("alt").innerHTML = ""
}

