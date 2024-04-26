console.log("blue moon");
  
function showHome() {
  const content = document.getElementById("content");
  content.innerHTML = "<h2>Welcome to Blue Moon Restaurant!</h2><p>Explore our delicious menu and experience a wonderful dining atmosphere at our authenic indian resaurant.</p>";
}

document.addEventListener("DOMContentLoaded", function() {
document.getElementById("homeBtn").addEventListener("click", showHome);

showHome();

});