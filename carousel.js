const carousel = document.querySelector('.carossel');
const slidesContainer = document.querySelector ('.slides');
const slides = document.querySelectorAll ('.slide');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');
const dotsContainer = document.querySelector('.dots');

let index = 0;
const total = slides.length;
const intervaloTimer = 3000;
let timer = null;

