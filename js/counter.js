var count = 60,
    counter = setInterval(timer, 1000); //1000 will  run it every 1 second

function timer() {
    count = count - 1;
    if (count <= 0) {
        clearInterval(counter);
        return;

    }
    document.getElementById("timer").innerHTML = count; // watch for spelling
};