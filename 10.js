function detect() {
    const char = document.getElementById("Character");
    const result = document.getElementById("para");

    const character = char.value;

    if (isASCII(character)) {
        result.innerHTML = "The Entered character is An ASCII Character "
    } else {
        result.innerHTML = "The Entered character is An Uncide Character"
    }

}

function isASCII(character) {
    return character.charCodeAt(0) <= 127;
}