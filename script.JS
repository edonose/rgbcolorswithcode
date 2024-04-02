document.getElementById("bt3").addEventListener("click", preview);

function preview() {
  let r = +document.getElementById("rd-inp").value;
  let g = +document.getElementById("gr-inp").value;
  let b = +document.getElementById("bl-inp").value;

  document.getElementById("tr").style.backgroundColor = `rgb(${r},${g},${b})`;
  document.getElementById("span").innerHTML = `rgb (${r}, ${g}, ${b})`;
}

document.getElementById("bt1").addEventListener("click", black);

function black() {
  document.getElementById("tr").style.backgroundColor = `rgb(0,0,0)`;
  document.getElementById("span").innerHTML = `rgb (0, 0, 0)`;
}

document.getElementById("bt2").addEventListener("click", white);

function white() {
  document.getElementById("tr").style.backgroundColor = `rgb(255,255,255)`;
  document.getElementById("span").innerHTML = `rgb (255, 255, 255)`;
}
