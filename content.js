/* document.body.style.backgroundColor = 'lightblue'; */
/* const allHTMLTags = document.getElementsByTagName('*')
console.log(allHTMLTags) */
/* window.alert(allHTMLTags) */
const tagClassElement = (eTarget) => {
    eTag = eTarget.tagName.toLowerCase()
    eClass = ''
    eId = ''
    if (eTarget.id.length > 0) {
        eId = `#${eTarget.id}`
    }
    if (eTarget.classList.length > 0) {
        for (const e of eTarget.classList) {
            eClass = eClass + `.${e}`
        }
    }
    return eTag + eId + eClass
}

/* const parentElement = (eTarget, parents = 1) => {
    eTargetParent = ''
    currParent = eTarget.parentNode
    for (let i = 0; i < parents; i++) {
        if (currParent.length === 0) {
            break
        }
        pNode = currParent
        eTargetParent = tagClassElement(pNode) + ' ' + eTargetParent 
        currParent = currParent.parentNode
    }
    console.log(eTargetParent + tagClassElement(eTarget))
    return eTargetParent + tagClassElement(eTarget)
} */

const elementPath = (eTarget) => {
    res = tagClassElement(eTarget)
    currParent = eTarget.parentNode
    while (true) {
        if (currParent.tagName === undefined) {
            break
        }
        res = tagClassElement(currParent) + ' ' + res 
        currParent = currParent.parentNode
    }
    console.log(res)
    return res
}

/* const elementIndex = (eList) => {
    elementTag = eList[0].tagName.toLowerCase()
    return 
} */

document.addEventListener('click', function(e) {
    eTarget = e.target
    e.preventDefault()
    e.stopImmediatePropagation()
    e.stopPropagation()
    console.log(e)
    console.log(document.querySelectorAll(elementPath(eTarget)))
    console.log(elementPath(eTarget))
    
}, true)

let currElement
document.body.addEventListener('mouseover', function(e) {

    eTarget = e.target

    if (currElement) {
        currElement.style.border = '0px'
        currElement.style.boxSizing = 'content-box'
        currElement.style.backgroundColor = 'transparent'
    }

    let [x, y] = [e.clientX, e.clientY]
    currElement = document.elementFromPoint(x, y)
    currElement.style.border = '2px solid black'
    currElement.style.boxSizing = 'border-box'
    currElement.style.backgroundColor = 'yellow'




    /* eTarget.style.border = '2px solid black'
    eTarget.style.boxSizing = 'border-box' */

    


    /* let newDiv = document.createElement('div')
    newDiv.clientHeight = 300
    newDiv.clientWidth = 300
    newDiv.offsetHeight = 0
    newDiv.offsetWidth = 0
    newDiv.style.backgroundColor = 'green'
    newDiv.style.height = `${eTarget.clientHeight}px`
    newDiv.style.width = `${eTarget.clientWidth}px`
    newDiv.style.position = 'relative'
    newDiv.style.zIndex = 99999999

    const parentElement = document.getElementsByTagName('body')[0]
    parentElement.appendChild(newDiv)

    console.log(eTarget.clientHeight, eTarget.clientWidth, eTarget.offsetHeight, eTarget.offsetWidth)
    console.log(newDiv.clientHeight, newDiv.clientWidth, newDiv.offsetHeight, newDiv.offsetWidth)
    console.log(newDiv) */

    console.log(e)

}, )

/* console.log(document.querySelectorAll('dl dt.extra-phones')) */
console.log(document.querySelectorAll("img[src='https://i2.ypcdn.com/blob/998e819e171362dae9825d7b720181b061548463_228x168_crop.jpg']"))