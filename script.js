function showMessage() {
    alert("Welcome to Pakistan! 🇵🇰");
}


function toggleDropdown() {
    const menu = document.getElementById("dropdownMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function goTo(page) {
    window.location.href = page;
}
