let quantity = 32
let box = document.querySelector('.custom-box')
let images = [
    '../images/home/brands/amazon.svg',
    '../images/home/brands/2.svg',
    '../images/home/brands/walmart.svg',
    '../images/home/brands/forever 21.svg',
    '../images/home/brands/petsmart.svg',
    '../images/home/brands/samsclub.svg',
    '../images/home/brands/shein.svg',
    '../images/home/brands/staples.svg',
    '../images/home/brands/bestbuy.svg',
    '../images/home/brands/hotels.com.svg',
    '../images/home/brands/wayfair.svg',
    '../images/home/brands/sephora.svg',
    '../images/home/brands/priceline.svg',
    '../images/home/brands/1.svg',
    '../images/home/brands/3.svg',
    '../images/home/brands/4.svg',
    '../images/home/brands/5.svg',
    '../images/home/brands/6.svg',
    '../images/home/brands/7.svg',
    '../images/home/brands/8.svg',
    '../images/home/brands/9.svg',
    '../images/home/brands/target.svg',
    '../images/home/brands/10.svg',
    '../images/home/brands/11.svg',
    '../images/home/brands/expedia.svg',
    '../images/home/brands/gap.svg',
    '../images/home/brands/nike.svg',
    '../images/home/brands/12.svg',
    '../images/home/brands/oldnavy.svg',
    '../images/home/brands/13.svg',
    '../images/home/brands/14.svg',
    '../images/home/brands/15.svg'
]


for (let i = 1; i < quantity; i++){
    let clonedBox = box.cloneNode(true)
    box.parentElement.append(clonedBox) 
}


document.addEventListener('DOMContentLoaded', function () {
    for(let i = 0; i < document.querySelectorAll('.brands').length; i++) {
        document.querySelectorAll('.brands')[i].src = images[i]  
    }
});

