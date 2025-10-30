const greater = document.getElementsByClassName('greater');
// console.log(greater);
for(let i = 0; i<greater.length;i++){
    greater[i].addEventListener('click', (e) => {
        e.target.style.transform = `rotate(90deg)`;
    })
}