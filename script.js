
function checkAge() {
  let age = document.getElementById("ageInput").value;
  let message = "";

  if (age >= 18) {
    message = "✅ You are an adult.";
  } else if (age > 0) {
    message = "🧒 You are underage.";
  } else {
    message = "⚠️ Please enter a valid age.";
  }

  document.getElementById("ageResult").textContent = message;
}




function calculateTotal(price, quantity) {
  return price * quantity;
}

function showTotal() {
  let total = calculateTotal(100, 3); // Example: Ksh 100 × 3 items
  document.getElementById("totalResult").textContent = 
    "Total = Ksh " + total;
}

function formatName(name) {
  return name.trim().toUpperCase();
}
console.log(formatName(" Felicia ")); // Example output


function showCountdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // Clear old results

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }

  
  let j = 1;
  while (j <= 3) {
    console.log("Loop iteration: " + j);
    j++;
  }
}

function toggleColor() {
  let text = document.getElementById("colorText");
  text.style.color = (text.style.color === "red") ? "blue" : "red";
}

function addListItem() {
  let list = document.getElementById("dynamicList");
  let newItem = document.createElement("li");
  newItem.textContent = "New Item " + (list.children.length + 1);
  list.appendChild(newItem);
}