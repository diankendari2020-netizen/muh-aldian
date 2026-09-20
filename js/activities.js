document.addEventListener('DOMContentLoaded', () => {
  const achievements = document.querySelector('#achievements');
  if (!achievements) return;

  const activity = document.createElement('article');
  activity.className = 'activity-highlight reveal visible';
  activity.innerHTML = `
    <div class="activity-highlight-heading">
      <span>Professional development · August 2025</span>
      <p>Activity highlight</p>
    </div>
    <div class="activity-images">
      <img src="img/activities/WhatsApp Image 2026-09-19 at 22.53.19.jpeg" alt="Muh Aldian Maharani with participants of the international intensive course">
      <img src="img/activities/Muh Aldian Maharani (5)_page-0001.jpg" alt="Certificate of completion for the international intensive course">
    </div>
    <div class="activity-highlight-copy">
      <h3>International Intensive Course on Legal Research &amp; American Legal System</h3>
      <p>Completed an international intensive course covering legal research, the American legal system, the American judicial system, and dispute resolution mechanisms.</p>
      <div><strong>Held:</strong> 19–21 and 25–28 August 2025 <span>·</span> <strong>Issued:</strong> 29 August 2025</div>
    </div>`;
  achievements.after(activity);
});
