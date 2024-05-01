const container_4 = document.querySelector('.container-4');
const container_3 = document.querySelector('.container-3');
const container_2 = document.querySelector('.container-2');
const button_tutup = document.getElementById('tutup');
// const container_1 = document.querySelector('.container-1');

const button_buka = document.getElementById('buka');

button_buka.addEventListener('click', function(){
   setTimeout(() => {
    container_4.classList.add('slide');
   }, 100);

   setTimeout(() => {
    container_3.classList.add('slide-1');
   }, 900);
   setTimeout(() => {
    container_2.classList.add('slide-2');
   }, 2000);
    
});
button_tutup.addEventListener('click', function(){
    let satu = 'slide-2';
    let dua = 'slide-1';
    let tiga = 'slide';

    // if(this.classList.contains(satu)){
    //     [satu, dua, tiga] = [tiga, dua, satu]
    // }

    setTimeout(() => {
        container_2.classList.remove(satu);
    }, 100);
    setTimeout(() => {
        container_3.classList.remove(dua);
    }, 900);
    setTimeout(() => {
        container_4.classList.remove(tiga);
    }, 2000);
    
});
