

function getBig(image) {
    if (document.getElementById('text').style.display == 'inline-block') {
        document.getElementById('text').style.display = 'none';
    } else {
        document.getElementById('text').style.display = 'inline-block';
    }
    document.getElementById("active").style.backgroundImage = "url("+image.src+")";
    document.getElementById("active").style.backgroundColor = "#000000";
}

function getSmall() {
    if (document.getElementById('text').style.display == 'none') {
        document.getElementById('text').style.display = 'inline-block'
    }
    document.getElementById("active").style.backgroundImage = "url(' ')";
    document.getElementById("active").style.backgroundColor = "#4e6766";
/* I tried to store the original text as a variable to refer to it onmouseout. But I ended up having to hard code it. Any help would be appreciated!
        var text = document.getElementById("image").textContent;
        document.getElementById("image").innerHTML = text; */
}