document.addEventListener("DOMContentLoaded", () => {
    
});

// Fetch requests

function userSearch(event) {
    event.preventDefault();
    let username = document.getElementById("search").value;
    fetch(`https://api.github.com/search/users?q=${username}`)
    .then(res => res.json())
    .then(json => renderUsers(json.items))
    const form = document.getElementById("github-form");
    form.reset();
};

function repoSearch(event) {
    event.preventDefault();
    let username = (event.target.id);
    fetch(`https://api.github.com/users/${username}/repos`)
    .then(res => res.json())
    .then(json => renderRepos(json))
};

// Render users

function renderUsers(users) {
    const userList = document.getElementById("user-list");
    users.forEach(user => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<a href onclick="repoSearch(event)"><h2 id=${user.login}>${user.login}</h2></a>
        <img src="${user.avatar_url}" class="user-avatar" height="250px" width="250 px">
        <br>
        <a href="${user.html_url}" class="user-profile-link"> Profile </a>`
        userList.appendChild(card);
    });
};

// Render repos

function renderRepos(repos) {
    const repoList = document.getElementById("repos-list");
    repos.forEach(repo => {
        const repoCard = document.createElement("div");
        repoCard.className = "repoCard";
        repoCard.innerHTML = `<p>${repo.name}</p>`
        repoList.appendChild(repoCard);
    });
};

// Event listener - search function

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", userSearch);
