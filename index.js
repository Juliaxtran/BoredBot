const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  console.log('clicked');
  fetch("https://apis.scrimba.com/bored/api/activity")
  .then(response => response.json())
  .then(data => {
      document.getElementById("activity-name").textContent = data.activity
      document.getElementById('title').textContent = '🤖 Bored Bot Says:'
      document.body.classList.toggle("fun")
  })
});

