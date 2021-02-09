let dodger = document.getElementById("dodger")

dodger.style.backgroundColor = "#FF69B4"

console.log(dodger.style.left)
console.log(dodger.style.bottom)

dodger.style.bottom = "100px"
dodger.style.bottom = "0px"

document.addEventListener("keydown", event => {
    if ( event.key === "ArrowLeft" ) {
        moveDodgerLeft()
    } else if ( event.key === "ArrowRight" ) {
        moveDodgerRight()
    }
})

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "")
    let left = parseInt(leftNumbers, 10)

    if ( left > 0 ) {
        dodger.style.left = `${left - 1}px`
    }
}

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "")
    let left = parseInt(leftNumbers, 10)

    if ( left < 360 ) {
        dodger.style.left = `${left + 1}px`
    }
    console.log(dodger.style.left)
}
