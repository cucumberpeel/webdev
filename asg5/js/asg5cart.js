let bpObj = document.getElementById('blackpink');
let keshiObj = document.getElementById('keshi');
bpObj.addEventListener("change", total);
keshiObj.addEventListener("change", total);

// prevent default
// shipping not adding to total
// reset
let form = document.forms[0];
form.addEventListener("submit", receipt);
// form.addEventListener("submit", receipt(e) {
//     e.preventDefault()
// });

function total() {
    var bp_items = document.getElementById('blackpink').value;
    var bp_price = document.getElementById('blackpink-price').value;
    var bp_total = bp_items * bp_price;
    document.getElementById('blackpink-total').value = bp_total;

    var keshi_items = document.getElementById('keshi').value;
    var keshi_price = document.getElementById('keshi-price').value;
    var keshi_total = keshi_items * keshi_price;
    document.getElementById('keshi-total').value = keshi_total;

    if (bp_total > 0 || keshi_total > 0) {
        document.getElementById('total').value = bp_total + keshi_total;
    }
    else {
        document.getElementById('total').value = 0;
    }
}

function receipt(e) {
    let len = form.elements.length;
    let text = "<h1>Thank you for your purchase! </h1>";
    let total = "?";
    let radio_flag = false;
    for (let i = 0; i < len - 2; i++) {
        // ensure no empty fields
        if (form.elements[i].value == "" || form.elements[i].value == null) {
            alert("Incomplete field. Please try again.");
            form.elements[i].focus();
            form.elements[i].select();
            form.elements[i].style.backgroundColor="red";
            return;
        }
        // validate zip code
        else if (i == 2 && form.elements[i].value.length != 5) {
            alert("5-digit zip code required. Please try again.");
            form.elements[i].focus();
            form.elements[i].select();
            form.elements[i].style.backgroundColor="red";
            return;
        }
        // validate email address
        else if (i == 3 && form.elements[i].value.indexOf("@") == -1) {
            alert("Invalid email address. Please try again.");
            form.elements[i].focus();
            form.elements[i].select();
            form.elements[i].style.backgroundColor="red";
            return;
        }
        else if (i == 3 && form.elements[i].value.indexOf(".") == -1) {
            alert("Invalid email address. Please try again.");
            form.elements[i].focus();
            form.elements[i].select();
            form.elements[i].style.backgroundColor="red";
            return;
        }
        else if (i == 4 && form.elements[i].checked == true) {
            text += form.elements[i].name;
            text += ": ";
            text += form.elements[i].value;
            text += "<p>";
            radio_flag = true;
        }
        else if (i == 4 && form.elements[i].checked == false) {
            continue;
        }
        else if (i == 5 && radio_flag) {
            continue;
        }
        else if (i == 5 && form.elements[i].checked == true) {
            text += form.elements[i].name;
            text += ": ";
            text += form.elements[i].value;
            text += "<p>";
        }
        else if (i == 6 && form.elements[i].value.length != 16) {
            alert("Invalid credit card number. Please try again.");
            form.elements[i].focus();
            form.elements[i].select();
            form.elements[i].style.backgroundColor="red";
            return;
        }
        else if (i == 6) {
            text += form.elements[i].name;
            text += ": ";
            text += "XXXX XXXX XXXX " + form.elements[i].value.slice(12, 16);
            text += "<p>";
        }
        else {
            text += form.elements[i].name;
            text += ": ";
            text += form.elements[i].value;
            text += "<p>";
        }
    }
    // show receipt
    document.open();
    document.write(text);
    document.write("<h2>Total: " + total + "</h2>");
}