const indexHeader = document.getElementById("list-header");
const collapsibleListBox = document.getElementById("collapsible-list");

// const listContents = document.querySelectorAll(".info-section .menu a");
const mobileList = document.querySelectorAll("#collapsible-list li a");
const desktopList = document.querySelectorAll("#desktop-list li a");


// open & close collapsible list
indexHeader.onclick = function() {
	
    if (collapsibleListBox.style.display === "") {
		// to show the list block
        collapsibleListBox.style.display = "block";
		// to change the icon accordingly
        document.querySelector('#list-header i').classList.remove("fa-caret-down");
		document.querySelector('#list-header i').classList.add("fa-caret-up");
    }
    else {
		// to hide the list block
        collapsibleListBox.style.display = "";
		// to change the icon accordingly
        document.querySelector('#list-header i').classList.remove("fa-caret-up");
		document.querySelector('#list-header i').classList.add("fa-caret-down");
    }
	
};

// apply styles to clicked list item and remove from previous item
// change header content depending on link clicked
for (var i = 0; i < mobileList.length; i++) {
	
	mobileList[i].addEventListener('click', function(e) {

		// to identify the link clicked
		var link = e.target.href;
		var hrefLink = link.split("#")[1];

		// remove style from previously selected link
		document.querySelector("#collapsible-list li a.active").setAttribute('class', '');

		// add style to the link user clicked
		document.querySelector("#collapsible-list a[href='#" + hrefLink + "']").setAttribute('class', 'active');
		
		// to grab the content of the link clicked
		var newHeaderContent = document.querySelector("#collapsible-list a[href='#" + hrefLink + "']").innerText;

		// to change the content of the header with the link clicked content and also the icon
		document.querySelector("#list-header p").innerHTML = newHeaderContent;
		document.querySelector("#list-header i").setAttribute('class', 'fa-solid fa-caret-down');

		// to close the list block after user clicks on the link
        collapsibleListBox.style.display = "";

	});
}


// for desktop content list
for (var i = 0; i < desktopList.length; i++) {
	desktopList[i].addEventListener('click', function(e) {

		// to identify the link clicked
		var link = e.target.href;
		var hrefLink = link.split("#")[1];

		// remove style from previously selected link
		document.querySelector("#desktop-list li a.active").setAttribute('class', '');

		// add style to the link user clicked
		document.querySelector("#desktop-list a[href='#" + hrefLink + "']").setAttribute('class', 'active');


	});
}


// scroll spy
