// password protect my resume

const resume = document.querySelector("#links #resume");

resume.addEventListener("click", password);

function password() {
    var password= prompt('Enter the password to view resume:');
    if(password === "Bullen2022") {
        window.open("./Bullen Lucy Resume Apr 2019.pdf");
    }
    else {
        alert("Incorrect password!")
    }
};

// create a links bar that turns gray when you run your mouse over it
// and black when your mouse leaves the area

const linksEnter = document.getElementById("links");

linksEnter.addEventListener("mouseenter", linksColorEnter);

function linksColorEnter() {
    const bar = document.querySelectorAll("#links h4");
    for (let i = 0; i < bar.length; i++)
    {
        bar[i].style.color = '#cc99b2';
        // console.log(bar[i]);
    }

    const linkedIn = document.getElementById("linkedIn");
    linkedIn.style.color = "#cc99b2";

    const github = document.getElementById("github");
    github.style.color = "#cc99b2";

    const resume = document.getElementById("resume");
    resume.style.color = "#cc99b2";
};

const linksLeave = document.getElementById("links");

links.addEventListener("mouseleave", linksColorLeave);

function linksColorLeave() {
    const lettering = document.querySelectorAll("#links h4");
    for (let i = 0; i < lettering.length; i++)
    {
        lettering[i].style.color = '#800040';
        // console.log(lettering[i]);
    }

    const linkedIn = document.getElementById("linkedIn");
    linkedIn.style.color = "#800040";

    const github = document.getElementById("github");
    github.style.color = "#800040";

    const resume = document.getElementById("resume");
    resume.style.color = "#800040";
};

//highlight the specific link as black; leaving the other links as grey

const linkedIn = document.getElementById("linkedIn");
linkedIn.addEventListener("mouseenter", function(e){
    e.srcElement.style.color = "#800040";
    // console.log(e);
});
linkedIn.addEventListener("mouseleave", function(e){
    e.srcElement.style.color = "#cc99b2";
    // console.log(e);
});

const github = document.getElementById("github");
github.addEventListener("mouseenter", function(e){
    e.srcElement.style.color = "#800040";
    // console.log(e);
});
github.addEventListener("mouseleave", function(e){
    e.srcElement.style.color = "#cc99b2";
    // console.log(e);
});

//const resume = document.getElementById("resume");
resume.addEventListener("mouseenter", function(e){
    e.srcElement.style.color = "#800040";
    // console.log(e);
});
resume.addEventListener("mouseleave", function(e){
    e.srcElement.style.color = "#cc99b2";
    // console.log(e);
});

//enlargen the links when scrolled over

const paragraphLinks = document.querySelectorAll(".textBlurb a");

for (let i = 0; i < paragraphLinks.length; i++){
    paragraphLinks.item(i).addEventListener("mouseenter", function(e){
            // console.log(e);
            e.srcElement.style.color = "#d24375";
        })
};

for (let i = 0; i < paragraphLinks.length; i++){
    paragraphLinks.item(i).addEventListener("mouseleave", function(e){
            // console.log(e);
            e.srcElement.style.color = "#bf7f9f";
        })
};