let menuItems = [
    {
        type: 'menu',
        title: 'Bacon & Eggs',
        price: '11',
        description: 'Good, old fashioned thick cut, hickory smoked bacon, and farm fresh eggs any way you like it. Served with your choice of toast or hash browns.'
    },
    {
        type: 'menu',
        title: 'Biscuits & Gravy',
        price: '10',
        description: 'Fluffy buttermilk biscuits with our homemade sausage gravy. Served with your choice of toast or hash browns.'
    },
    {
        type: 'menu',
        title: 'Bullshit Salad',
        price: '15',
        description: 'Some unnecessarily long description. Many more words to fill up the space.'
    },
    {
        type: 'menu',
        title: 'Chicken Sando',
        price: '10',
        description: "Another long description, giving the reader of the menu some mouthwatering poetry, so they'll feel better spending their money."
    },
]

const menuPage = function(){    
    if(document.querySelectorAll('.container').length  === 0){    
        const contentDiv = document.querySelector('#content')

        const menuH1 = document.createElement('h1')
        menuH1.innerText = 'This is our Menu'
        contentDiv.appendChild(menuH1)

        const menuContainerDiv = document.createElement('div')
        menuContainerDiv.classList.add('container')
        menuContainerDiv.id = 'menu'
        contentDiv.appendChild(menuContainerDiv)

        const menuHolderDiv = document.createElement('div')
        menuHolderDiv.classList.add('menu-holder')
        menuContainerDiv.appendChild(menuHolderDiv)    
        
        menuItems.forEach(item => {
            if(item.type === 'menu'){
                const itemCardDiv = document.createElement('div')
                itemCardDiv.classList.add('item-card')
                menuHolderDiv.appendChild(itemCardDiv)

                const itemTitleDiv = document.createElement('div')
                itemTitleDiv.classList.add('item-title')
                itemTitleDiv.innerHTML = `
                    <h2>${item.title}</h2>
                    <h2>${item.price}</h2>`
                itemCardDiv.appendChild(itemTitleDiv)
                
                const itemDescriptionDiv = document.createElement('div')
                itemDescriptionDiv.classList.add('item-description')
                itemDescriptionDiv.innerHTML = `
                    <p>${item.description}</p>`
                itemCardDiv.appendChild(itemDescriptionDiv)
            }    
        })
    }
}

export {menuPage}

// const createDOMNode = (type, className, contents) => {
//   const element = document.createElement(type);
//   element.setAttribute('class', className);

// };

// const iContent = createDOMNode('p','','this is an ice cream test')
// const iceCream = createDOMNode('div', 'ice-cream', iContent)

// console.log(iContent)

/*


  contentDiv.appendChild(
    createDOMNode(
      'div', 
      'menu-container', 
      createDOMNode(
          'div',
          'breakfast-holder',
        createDOMNode(
          'div',
          'item-card',
          createDOMNode(
            'div',
            'item-title',
            [
              createDOMNode('h2',,item.title),
              createDOMNode('h2',,item.price)
            ]
          )
        )
      )
    )
  );

const itemDescriptionDiv = document.createElement('div')
itemDescriptionDiv.classList.add('item-description')
itemDescriptionDiv.innerHTML = `<p>${item.description}</p>`
itemCardDiv.appendChild(itemDescriptionDiv)

// vs
const itemContent = createDOMNode('p', ,item.description)
const itemDescriptionDiv = createDOMNode('div', 'item.description', itemContent)
*/