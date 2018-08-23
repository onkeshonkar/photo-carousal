let left = document.getElementsByClassName('back')[0];
let right = document.getElementsByClassName('next')[0];
let image = document.getElementsByClassName('pcircle')[0];
let c = document.getElementsByClassName('ccircle')[0];

left.addEventListener('click', showPrev);
right.addEventListener('click', showNext);

let count = 1;
const MAX_PHOTO = 4;

document.addEventListener('animationend', removeClass);


function showNext() {
    image.classList.add('nextAnim');
    if (count >= 1) count++;
    setTimeout(changeImage, 1000)
    if (count > MAX_PHOTO) count = 1;
}

function showPrev() {
    image.classList.add('prevAnim');
    
    if (count <= MAX_PHOTO) count--;
    setTimeout(changeImage, 1000);
    if (count <= 0) count = MAX_PHOTO;
}


function removeClass() {
    image.classList.remove('prevAnim');
    image.classList.remove('nextAnim');
}


function changeImage() {
    c.style.backgroundImage = `url('${document.URL.replace('/index.html', '')}/img/${count}.jpg')`;
}