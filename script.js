const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      background:linear-gradient(135deg,#ec4899,#8b5cf6);
      color:white;
      font-size:36px;
      font-family:Poppins,Arial;
      text-align:center;
      animation:fadeIn 1s ease;
    ">
      💖 Yayyy! I knew it 😍<br>
      Happy Valentine’s Day 💘
    </div>
  `;
});
