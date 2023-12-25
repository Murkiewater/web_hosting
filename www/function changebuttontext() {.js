function changebuttontext () {
    var button = document.getElementById("buttonsubmit");
    if(button.innerHTML === "Submit") {
        button.innerHTML = "Submitted!";
    } else {
        button.innerHTML = "Submit";
    }
}

document.getElementById("buttonsubmit").addEventListener("click", changebuttontext);
