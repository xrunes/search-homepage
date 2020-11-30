function search() {
    if (document.getElementById("search_input").value != "") {
        window.location.href = "https://www.baidu.com/s?wd=" + document.getElementById("search_input").value;
        document.getElementById("search_input").value = "";
    }
    return false;
}