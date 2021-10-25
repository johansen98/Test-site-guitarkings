function toggleImage(elm){
    const newSrc = elm.src;
    document.getElementById("mainPicture").src = newSrc;
}
function viewFullScreen(elm){
    const imgSrc = elm.src;

    document.getElementById("full-image").src = imgSrc;
    document.getElementById("image-viewer").style.display = "block";
}

function closeImageViewer(){
    document.getElementById("image-viewer").style.display = "none";

}
function openPopUp(){
 document.getElementById("")
}


