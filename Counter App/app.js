// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        }
        else if (styles.contains("reset")) {
            count = 0;
        }
        else if (styles.contains("increase")) {
            count++;
        }
        value.textContent = count;
        if (value.textContent < 0) {
            value.style.color = "red";
        }
        else if (value.textContent > 0) {
            value.style.color = "blue";
        }
        else {
            value.style.color = "black";
        }

    });
});