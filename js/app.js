function showAarti(key) {
  document.getElementById("aartiContent").innerText = aartis[key];
}

function showBhajan(key) {
  document.getElementById("bhajanContent").innerText = bhajans[key];
}

function loadHaripath(type) {
  document.getElementById("haripathContent").innerText =
    type === "dnyaneshwar" ? haripathDnyaneshwar : haripathEknath;
}
