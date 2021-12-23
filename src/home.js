const homepage = function(){
    const contentDiv = document.querySelector('#content')
    //if(document.querySelectorAll('.container').length  === 0){    
        const homeContainerDiv = document.createElement('div')
        homeContainerDiv.classList.add('container')
        homeContainerDiv.id = 'home'
        homeContainerDiv.innerHTML = '<h1>This is an h1 in the home container</h1>'
        contentDiv.appendChild(homeContainerDiv)
    //}    
}

export {homepage}