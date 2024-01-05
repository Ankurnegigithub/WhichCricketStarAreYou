let index = 0;
let index1 = 0;

function redirectToPage(page) {
    window.location.href = page;
}

displayimages();

function displayimages(){
    let i;
    const images=document.querySelector(".image").querySelectorAll("img")
    for(i=0;i<images.length;i++){
        images[i].style.display="none";
        
    }
    index++;
    if ( index > images.length){
        index=1;
    }
    images[index - 1].style.display="block";
    setTimeout (displayimages , 1998);
}
displayimages1();
function displayimages1(){
    let j;
    const images1=document.querySelector(".image1").querySelectorAll("img")
    for(j=0;j<images1.length;j++){
        images1[j].style.display="none";
        
    }
    index1++;
    if ( index1 > images1.length){
        index1=1;
    }
    images1[index1 - 1].style.display="block";
    setTimeout (displayimages1 , 2000);
}



