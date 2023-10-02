const indexHeader = document.getElementById("list-header");
const collapsibleListBox = document.getElementById("collapsible-list");

// open & close collapsible list
indexHeader.onclick = function() {
	
    if (collapsibleListBox.style.display === "") {
		// to show the list block
        collapsibleListBox.style.display = "block";
        collapsibleListBox.style.position = "absolute";
        collapsibleListBox.style.top = "3.5rem";
        document.body.style.overflowY = 'hidden';

		// to change the icon accordingly
        document.querySelector('#list-header i').classList.remove("fa-caret-down");
		document.querySelector('#list-header i').classList.add("fa-caret-up");
    }
    else {
		// to hide the list block
        collapsibleListBox.style.display = "";
        document.body.style.overflowY = 'scroll';

		// to change the icon accordingly
        document.querySelector('#list-header i').classList.remove("fa-caret-up");
		document.querySelector('#list-header i').classList.add("fa-caret-down");
    }
	
};


// scroll spy
const navLinksDesktop = document.querySelectorAll('#desktop-list li a');
const navLinksMobile = document.querySelectorAll('#collapsible-list li a');
const topics = document.querySelectorAll(".topic");
var scrollingDiv = false;
var clickingLink = false;

navLinksDesktop.forEach(function(desktopLink) {
    desktopLink.addEventListener('click', function() {
        document.querySelector('.active').classList.remove('active');
        desktopLink.classList.add('active');
    });
});

document.querySelector(".detailed-info").addEventListener('scroll', function() {

    var currentTopic = "topic-1";

    document.querySelector(".mobile-contents").style.position = "sticky";
    document.querySelector(".mobile-contents").style.top = "0px";
        
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
                
                // check if user clicked the link in mobile version
                navLinksMobile.forEach(function(menuLink) {
                    menuLink.addEventListener('click', function() {
                        clickingLink = true;
                        scrollingDiv = false;
                    });
                });

                // check if user scrolled in mobile version
                document.querySelector(".detailed-info").addEventListener('scroll', function() {
                    scrollingDiv = true;
                    clickingLink = false;
                });

                // depending on that the threshold values will be applied
                if (clickingLink == true && scrollingDiv == false) {
                    if (document.querySelector(".detailed-info").scrollTop >= diff - 500) {
                        currentTopic = topic.id;
                    }
                }
                else if  (clickingLink == false && scrollingDiv == true) {
                    if (document.querySelector(".detailed-info").scrollTop >= diff - 380) {
                        currentTopic = topic.id;
                    }
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
            document.body.style.overflowY = 'scroll';
        }
    };

	var x = window.matchMedia("(min-width: 1024px)");
    myFunction(x);
    x.addEventListener('change', myFunction );
            
});


// accordion
const accordionQuestions = document.querySelectorAll(".question");
const accordionAnswers = document.querySelectorAll(".answer");

accordionQuestions.forEach(function(ques) {
    ques.addEventListener('click', function() {

        if (ques.nextElementSibling.classList.contains("show")) {

            ques.nextElementSibling.classList.replace("show", "hide");
            ques.firstElementChild.classList.replace("fa-minus", "fa-plus");
            
        }
        else {

            if (document.querySelector(".faq .show")) {
                document.querySelector(".faq .show").previousElementSibling.firstElementChild.classList.replace("fa-minus", "fa-plus");
                document.querySelector(".faq .show").classList.replace("show", "hide");
            }
            
            if (document.querySelector(".interview-questions .show")) {
                document.querySelector(".interview-questions .show").previousElementSibling.firstElementChild.classList.replace("fa-minus", "fa-plus");
                document.querySelector(".interview-questions .show").classList.replace("show", "hide");
            }
            
            ques.nextElementSibling.classList.replace("hide", "show");
            ques.firstElementChild.classList.replace("fa-plus", "fa-minus");          
        }
    }); 
});
