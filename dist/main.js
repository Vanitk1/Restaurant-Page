function showMenu() {
    const content = document.getElementById("content");
    content.innerHTML = "<h2>Our Menu</h2><h3>Starter</h3><li>Mixed Grill £12</li><li>Veg Samosa £3</li><li>Prawn Puree £7</li><li>Royal Paneer £8</li><h3>Mains</h3><li>Chicken Tikka Masala £11</li><li>Lamb Curry £11</li><li>Tarka Dall(V) £7</li><li>Saag Paneer(V) £7</li><h3>Desserts</h3><li>Chocolate Fudge Cake £5</li><li>Cheesecake £6</li>"
}
  document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("menuBtn").addEventListener("click", showMenu);
  
showHome();

});