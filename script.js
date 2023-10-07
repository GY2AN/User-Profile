let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
  };
  
let profileContainerElement = document.getElementById("profileContainer");
profileContainerElement.classList.add("d-flex", "flex-column", "justify-content-center", "text-center");
let imageContainerElement = document.getElementById("imgContainer");

profileContainerElement.style.backgroundColor = "violet";
profileContainerElement.style.height = "100vh";

let imageElement = document.createElement("img");
imageElement.setAttribute("src", profileDetails.imgSrc);
imageElement.classList.add("profile-img");
imageContainerElement.appendChild(imageElement);

let nameElement = document.createElement("h1");
nameElement.textContent = profileDetails.name;
nameElement.classList.add("profile-name");
imageContainerElement.appendChild(nameElement);

let ageElement = document.createElement("p");
ageElement.textContent = profileDetails.age;
ageElement.classList.add = ("age");
imageContainerElement.appendChild(ageElement);





