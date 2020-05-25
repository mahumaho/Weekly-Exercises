function showAlert() {
    alert("hello world");
    setTimeout(function () {
        alert("hello world");
        console.log("Hello world in console");
    }, 3000);
}

function showLoop() {
    setInterval(function () {
        alert("hello world from loop");
        console.log("hello world from loop");
    }, 3000);
}

function moveImage() {
    image = document.getElementById("movingImg");
    x = 10; //left
    y = 10; //top
    speed = Number(document.getElementById("speedInput").value);
    x = x + speed;
    y = y + speed;
    console.log("x=", x);
    console.log("y=", y);
    image.style.left = x + "px";
    image.style.top = y + "px";
}

