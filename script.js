const indexHeader = document.getElementById("list-header");
const collapsibleListBox = document.getElementById("collapsible-list");

// const listContents = document.querySelectorAll(".info-section .menu a");
// const mobileList = document.querySelectorAll("#collapsible-list li a");
// const desktopList = document.querySelectorAll("#desktop-list li a");


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


// scroll spy
const navLinksDesktop = document.querySelectorAll('#desktop-list li a');
const navLinksMobile = document.querySelectorAll('#collapsible-list li a');
const topics = document.querySelectorAll(".topic");


document.querySelector(".detailed-info").addEventListener('scroll', function() {

    var currentTopic = "topic-1";
        
	function myFunction(x) {
    	if (x.matches) {
    		topics.forEach(function(topic) {
                var containerTop = document.querySelector(".info-section").offsetTop;
                var diff = topic.offsetTop - containerTop;
    	    	if (document.querySelector(".detailed-info").scrollTop >= diff - 300) {
    	        	currentTopic = topic.id;
    		}
    	});

            navLinksDesktop.forEach(function(link) {
                if(link.href.includes(currentTopic)) {
                    document.querySelector('.active').classList.remove('active');
                    link.classList.add('active');
                };
            });
        }
        else {
            topics.forEach(function(topic) {
                var containerTop = document.querySelector(".info-section").offsetTop;
                var diff = topic.offsetTop - containerTop;
                if (document.querySelector(".detailed-info").scrollTop >= diff - 380) {
                    currentTopic = topic.id;
                }
            });

            navLinksMobile.forEach(function(link) {
                if(link.href.includes(currentTopic)) {
                    document.querySelector('.active').classList.remove('active');
                    link.classList.add('active')
                };
            });

			// to grab the content of the link clicked
			var newHeaderContent = document.querySelector("#collapsible-list a[href='#" + currentTopic + "']").innerText;
			
			// to change the content of the header with the link clicked content and also the icon
			document.querySelector("#list-header p").innerHTML = newHeaderContent;
			document.querySelector("#list-header i").setAttribute('class', 'fa-solid fa-caret-down');

			// to close the list block after user clicks on the link
			collapsibleListBox.style.display = "";

        }
    };

	var x = window.matchMedia("(min-width: 700px)");
    myFunction(x);
    x.addEventListener('change', myFunction );
            
});
