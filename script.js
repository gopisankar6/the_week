// Load and display message on user page
window.addEventListener("DOMContentLoaded", () => {
  const messageElem = document.getElementById("message");
  if (messageElem) {
    const saved = localStorage.getItem("adminMessage") || "No message set by admin.";
    messageElem.textContent = saved;
  }
});

// Update message from admin page
function updateMessage() {
  const input = document.getElementById("adminInput").value;
  localStorage.setItem("adminMessage", input);
  document.getElementById("status").textContent = "Message updated!";
}
