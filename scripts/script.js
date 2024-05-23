async function updateText(path) {
    const response = await fetch(path);
    const text = await response.text();
    document.getElementById("text").innerHTML = text;
}
