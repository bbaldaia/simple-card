

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

changeSocialMediaLinks()