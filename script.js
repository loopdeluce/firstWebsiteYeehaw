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
        bar[i].style.color = '#D3D3D3';
        // console.log(bar[i]);
    }

    const linkedIn = document.getElementById("linkedIn");
    linkedIn.style.color = "#D3D3D3";

    const github = document.getElementById("github");
    github.style.color = "#D3D3D3";

    const resume = document.getElementById("resume");
    resume.style.color = "#D3D3D3";
};

const linksLeave = document.getElementById("links");

links.addEventListener("mouseleave", linksColorLeave);

function linksColorLeave() {
    const lettering = document.querySelectorAll("#links h4");
    for (let i = 0; i < lettering.length; i++)
    {
        lettering[i].style.color = '#000';
        // console.log(lettering[i]);
    }

    const linkedIn = document.getElementById("linkedIn");
    linkedIn.style.color = "#000";

    const github = document.getElementById("github");
    github.style.color = "#000";

    const resume = document.getElementById("resume");
    resume.style.color = "#000";
};

//highlight the specific link as black; leaving the other links as grey

const linkedIn = document.getElementById("linkedIn");
linkedIn.addEventListener("mouseenter", function(e){
    e.srcElement.style.color = "#000";
    // console.log(e);
});
linkedIn.addEventListener("mouseleave", function(e){
    e.srcElement.style.color = "#D3D3D3";
    // console.log(e);
});

const github = document.getElementById("github");
github.addEventListener("mouseenter", function(e){
    e.srcElement.style.color = "#000";
    // console.log(e);
});
github.addEventListener("mouseleave", function(e){
    e.srcElement.style.color = "#D3D3D3";
    // console.log(e);
});

//const resume = document.getElementById("resume");
resume.addEventListener("mouseenter", function(e){
    e.srcElement.style.color = "#000";
    // console.log(e);
});
resume.addEventListener("mouseleave", function(e){
    e.srcElement.style.color = "#D3D3D3";
    // console.log(e);
});
