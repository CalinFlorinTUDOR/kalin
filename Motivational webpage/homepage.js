document.body.style.backgroundImage = " url('./Images/mercury.png')";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";

const box = document.getElementById('box');

  document.getElementById("box").style.position = "relative";
  document.getElementById("box").style.left = "40%";
  document.getElementById("box").style.right = "40%";
  document.getElementById("box").style.width = "550px";
  document.getElementById("box").style.height = "200px";
  document.getElementById("box").style.backgroundColor = "transparent";
  document.getElementById("box").style.fontSize = "35px";
  document.getElementById("box").style.fontFamily = "Impact";
  document.getElementById("box").style.color = "rgb(215, 218, 51)";


  let sentenceArray = [
    "Impossible is for the unwilling",
    "Believe you can you’re halfway there",
    "Don’t raise your voice. Improve your argument",
    "The eyes are useless when the mind is blind",
    "Don’t let yesterday take up too much of today",
    "Don’t count the days. Make the days count",
    "Wanting to be someone else is a waste of who you are",
    "Do as you wish. Be as you are.",
    "Everything you can imagine is real. ",
    "Learn to say no without explain yourself. "
    ];

    let currentIndex = 0;
    const boxText = document.getElementById("box");

function changeSentence() {
  boxText.textContent = sentenceArray[currentIndex];
  currentIndex = (currentIndex + 1) % sentenceArray.length;
}

// Initial sentence change
changeSentence();

// Set interval to change sentence every 5 seconds
setInterval(changeSentence, 5000);
  
  const btn = document.getElementById('btn');
  
    document.getElementById("btn").style.position = "relative";
    document.getElementById("btn").style.left = "50%";
    document.getElementById("btn").style.right = "50%";
  
btn.addEventListener('click', function handleClick() {

  
  if (box.style.display === 'none') {
    box.style.display = 'block';

    btn.textContent = 'So, soon quit you?';
  } else {
    box.style.display = 'none';

    btn.textContent = 'Inlighting begins !';
  }
});

