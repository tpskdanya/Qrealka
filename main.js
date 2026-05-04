const container = document.getElementById("devices-container");

if (container) {
  devices.forEach((d, i) => {
    container.innerHTML += `
      <div class="item" onclick="openModal(${i})">
        <img src="${d.img}" width="100%">
        <p>${d.name}</p>
      </div>
    `;
  });
}

function openModal(i) {
  const d = devices[i];

  document.getElementById("modal-title").innerText = d.name;
  document.getElementById("modal-img").src = d.img;
  document.getElementById("modal-desc").innerText = d.desc;
  document.getElementById("modal-price").innerText = d.price + " ₽";

  const select = document.getElementById("color-select");
  select.innerHTML = "";

  d.colors.forEach(c => {
    select.innerHTML += `<option>${c}</option>`;
  });

  document.getElementById("modal").classList.remove("hidden");
}

document.getElementById("close").onclick = () => {
  document.getElementById("modal").classList.add("hidden");
};