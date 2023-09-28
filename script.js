const indexHeader = document.getElementById("list-header");
const collapsibleList = document.getElementById("collapsible-list");

// open & close collapsible list
indexHeader.addEventListener('click', function() {
    if (collapsibleList.style.display === "none") {
        collapsibleList.style.display = "block";
        document.querySelector('#list-header i').classList.remove("fa-caret-down");
	document.querySelector('#list-header i').classList.add("fa-caret-up");
    }
    else {
        collapsibleList.style.display = "none";
        document.querySelector('#list-header i').classList.remove("fa-caret-up");
	document.querySelector('#list-header i').classList.add("fa-caret-down");
    }
});


const addActiveClass = function(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            document.querySelector('.active').setAttribute('class', '');
            var currentTopic = document.querySelector(".info-section a[href='#" + entry.target.id + "']");
            currentTopic.classList.add('active');
            var newHeaderContent = document.querySelector("a[href='#" + entry.target.id + "']").innerHTML;
            if (collapsibleList.style.display === "none") {
                indexHeader.innerHTML = newHeaderContent + "<i class='fa-solid fa-caret-down'></i>";
            }
            else if (collapsibleList.style.display === "block") {
                indexHeader.innerHTML = newHeaderContent + "<i class='fa-solid fa-caret-up'></i>";
            }
        }
    })
}

const options = {
    threshold: 0.8
};

const observer = new IntersectionObserver(addActiveClass, options);
const sections = document.querySelectorAll(".detailed-info div");

sections.forEach(function(section) {
    observer.observe(section);
})
