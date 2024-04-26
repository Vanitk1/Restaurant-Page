 function showAbout() {
    const content = document.getElementById("content");
    content.innerHTML = "<h2>About Us</h2><p>Blue Moon Restaurant was founded in 1946 after our great great grandfather came to the united kindom after WW2 for a new life.</p><p>Using the skills Ramish Singh picked up during his time as an army chef and combing these skills with the knmowlege he learnt in india he was able to create a uniquie flavour only made here at Blue Moon.</P>";
  }

  document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("aboutBtn").addEventListener("click", showAbout);

  showHome();
  
});