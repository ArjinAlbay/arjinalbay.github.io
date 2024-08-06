document.addEventListener("DOMContentLoaded", () => {
  const bodyElement = document.body;

  // **************** Theme Switcher ****************
  const currentTheme = localStorage.getItem("theme") || "light";

  const lightThemeButton = document.getElementById("light-theme");
  const darkThemeButton = document.getElementById("dark-theme");

  if (currentTheme === "dark") {
    bodyElement.classList.add("dark");
    darkThemeButton.classList.add("active");
    darkThemeButton.disabled = true;
    lightThemeButton.classList.remove("active");
    lightThemeButton.disabled = false;
  } else {
    bodyElement.classList.add("light");
    lightThemeButton.classList.add("active");
    lightThemeButton.disabled = true;
    darkThemeButton.classList.remove("active");
    darkThemeButton.disabled = false;
  }

  lightThemeButton.addEventListener("click", () => {
    bodyElement.classList.remove("dark");
    bodyElement.classList.add("light");
    localStorage.setItem("theme", "light");
    lightThemeButton.classList.add("active");
    lightThemeButton.disabled = true;
    darkThemeButton.classList.remove("active");
    darkThemeButton.disabled = false;
  });

  darkThemeButton.addEventListener("click", () => {
    bodyElement.classList.remove("light");
    bodyElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    darkThemeButton.classList.add("active");
    darkThemeButton.disabled = true;
    lightThemeButton.classList.remove("active");
    lightThemeButton.disabled = false;
  });

  // **************** Navigation ****************
  const homeLink = document.getElementById("home-link");
  const projectsLink = document.getElementById("projects-link");
  const homeContent = document.getElementById("home-content");
  const projectsContent = document.getElementById("projects-content");

  homeLink.addEventListener("click", (e) => {
    e.preventDefault();
    homeContent.style.display = "block";
    projectsContent.style.display = "none";
  });

  projectsLink.addEventListener("click", (e) => {
    e.preventDefault();
    homeContent.style.display = "none";
    projectsContent.style.display = "block";
  });

  // *********************** Projects ***********************
  async function fetchGitHubRepos(username) {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    const repos = await response.json();
    return repos;
  }

  async function displayGitHubRepos(username) {
    const projectsList = document.getElementById("projects-list");
    const repos = await fetchGitHubRepos(username);

    repos.forEach((repo) => {
      const projectItem = document.createElement("li");
      projectItem.classList.add("project-item");

      const projectTitle = document.createElement("strong");
      projectTitle.textContent = repo.name;
      projectItem.appendChild(projectTitle);

      const projectDescription = document.createElement("p");
      projectDescription.textContent =
        repo.description || "No description provided";
      projectDescription.classList.add("project-description");
      projectItem.appendChild(projectDescription);

      const liveShareLink = document.createElement("a");
      liveShareLink.href = repo.html_url;
      liveShareLink.textContent = "Live Share";
      liveShareLink.classList.add("xp-button");
      projectItem.appendChild(liveShareLink);

      const codeSourceLink = document.createElement("a");
      codeSourceLink.href = repo.html_url;
      codeSourceLink.target = "_blank";
      codeSourceLink.textContent = "Code Source";
      codeSourceLink.classList.add("xp-button");
      projectItem.appendChild(codeSourceLink);

      projectsList.appendChild(projectItem);
    });
  }

  // Call the function with your GitHub username
  displayGitHubRepos("ArjinAlbay");
});
