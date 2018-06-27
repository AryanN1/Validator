"use strict";
var $ = function(id) { return document.getElementById(id); };

var validatePhone = function() {
    var phone = $("phone").value;

    var pattern = /^[1]?((\-\d{3}\-)|(\(?\d{3}\)?)|\s+\d{3}\s+)\d{3}\-\d{4}$/;
    var isValid = pattern.test(phone);

    $("message").firstChild.nodeValue = (isValid) ? "Valid phone number" : "Invalid phone number";
};

window.onload = function() {
    $("validate").onclick = validatePhone;
    $("phone").value = "123-456-7890";
};