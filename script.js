function openCity(typeName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(typeName).style.display = "block";
  elmnt.style.backgroundColor = color;
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

const p = Array.from(document.querySelectorAll('p:first-of-type'));
p.forEach(i => {
  const text = i.innerText;
  const updatedHtml = text.split('').map(char => {
    if (char === char.toUpperCase() && char.match(/[A-Z]/i)) {
      return `<span class="capital-letter">${char}</span>`;
    } else {
      return char;
    }
  }).join('');

  i.innerHTML = updatedHtml;
})

