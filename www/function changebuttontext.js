let input_name = document.getElementById('label_names');
let input_email = document.getElementById('label_emails');
let submitbutton = document.getElementById('buttonsubmit');



function checkinput() {
    if (input_name.value !== "" && input_email.value !== "") {
        submitbutton.disabled = false;
    } else {
        submitbutton.disabled = true; 
    }
}

input_name.addEventListener('input', checkinput);
input_email.addEventListener('input', checkinput);

submitbutton.addEventListener('click', function() {
    if (!submitbutton.disabled) {
        input_name.value = "";
        input_email.value = "";
        submitbutton.innerHTML = "Submitted!";
        submitbutton.disabled = true;
    }
});

checkinput();