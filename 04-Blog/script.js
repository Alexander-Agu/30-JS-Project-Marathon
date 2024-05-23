// Intersection observer

/// this class takes a callback function in its instructor
// It can observer multiple elelmnts or entries at the same time
// The function will run anytime the visisbilty of one of the observed elements changes
const observer = new IntersectionObserver((entries) => {
    // Becase it handles multiple entries will need forEach to loop over them
    entries.forEach((entry) => {
        // Check if its intersecting the viewport or not
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    });
});

// grabb all the elemements with the .hidden class
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));