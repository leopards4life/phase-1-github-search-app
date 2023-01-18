document.addEventListener("DOMContentLoaded", () => {
    
});

// Fetch requests

function userSearch(event) {
    event.preventDefault();
    let username = document.getElementById("search").value;
    fetch(`https://api.github.com/search/users?q=${username}`)
    .then(res => res.json())
    .then(json => renderUsers(json.items))
};

function repoSearch() {

};

// Render users

function renderUsers(users) {
    const userList = document.getElementById("user-list");
    users.forEach(user => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<h2>${user.login}</h2>
        <img src="${user.avatar_url}" class="user-avatar">
        <a href="${user.url}" class="user-profile-link"> Profile </a>`
        userList.appendChild(card);
    });
};

// Event listener - search function

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", userSearch);
