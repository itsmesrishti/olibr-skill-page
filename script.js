// MENU (Mobile)
// document.getElementById("open-menu-icon").addEventListener('click', function() {
//     document.getElementById("menu-offcanvas").style.left = "0";

//     document.getElementById("close-menu-icon").addEventListener('click', function() {
//         document.getElementById("menu-offcanvas").style.left = "-100vw";
//     });
// });


// collapsible list
function hideList() {
    document.getElementsByTagName('ul')[0].style.display = "none";
    
}

document.getElementById("list-header").addEventListener('click', function() {
    document.getElementsByTagName('ul')[0].style.display = "block";
    document.getElementById("list-header").addEventListener('click', hideList);
});