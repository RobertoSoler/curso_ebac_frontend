document.addEventListener('DOMContentLoaded', function() {

    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#rlink');

    fetch('https:/api.github.com/users/robertosoler')
    .then(function(resposta) {
        return resposta.json();
    })
    .then(function(json) {
        nameElement.innerHTML = json.name;
        usernameElement.innerHTML = json.login;
        avatarElement.src = json.avatar_url;
        followingElement.innerHTML = json.following;
        followersElement.innerHTML = json.followers;
        reposElement.innerHTML = json.public_repos;
        linkElement.href = json.html_url; 
    })

});