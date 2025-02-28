document.addEventListener("DOMContentLoaded", function () {
  // "Наши проекты" tugmachasini olish
  const projectsLink = document.querySelector("nav ul li:nth-child(3)");
  const content = document.getElementById("content");

  // Yangi sahifa uchun HTML
  const projectsPage = `
      <div class="projects_section">
        <h2>Наши проекты</h2>
        <div class="projects">
          <div class="project-card">Проект 1</div>
          <div class="project-card">Проект 2</div>
          <div class="project-card">Проект 3</div>
        </div>
      </div>
    `;

  // "Наши проекты" bosilganda, faqat <main> o'zgaradi
  projectsLink.addEventListener("click", function (event) {
    event.preventDefault(); // Sahifani qayta yuklamaslik uchun
    content.innerHTML = projectsPage;
  });
});
