// const h2 = document.createElement("h2");
// h2.textContent = "This content added by JavaScript";
// document.querySelector("body").appendChild(h2);

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

// const 