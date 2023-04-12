const setGitHubAttributes = () => {
    fetch('https://api.github.com/users/mhommr')
      .then(response => response.json())
      .then(response => {
        document.getElementById('mhommr').setAttribute('src', response.avatar_url)
        document.getElementById('mhommrBio').innerHTML = `Github bio: ${response.bio}`
      })
}
setGitHubAttributes()