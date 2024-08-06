const searchBar = document.getElementById("search-bar");
const clearSearchButton = document.getElementById("clear-search");
const postsList = document.getElementById("posts-list");
const pagination = document.getElementById("pagination");
let posts = [];
let currentPage = 1;
const postsPerPage = 10;
let searchTimeout;

async function fetchMediumPosts() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const response = await fetch(
    "https://mediumpostsapi.vercel.app/api/@arjinalbay21", // Updated API endpoint
    requestOptions
  );
  const result = await response.json();
  console.log(result);

  // Check if the data property exists and handle the response structure accordingly
  if (result && result.dataMedium && result.dataMedium.length > 0) {
    return result.dataMedium.map((post) => ({
      title: post.title,
      link: post.link,
    }));
  } else {
    throw new Error("No data found in the response");
  }
}

async function displayMediumPosts() {
  try {
    posts = await fetchMediumPosts();
    renderPosts(currentPage);
    renderPagination();
  } catch (error) {
    console.error("Failed to fetch Medium posts:", error);
  }
}

function renderPosts(page) {
  postsList.innerHTML = "";
  const start = (page - 1) * postsPerPage;
  const end = start + postsPerPage;
  const pagePosts = posts.slice(start, end);

  pagePosts.forEach((post) => {
    const postItem = document.createElement("li");
    const postLink = document.createElement("a");
    postLink.href = post.link;
    postLink.textContent = post.title;
    postLink.classList.add("text-blue-500", "hover:underline");
    postLink.target = "_blank";
    postItem.appendChild(postLink);
    postsList.appendChild(postItem);
  });

  pagination.style.display = posts.length > postsPerPage ? "flex" : "none"; // Show pagination only if more than one page of posts
}

function renderPagination() {
  pagination.innerHTML = "";
  const totalPages = Math.ceil(posts.length / postsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i;
    pageButton.classList.add("xp-button");
    if (i === currentPage) {
      pageButton.classList.add("active");
    }
    pageButton.addEventListener("click", () => {
      currentPage = i;
      renderPosts(currentPage);
      renderPagination(); // Update active state
    });
    pagination.appendChild(pageButton);
  }
}

function filterPosts() {
  const query = searchBar.value.toLowerCase();
  if (query === "") {
    renderPosts(currentPage);
    renderPagination();
    return;
  }
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(query)
  );
  postsList.innerHTML = "";
  if (filteredPosts.length === 0) {
    const noResultsItem = document.createElement("li");
    noResultsItem.textContent =
      "Zero results! Did the cat walk on your keyboard?"; // Choose one of the funny answers
    noResultsItem.classList.add("text-red-500", "font-bold", "italic");
    postsList.appendChild(noResultsItem);
    pagination.style.display = "none"; // Hide pagination
  } else {
    filteredPosts.forEach((post) => {
      const postItem = document.createElement("li");
      const postLink = document.createElement("a");
      postLink.href = post.link;
      postLink.textContent = post.title;
      postLink.classList.add("text-blue-500", "hover:underline");
      postItem.appendChild(postLink);
      postsList.appendChild(postItem);
    });
    pagination.style.display = "none"; // Hide pagination during search results
  }
}

function handleSearchInput() {
  clearTimeout(searchTimeout);
  filterPosts();
  searchTimeout = setTimeout(() => {
    if (searchBar.value.trim() === "") {
      searchBar.value = "";
      renderPosts(currentPage);
      renderPagination();
    }
  }, 30000); // 30 seconds
}

function clearSearch() {
  searchBar.value = "";
  renderPosts(currentPage);
  renderPagination();
}

searchBar.addEventListener("input", handleSearchInput);
clearSearchButton.addEventListener("click", clearSearch);

// Call the function with your Medium username
displayMediumPosts("akapelal");
