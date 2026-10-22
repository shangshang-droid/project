// Bokeh background: soft purple/gold circles that drift, plus twinkling gold dots
(function () {
  const layer = document.getElementById("bokeh");
  const rand = (a, b) => Math.random() * (b - a) + a;
  const colors = ["#a98bf5", "#8a6ae8", "#6a4fd6", "#f5c842", "#e0a458"];

  for (let i = 0; i < 22; i++) {
    const o = document.createElement("span");
    const size = rand(40, 200);
    o.className = "orb";
    o.style.cssText =
      width:${size}px;height:${size}px;left:${rand(-5, 100)}%;top:${rand(-5, 100)}%; +
      background:${colors[Math.floor(rand(0, colors.length))]};opacity:${rand(0.12, 0.45)}; +
      animation-duration:${rand(25, 60)}s;animation-direction:alternate; +
      --dx:${rand(-80, 80)}px;--dy:${rand(-80, 80)}px;;
    layer.appendChild(o);
  }
  for (let i = 0; i < 55; i++) {
    const s = document.createElement("span");
    const size = rand(2, 5);
    s.className = "spark";
    s.style.cssText =
      width:${size}px;height:${size}px;left:${rand(0, 100)}%;top:${rand(0, 100)}%; +
      animation-duration:${rand(3, 8)}s;animation-delay:${rand(0, 6)}s;;
    layer.appendChild(s);
  }
})();

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
menu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    menu.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  })
);

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
