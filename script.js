const text = "I hope you have a great day and i want you to know that i am very grateful for everything that you have done for me and I will never forget it!";
const typingSpeed = 50;
let index = 0;

function typeWriter() {
    if(index < text.length) {
        const container = document.getElementById('type');
        container.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, typingSpeed);
        
    }
}

window.onload = function() {
    typeWriter();
};

const Home = document.getElementById('Home');
showTab('Home');
function showTab(tabId) {
      const tabContents = document.querySelectorAll(".tab-content");
      tabContents.forEach((tabContent) => {
          tabContent.style.display = "none";
      });
  
      document.getElementById(tabId).style.display = "block";
  }
