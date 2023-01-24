const messages = [
    "Hello, lithium here welcome to my site!",
    "I am a 15 year old software/web developer",
    "I know C, C++, PHP, Python, JavaScript and Golang",
    "I am passionate about programming and constantly learning",
    "I am looking for people to work with",
    "bellow I will be putting some of my work with demos!"
  ];
  
  let i = 0;
  let j = 0;
  let text = '';
  let speed = 75;
  
  function typeWriter() {
    if (j < messages[i].length) {
      text += messages[i].charAt(j);
      j++;
      document.getElementById("typewriter").innerHTML = text;
      setTimeout(typeWriter, speed);
    } else {
      setTimeout(erase, speed * 10);
    }
  }
  
  function erase() {
    if (text.length > 0) {
      text = text.slice(0, -1);
      document.getElementById("typewriter").innerHTML = text;
      setTimeout(erase, speed);
    } else {
      i++;
      if (i === messages.length) {
        i = 0;
      }
      j = 0;
      text = '';
      setTimeout(typeWriter, speed * 10);
    }
  }
  
  setTimeout(typeWriter, speed);
  

  /* 
© Adrien Lloret, 20 oct. 2022
I changed the transition effect of original pen
*/
const glider = document.querySelector('.glider')
const inputs = document.querySelectorAll('input')
let current = 0

for(let i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener('click', () => {
    if(current === i) return
		if (current < i) { // right
			document.body.style.setProperty('--diff', i - current + 1);
			document.body.style.setProperty('--right', `${200*current}px`);
			glider.style.animation = "right .5s cubic-bezier(0, 1.31, 1, 1.01)"
		} else if (current > i) { // left
			document.body.style.setProperty('--diff', current - i + 1);
			glider.style.animation = "left 0.5s cubic-bezier(0, 1.31, 1, 1.01)"
		}
    setTimeout(() => {
				glider.style.animation = ''
			}, 500)
		current = i
	})
}


