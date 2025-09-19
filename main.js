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