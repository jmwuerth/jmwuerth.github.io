const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        let text = entry.target.innerHTML;
        if (entry.isIntersecting) {
            entry.target.classList.add("show");

            if (text.match('Improved the quality of the team’s software')) {
                entry.target.classList.add("fadeInLeft");
            } else if (text.match('Improved the quality of the most number of products')) {
                entry.target.classList.add("fadeInTop");
            } else if (text.match('in labor costs by creating database software')) {
                entry.target.classList.add("fadeInRight");
            } else if (text.match('Instructed the team on how to use GitHub')) {
                entry.target.classList.add("fadeInLeft");
            } else if (text.match('Improved the execution time of')) {
                entry.target.classList.add("fadeInBottom");
            } else if (text.match('Created an easy way for managers')) {
                entry.target.classList.add("fadeInRight");
            } else {
                entry.target.classList.add("fadeInLeft");
            }

            // document.querySelectorAll(".animated")[0].classList.add("fadeInLeft");
            // document.querySelectorAll(".animated")[1].classList.add("fadeInTop");
            // document.querySelectorAll(".animated")[2].classList.add("fadeInRight");
            // document.querySelectorAll(".animated")[3].classList.add("fadeInLeft");
            // document.querySelectorAll(".animated")[4].classList.add("fadeInBottom");
            // document.querySelectorAll(".animated")[5].classList.add("fadeInRight");
        } else {
            entry.target.classList.remove("show");

            if (text.match('Improved the quality of the team’s software')) {
                entry.target.classList.remove("fadeInLeft");
            } else if (text.match('Improved the quality of the most number of products')) {
                entry.target.classList.remove("fadeInTop");
            } else if (text.match('in labor costs by creating database software')) {
                entry.target.classList.remove("fadeInRight");
            } else if (text.match('Instructed the team on how to use GitHub')) {
                entry.target.classList.remove("fadeInLeft");
            } else if (text.match('Improved the execution time of')) {
                entry.target.classList.remove("fadeInBottom");
            } else if (text.match('Created an easy way for managers')) {
                entry.target.classList.remove("fadeInRight");
            } else {
                entry.target.classList.remove("fadeInLeft");
            }

            // document.querySelectorAll(".animated")[0].classList.remove("fadeInLeft");
            // document.querySelectorAll(".animated")[1].classList.remove("fadeInTop");
            // document.querySelectorAll(".animated")[2].classList.remove("fadeInRight");
            // document.querySelectorAll(".animated")[3].classList.remove("fadeInLeft");
            // document.querySelectorAll(".animated")[4].classList.remove("fadeInBottom");
            // document.querySelectorAll(".animated")[5].classList.remove("fadeInRight");
        }
    })
})

const hiddenElements = document.querySelectorAll('.animated');
// Observer all the hidden (.animated) elements for when they intersect the viewport
hiddenElements.forEach((el) => {
    observer.observe(el);
})
