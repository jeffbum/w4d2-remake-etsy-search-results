var container = document.createElement('div') //any valid html tag in quotes
//console.dir(container)

container.classList.add('container')//added a div container
var row = document.createElement('div')
row.classList.add('row')
container.appendChild(row)

var col = document.createElement('div')
col.classList.add('col-sm-4')
col.setAttribute('title', 'A fancy column')
var col2 = col.cloneNode(true)//now that you've clone the node, clone the outer shell of the node too, not just the children.
var col3 = col.cloneNode(true)
col.innerHTML = 'Column A'
col2.innerHTML = 'Column B'
col3.innerHTML = 'Column C'
row.appendChild(col)
row.appendChild(col2)
row.appendChild(col3)

//long hand way of the above method, below.
// var col = document.createElement('div')
// col.classList.add('col-sm-4')
// col.innerHTML = 'Column B'
// row.appendChild(col)
//
// var col = document.createElement('div')
// col.classList.add('col-sm-4')
// col.innerHTML = 'Column C'
// row.appendChild(col)
//document.body.appendChild(conatiner)//appendChild() = method takes any

//<input type="text" id="search" placeholder="Search..."
var searchInput = document.createElement('input')
searchInput.type = 'text'
searchInput.id = 'search'
searchInput.placeholder = 'Search...'
searchInput.className = 'form-control'
container.insertBefore(searchInput, row)//DOM method to place first value, before the second value

//<div class="input-group">
    //   <input type="text" class="form-control" placeholder="Search for...">
    //   <span class="input-group-btn">
    //     <button class="btn btn-default" type="button">Go!</button>
    //   </span>
    // </div><!-- /input-group -->
var searchDiv = document.createElement('div')
searchDiv.classList.add('input-group')

var span = document.createElement('span')
span.classList.add('input-group-btn')

var button = document.createElement('button')
button.type = 'button'
button.className = 'btn btn-default'
button.innerHTML = 'Search!!!'

searchDiv.appendChild(searchInput)
span.appendChild(button)
searchDiv.appendChild(span)

container.insertBefore(searchDiv, row)
container.insertBefore(document.createElement('br'), searchDiv)
container.insertBefore(document.createElement('br'), searchDiv.nextSibling)

button.addEventListener('click', search)
searchInput.addEventListener('keypress', searchEnter)

function searchEnter(event){
    if (event.key === 'Enter'){
        search()
    }
    console.log(event.key === 'Enter')
}

function search(){
    var searchTerm = document.querySelector('#search').value
    var searchResult = {
        term: searchTerm,
        image: 'http://unsplash.it/400?random',
    }
    createSearchResult(searchResult)
    document.querySelector('#search').value = ''
    alert(searchTerm)
}
function createSearchResult(result) {
    var card = document.createElement('div')
    card.className = 'well'
    card.innerHTML = result.term
    document.querySelector('.col-sm-4:first-child').appendChild(card)
}

document.getElementById('searchResults').appendChild(container)//creates div inside search results. final step
