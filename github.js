"use strict";
/* global menu */

var github = (function () {
    var showGithub = function () {
        window.mainContainer.innerHTML = "";

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Github";

        window.mainContainer.appendChild(title);

        fetch("https://api.github.com/users/Orkanen/repos").then(function (response) {
            return response.json();
        }).then(function(data) {
            data.forEach(function(repo) {
                var repoElement = document.createElement("a");

                repoElement.textContent = repo.name;
                repoElement.setAttribute('href', `https://github.com/Orkanen/${repo.name}`);
                window.mainContainer.appendChild(repoElement);
            });

            window.rootElement.appendChild(window.mainContainer);

            menu.showMenu("folder");
        }).catch(function(error) {
            console.log('The fetch operation failed due to the following error: ', error.message);
        });
    };

    return {
        showGithub: showGithub
    };
})(github);
