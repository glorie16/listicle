const renderFurnitureHome = async () => {
    const response = await fetch('/furniture')
    const data = await response.json()
    const mainContent = document.getElementById('main-content')

    // conditional data whether or not data is null
    if (data) {
        data.map(furniture => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')
            topContainer.style.backgroundImage = `url('${furniture.image}')`;
            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            const name = document.createElement('h3')
            name.textContent = furniture.name
            bottomContainer.appendChild(name)

            const price = document.createElement('p')
            price.textContent = furniture.price
            bottomContainer.appendChild(price);

            const link = document.createElement('a')
            link.textContent = "Read More"
            link.className = "read-more-btn"

            link.setAttribute('role', 'button')
            link.href = `/furniture/${furniture.id}`
            bottomContainer.appendChild(link)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)

            mainContent.appendChild(card)
        })
    }
    else {
        const noDataMsg = document.createElement('h2')
        noDataMsg.textContent = 'No furniture available.'
        mainContent.appendChild(noDataMsg)
    }

}

const requestedUrl = window.location.href.split('/').pop()

if (requestedUrl) {
    window.location.href = '../404.html'
}
else {
    renderFurnitureHome()
}