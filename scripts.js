

const links = {
    github: 'bbaldaia',
    facebook: 'brunobaldaia98',
    instagram: 'bbaldaia_' 
}

function changeSocialMediaLinks() {
    for (let i of socialLinks.children) {
        social = i.getAttribute('class')
        i.children[0].href = `https://www.${social}.com/${links[social]}`
    }
}

function getGithubData() {
    const url = `https://api.github.com/users/${links.github}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const githubName = data.name
        const githubBio = data.bio
        document.querySelector('#username').textContent = githubName
        document.querySelector('#bio').textContent = githubBio
    })  
}

getGithubData()
// changeSocialMediaLinks()