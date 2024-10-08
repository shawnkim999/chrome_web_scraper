/* document.body.style.backgroundColor = 'lightblue'; */
const allHTMLTags = document.getElementsByTagName('*')
console.log(allHTMLTags)
/* window.alert(allHTMLTags) */
document.addEventListener('click', function(e) {
    const clickedElement = e
    console.log('Clicked tag: ', clickedElement)
    const eClassName = clickedElement.target.className
    const ptag = document.getElementsByClassName(eClassName)[0].innerHTML
    console.log(ptag)
    console.log(clickedElement.target.className)

    items = document.getElementsByClassName(eClassName)
    for (let i of items) {
        console.log(i.innerHTML)
    }
    console.log(items)
    console.log(document.querySelectorAll(e.target.parentNode))
})

/* console.log(document.querySelectorAll('dl dt.extra-phones')) */