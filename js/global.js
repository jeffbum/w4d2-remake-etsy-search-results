var searchTerm//global, use anywhere

document.querySelector('#searchButton').addEventListener('click', search)
document.querySelector('#searchInput').addEventListener('keypress', searchEnter)

function searchEnter(event) {
    if (event.key === 'Enter') {
        search()
    }
}
function search() {
    searchTerm = document.querySelector('#searchInput').value
    console.log(searchTerm)
    fetch('https://thinksaydo.com/tiyproxy.php?url=' + encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=noqfuvacwjgu5ur81gnlvxar&keywords=)' + encodeURIComponent(searchTerm) +  '&includes=Images,Shop'))
    //where board games is at, you'll move it to what's typed in the search bar
    .then(response => response.json())
    .then(function(items) {
        document.getElementById('searchResults').innerHTML = ''
        items.results.forEach(function(item){
            console.log(item)
            var col = document.createElement('div')
            col.className = 'col-sm-3'

            var card = document.createElement('div')
            card.className = 'card'
            col.appendChild(card)

            var img = document.createElement('img')
            img.setAttribute('src', item.Images[0].url_570xN
            )
            card.appendChild(img)

            var span = document.createElement('span')
            span.innerHTML = item.title
            card.appendChild(span)

            var row = document.createElement('div')
            row.className = 'row'
            card.appendChild(row)

            var colLeft = document.createElement('div')
            colLeft.className = 'col-xs-6 text-muted'
            colLeft.innerHTML = item.Shop.login_name
            row.appendChild(colLeft)

            var colRight = document.createElement('div')
            colRight.className = 'col-xs-6 text-right text-success'
            colRight.innerHTML = '$' + item.price
            row.appendChild(colRight)
            document.querySelector('#searchResults').appendChild(col)
                })
    })
    //searchEnter(searchResult)
    //document.querySelector('#searchButton').value = ''
}


fetch('https://thinksaydo.com/tiyproxy.php?url=' + encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=noqfuvacwjgu5ur81gnlvxar&keywords=' + encodeURIComponent(searchTerm) +  '&includes=Images,Shop'))
//where board games is at, you'll move it to what's typed in the search bar
.then(response => response.json())
.then(function(items) {
    items.results.forEach(function(item){
        console.log(item)
        var col = document.createElement('div')
        col.className = 'col-sm-3'

        var card = document.createElement('div')
        card.className = 'card'
        col.appendChild(card)

        var img = document.createElement('img')
        img.setAttribute('src', item.Images[0].url_570xN
        )
        card.appendChild(img)

        var span = document.createElement('span')
        span.innerHTML = item.title
        card.appendChild(span)

        var row = document.createElement('div')
        row.className = 'row'
        card.appendChild(row)

        var colLeft = document.createElement('div')
        colLeft.className = 'col-xs-6 text-muted'
        colLeft.innerHTML = item.Shop.login_name
        row.appendChild(colLeft)

        var colRight = document.createElement('div')
        colRight.className = 'col-xs-6 text-right text-success'
        colRight.innerHTML = '$' + item.price
        row.appendChild(colRight)
        document.querySelector('#searchResults').appendChild(col)
            })
})

//search button functionality




// function createResultCard(item) {
//     //document.querySelector('#searchResults').innerHTML =''
//
//
// function makeRandomAmount() {
//     return '$' + (Math.round(Math.random()*100)) + '.00'
// }

//var items = [
    // {
    //     title: 'A title of a product',
    //     image: 'http://unsplash.it/200?image=',
    //     seller: 'sellername',
    //     price: makeRandomAmount()
    // },
    // {
    //     title: 'A title of a product',
    //     image: 'http://unsplash.it/200?image=',
    //     seller: 'sellername',
    //     price: makeRandomAmount()
    // },
    // {
    //     title: 'A title of a product',
    //     image: 'http://unsplash.it/200?image=',
    //     seller: 'sellername',
    //     price: makeRandomAmount()
    // },
    // {
    //     title: 'A title of a product',
    //     image: 'http://unsplash.it/200?image=',
    //     seller: 'sellername',
    //     price: makeRandomAmount()
    // },
    // {
    //     title: 'A title of a product',
    //     image: 'http://unsplash.it/200?image=',
    //     seller: 'sellername',
    //     price: makeRandomAmount()
    // },
    // {
    //     title: 'A title of a product',
    //     image: 'http://unsplash.it/200?image=',
    //     seller: 'sellername',
    //     price: makeRandomAmount()
    // },
    // {
    //     title: 'A title of a product',
    //     image: 'http://unsplash.it/200?image=',
    //     seller: 'sellername',
    //     price: makeRandomAmount()
    // },
    // {
    //     title: 'A title of a product',
    //     image: 'http://unsplash.it/200?image=',
    //     seller: 'sellername',
    //     price: makeRandomAmount()
    // },
    // {
    //     title: 'A title of a product',
    //     image: 'http://unsplash.it/200?image=',
    //     seller: 'sellername',
    //     price: makeRandomAmount()
    // },
    // {
    //     title: 'A title of a product',
    //     image: 'http://unsplash.it/200?image=',
    //     seller: 'sellername',
    //     price: makeRandomAmount()
    // },
    // {
    //     title: 'A title of a product',
    //     image: 'http://unsplash.it/200?image=',
    //     seller: 'sellername',
    //     price: makeRandomAmount()
    // },
    // {
    //     title: 'A title of a product',
    //     image: 'http://unsplash.it/200?image=',
    //     seller: 'sellername',
    //     price: makeRandomAmount()
    // },
// items.forEach(function(item, i) {
//     // item.title += i
//     // item.image += i
//     // item.seller += i
//     createResultCard(item)
//
// })
// createResultCard()
