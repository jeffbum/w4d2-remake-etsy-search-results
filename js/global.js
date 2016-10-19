function createResultCard(item) {
    var card = document.createElement('div')
    card.classList.add('col-sm-3')

    var img = document.createElement('img')
    img.setAttribute('src', item.image)
    card.appendChild(img)

    var span = document.createElement('span')
    span.innerHTML = item.title
    card.appendChild(span)

    document.querySelector('#searchResults.row').appendChild(card)
}
createResultCard({
    image: 'http://unsplash.it/200?random',
    title: 'Vintage Board Game Art Wall Home Decor',
    seller: 'franz66',
    price: 15.00
})
createResultCard({
    image: 'http://unsplash.it/200?random',
    title: 'Vintage Board Game Art Wall Home Decor',
    seller: 'franz66',
    price: 15.00
})
createResultCard({
    image: 'http://unsplash.it/200?random',
    title: 'Vintage Board Game Art Wall Home Decor',
    seller: 'franz66',
    price: 15.00
})
createResultCard({
    image: 'http://unsplash.it/200?random',
    title: 'Vintage Board Game Art Wall Home Decor',
    seller: 'franz66',
    price: 15.00
})
createResultCard({
    image: 'http://unsplash.it/200?random',
    title: 'Vintage Board Game Art Wall Home Decor',
    seller: 'franz66',
    price: 15.00
})
createResultCard({
    image: 'http://unsplash.it/200?random',
    title: 'Vintage Board Game Art Wall Home Decor',
    seller: 'franz66',
    price: 15.00
})
createResultCard({
    image: 'http://unsplash.it/200?random',
    title: 'Vintage Board Game Art Wall Home Decor',
    seller: 'franz66',
    price: 15.00
})
createResultCard({
    image: 'http://unsplash.it/200?random',
    title: 'Vintage Board Game Art Wall Home Decor',
    seller: 'franz66',
    price: 15.00
})
createResultCard({
    image: 'http://unsplash.it/200?random',
    title: 'Vintage Board Game Art Wall Home Decor',
    seller: 'franz66',
    price: 15.00
})
createResultCard({
    image: 'http://unsplash.it/200?random',
    title: 'Vintage Board Game Art Wall Home Decor',
    seller: 'franz66',
    price: 15.00
})
createResultCard({
    image: 'http://unsplash.it/200?random',
    title: 'Vintage Board Game Art Wall Home Decor',
    seller: 'franz66',
    price: 15.00
})
