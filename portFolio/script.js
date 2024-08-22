document.querySelector('.hamburger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('header ul').classList.toggle('active');
    document.querySelector('header .logo').classList.toggle('active');
});

let dayNight = document.querySelector('.dayNight');
let banner = document.querySelector('.banner');
dayNight.addEventListener("click",()=>{
    banner.classList.toggle('night');
})
var typingEffect = new Typed('#text', {
    strings: ['Sushant','a Programmer','a Developer'],
    loop : true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000
  });

//   let workNight = document.querySelector('.workNight');
//   let projects = document.querySelector('.projects');
//   console.log('workNight:', workNight);
// console.log('projects:', projects);
// console.log("Hello...")
//   workNight.addEventListener("click", () => {
//       projects.classList.toggle('night-mode');
//   });
  