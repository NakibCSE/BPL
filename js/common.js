// function for adding player
function addPlayer(playerName) {
    const nodeList = document.querySelectorAll("ol li");
    const nodeLength = nodeList.length;
    if (nodeLength > 4) {
      alert("You cannot add more than 5");
    } else if (nodeLength <= 5) {
      const ol = document.getElementById("select-five");
      const li = document.createElement("li");
      const user = document.getElementById(playerName).innerText;
      li.innerText = user;
      ol.appendChild(li);
    }
  }

  