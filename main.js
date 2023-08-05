// Pobieranie elementow
const redInput = document.querySelector('#red');
const greenInput = document.querySelector('#green');
const blueInput = document.querySelector('#blue');
const output = document.querySelector('#output');
const div = document.querySelector('div');

//funkcja
function findHex() {
    event.preventDefault();
    let r = convert(redInput.value);
    let g = convert(greenInput.value);
    let b = convert(blueInput.value);

    let hexWithHash = `#${r}${g}${b}`;
    output.value = hexWithHash;

    function convert(rgb) {
        let getRgb = Number(rgb).toString(16)
        return getRgb
    }
    div.style.backgroundColor = hexWithHash;
    redInput.value = ""
    greenInput.value = ""
    blueInput.value = ""
}