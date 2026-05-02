document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
        ".main-body").style.visibility = "hidden";
        document.querySelector(
        "#loader").style.visibility = "visible";
    } else {
        document.querySelector(
        "#loader").style.visibility = "hidden";
        document.querySelector(
        ".main-body").style.visibility = "visible";
    }
};