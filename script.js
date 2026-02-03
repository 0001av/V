const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");

// Ask name
let name = prompt("Enter your name 💖");
if (name) {
  question.innerText = `💘 Will you be my Valentine, ${name}?`;
}

// NO button run
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// YES click
yesBtn.addEventListener("click", () => {
  startConfetti();
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      background:linear-gradient(135deg,#ec4899,#8b5cf6);
      color:white;
      font-size:32px;
      font-family:Poppins,Arial;
      text-align:center;
    ">
      💖 Yayyy ${name || ""}! 💖<br>
      Happy Valentine’s Day 💘
      <br><br>
      <a href="https://wa.me/?text=I%20said%20YES%20💖%20Happy%20Valentine’s%20Day!"
         target="_blank"
         style="
           margin-top:20px;
           padding:12px 24px;
           background:#22c55e;
           color:white;
           border-radius:10px;
           text-decoration:none;
           font-size:18px;
         ">
         Share on WhatsApp 💬
      </a>
    </div>
  `;
});

// Simple confetti
function startConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let pieces = [];
  for (let i = 0; i < 150; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 4,
      dy: Math.random() * 3 + 2
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "pink";
      ctx.fill();
      p.y += p.dy;
      if (p.y > canvas.height) p.y = 0;
    });
    requestAnimationFrame(draw);
  }
  draw();
}
