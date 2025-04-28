var validationStatus = {
    name: false,
    message: false,
    email: false,
    source: false,
    other: true 
};

var errors = {
    name: "errname",
    message: "errsubject",
    email: "erremail",
    source: "errselect",
    other: "errother",
    final: "errfinal"
};

function validate(e) {
    let ele = e.target;
    const errdiv = errors[ele.id];

    if (ele.id === "name") {
        if (ele.value.trim() === "") {
            document.getElementById(errdiv).innerHTML = "<span style='color:red'>Name required!</span>";
            validationStatus.name = false;
        } else if (ele.value.trim().length < 3 || ele.value.trim().length > 40) {
            document.getElementById(errdiv).innerHTML = "<span style='color:red'>Name: 3->40 chars!</span>";
            validationStatus.name = false;
        } else {
            document.getElementById(errdiv).innerHTML = "<span style='color:green;'>Ok!</span>";
            validationStatus.name = true;
        }
    }

    else if (ele.id === "message") {
        if (ele.value.trim() === "") {
            document.getElementById(errdiv).innerHTML = "<span style='color:red'>Subject required!</span>";
            validationStatus.message = false;
        } else if (ele.value.trim().length < 5 || ele.value.trim().length > 100) {
            document.getElementById(errdiv).innerHTML = "<span style='color:red'>Subject: 5->100 chars!</span>";
            validationStatus.message = false;
        } else {
            document.getElementById(errdiv).innerHTML = "<span style='color:green;'>Ok!</span>";
            validationStatus.message = true;
        }
    }

    else if (ele.id === "email") {
        if (ele.value.trim() === "") {
            document.getElementById(errdiv).innerHTML = "<span style='color:red'>Email required!</span>";
            validationStatus.email = false;
        } else {
            var atpos = ele.value.indexOf("@");
            var dotpos = ele.value.lastIndexOf(".");
            if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= ele.value.length) {
                document.getElementById(errdiv).innerHTML = "<span style='color:red'>Invalid email!</span>";
                validationStatus.email = false;
            } else {
                document.getElementById(errdiv).innerHTML = "<span style='color:green;'>Ok!</span>";
                validationStatus.email = true;
            }
        }
    }

    else if (ele.id === "source") {
        if (ele.value === "") {
            document.getElementById(errdiv).innerHTML = "<span style='color:red'>Select an option!</span>";
            validationStatus.source = false;
        } else {
            document.getElementById(errdiv).innerHTML = "<span style='color:green;'>Ok!</span>";
            validationStatus.source = true;
        }
    }

    else if (ele.id === "other") {
        if (ele.value.trim() === "") {
            document.getElementById(errdiv).innerHTML = "<span style='color:green;'>Ok!</span>";
            validationStatus.other = true;
        } else if (ele.value.trim().length < 3 || ele.value.trim().length > 30) {
            document.getElementById(errdiv).innerHTML = "<span style='color:red'>Answer: 3->30 chars!</span>";
            validationStatus.other = false;
        } else {
            document.getElementById(errdiv).innerHTML = "<span style='color:green;'>Ok!</span>";
            validationStatus.other = true;
        }
    }
}

function resetForm() {
    for (var key in errors) {
        document.getElementById(errors[key]).innerHTML = "";
    }

    validationStatus.name = false;
    validationStatus.message = false;
    validationStatus.email = false;
    validationStatus.source = false;
    validationStatus.other = true;
}

function finalValidate() {
    var requiredFields = ['name', 'message', 'email', 'source'];
    
    var count = 0; 
    for (var i = 0; i < requiredFields.length; i++) {
        var field = requiredFields[i]; 
        if (validationStatus[field] === true) { 
            count++; 
        }
    }
    var allValid = (count === requiredFields.length); 

    if (allValid && validationStatus.other) {
        document.getElementById("errfinal").innerHTML = "<span style='color:green'>Data correct!</span>";
    } else {
        document.getElementById("errfinal").innerHTML = "<span style='color:red'>Fix errors!</span>";
    }
}