/* document.body.style.backgroundColor = 'lightblue'; */
const allHTMLTags = document.getElementsByTagName('*')
console.log(allHTMLTags)
/* window.alert(allHTMLTags) */
document.addEventListener('click', function(e) {
    eTarget = e.target
    eParent = eTarget.parentNode
    eParentTag = (eParent.tagName).toLowerCase()
    eParentClass = eParent.className
    ePrevious = e.target.previousSibling.innerHTML
    console.log(eTarget.innerHTML)
})

/* console.log(document.querySelectorAll('dl dt.extra-phones')) */