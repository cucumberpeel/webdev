function change() {
    let header = document.getElementById("asg2header");
    header.style.backgroundColor="maroon";
    header.style.color="white";
    header.style.border="2px dashed grey";
};

function swapT() {
    let p1obj = document.getElementById("asg2p1");
    let p2obj = document.getElementById("asg2p2");
    let p1 = p1obj.textContent;
    let p2 = p2obj.textContent;
    p1obj.textContent = p2;
    p2obj.textContent = p1;
};

function swapImg() {
    let img1obj = document.getElementById("asg2img1");
    let img2obj = document.getElementById("asg2img2");
    let img1 = img1obj.src;
    let img2 = img2obj.src;
    img1obj.src=img2;
    img2obj.src=img1;
}