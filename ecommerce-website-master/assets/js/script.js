 'use strict'

// modal variable
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function

const modalCloseFunc = function (){modal.classList.add("closed")};

// modal evenlistener

modalCloseOverlay.addEventListener("click", modalCloseFunc);
modalCloseBtn.addEventListener("click", modalCloseFunc);



// notification toast variable

const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');


toastCloseBtn.addEventListener("click" , function (){
notificationToast.classList.add("closed");
});


 const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for(let i = 0; i < mobileMenuOpenBtn.length; i++){
	// mobile menu function
    
    const mobileMenuCloseFunc = function (){
      mobileMenu[i].classList.remove('active');
      overlay.classList.remove('active');
    }

   mobileMenuOpenBtn[i].addEventListener("click", function(){
   	mobileMenu[i].classList.add("active");
   	overlay.classList.add("active");
   });

   mobileMenuCloseBtn[i].addEventListener("click", mobileMenuCloseFunc);
  
   overlay.addEventListener("click", mobileMenuCloseFunc);
};
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for(let i = 0; i < accordionBtn.length; i++){
	accordionBtn[i].addEventListener("click", function (){
		const clickedBtn = this.nextElementSibling.classList.contains('active');

		for(let i= 0; i < accordion.length; i++){

			if(clickedBtn) break;

			if (accordion[i].classList.contains('active')){
				accordion[i].classList.remove('active');
				accordionBtn[i].classList.remove('active');
			}

		}

		this.nextElementSibling.classList.toggle('active');
		this.classList.toggle('active');
	})
};

  let loveIcon = document.querySelector('#love-icon');
  let bagIcon = document.querySelector('#bag-icon');
let loveCount = 0;
let  bagCount = 0;

loveIcon.addEventListener('click', e =>{
 e.preventDefault();
  loveCount++;
  updateLoveCount();
});

bagIcon.addEventListener('click', function() {
  bagCount++;
  updateLoveCount();
});


function updateLoveCount() {
  let loveCountElement = document.querySelector('#love-count');
   let bagCountElement = document.querySelector('#bag-count');
  loveCountElement.innerHTML = loveCount;
    bagCountElement.innerHTML = bagCount;
};




const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
 const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
const item = document.querySelectorAll('.deadline-format h2');


let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// months are ZERO index based;
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

// let futureDate = new Date(2020, 3, 24, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
 

const futureTime = futureDate.getTime();
function getRemaindingTime() {
  const today = new Date().getTime();

  const t = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  // values in miliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

   item.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });


  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }
}
// countdown;
let countdown = setInterval(getRemaindingTime, 1000);
//set initial values
getRemaindingTime();


const start_btn = document.querySelector(".add-cart-btn");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");

start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}