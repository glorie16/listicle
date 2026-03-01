const renderFurniture = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/furniture')
    const data = await response.json()

    const furnitureContent = document.getElementById('furniture-content')

    let furniture

    furniture = data.find(furniture => furniture.id === requestedID)

    if(furniture) {
        document.getElementById('image').src = furniture.image
        document.getElementById('name').textContent = furniture.name
        document.getElementById('price').textContent = 'Price: ' + furniture.price
        document.getElementById('description').textContent = furniture.description
        document.title = `UnEarthed - ${furniture.name}`
    }
    else {
        const noDataMsg = document.createElement('h2')
        noDataMsg.textContent = 'No furniture available.'
        furnitureContent.appendChild(noDataMsg)
    }
}

renderFurniture()