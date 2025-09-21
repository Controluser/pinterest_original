const eye = document.querySelector(".fa-eye");
const eyeHide = document.querySelector(".fa-eye-slash");
const passwd = document.querySelector("#passwd");
const firstSection = document.querySelector('.container')
const nextSection = document.querySelector('#inspiration')
const scrollBtn = document.querySelector('.scroll-down-icon')

// passwd hide section
eye.addEventListener("click", function () {
  eye.style.display = "none";
  eyeHide.style.display = "inline";
  if (passwd.type === "password") {
    passwd.type = "text";
  }
});
eyeHide.addEventListener("click", function () {
  eye.style.display = "inline";
  eyeHide.style.display = "none";
  if (passwd.type === "text") {
    passwd.type = "password";
  }
});

// scroll-to-next

scrollBtn.addEventListener('click', () => {
    nextSection.scrollIntoView({behavior:'smooth'})
})


const boxes = document.querySelectorAll('.ins-background')

// inspiration section - auto
const backgrounds = document.querySelectorAll('.ins-background-wrapper');
const dinner = document.querySelector('.dinner')
const dinBoxes = dinner.querySelectorAll('.box')
const home = document.querySelector('.home')
const homBoxes = home.querySelectorAll('.box')
const indexBtn = document.querySelectorAll('.index-btn');
const text = document.getElementById('text')
const hexColors = ['#c28b00', '#618c7b', '#0076d3', '#407a57']
index = 0


function showNext() {

  // remove "show"(class) from background-wrappers

  //show current background-wrapper
  backgrounds[index].classList.add('active')

  // move to next background-wrapper
  index++
  if(index >= backgrounds.length) {
    index = 0
    setTimeout(removeActive, 7500)
  }

  // current = (current + 1) % backgrounds.length
  // backgrounds[current].classList.add('show')
  
  // show first
}
showNext()
setInterval(showNext, 6000)

// setTimeout(auto, 5800)

function removeActive() {
  backgrounds.forEach(s => {
    s.classList.remove('active')
    s.querySelectorAll('.box').forEach(b => {
      b.style.animation = 'none'
      b.offsetHeight
      b.style.animation = ''
    })
  })
}

// chnge inspiration text