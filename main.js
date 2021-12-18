// Prevent animation on load
setTimeout(() => {
    document.body.classList.remove("preload");
  }, 500);
  
  const scoreNumber = document.querySelector(".score__number");
  let score = 0;
  
  