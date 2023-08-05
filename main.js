const redInput = document.querySelector('#red')
const greenInput = document.querySelector('#green')
const blueInput = document.querySelector('#blue')
//Output
function findHex() {
    event.preventDefault();
    let r = convert(redInput.value);
    let g = convert(greenInput.value);
    let b = convert(blueInput.value);
    console.log(r + g + b)

    function convert(rgb) {
        let getRgb = Number(rgb).toString(16)
        return getRgb
    }
}