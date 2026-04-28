document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let cls = document.getElementById("class").value;
    let stream = document.getElementById("stream").value;
    let interest = document.getElementById("interest").value;

    if (name === "" || cls === "" || stream === "" || interest === "") {
        document.getElementById("result").innerHTML = "Please fill all fields";
        document.getElementById("result").style.color = "blue";
    } else {
        document.getElementById("result").innerHTML =
            "Form Submitted Successfully!";
        document.getElementById("result").style.color = "green";
    }
});