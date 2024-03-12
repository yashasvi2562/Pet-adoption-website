let animals = {
  data: [
    {
      animalBreed: "Retriever",
      gender: "Male",
      category: "Dog",
      image: "dog1.jpeg",
    },
    {
      animalBreed: "Persian Cat",
      gender: "Female",
      category: "Cat",
      image: "catbreed1.jpeg",
    },
    {
      animalBreed: "Husky",
      gender: "Male",
      category: "Birds",
      image: "https://cdn.britannica.com/84/232784-050-1769B477/Siberian-Husky-dog.jpg",
    },
    {
      animalBreed: "Indies",
      gender: "Female",
      category: "Dog",
      image: "dog2.jpeg",
    },
    {
      animalBreed: "Nebelung",
      gender: "Male",
      category: "Cat",
      image: "catbreed2.jpeg",
    },
    {
      animalBreed: "Golden-Noodle",
      gender: "Male",
      category: "Dog",
      image: "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445",
    },
    {
      animalBreed: "Pug",
      gender: "Male",
      category: "Dog",
      image: "dog3.jpeg",
    },
    {
      animalBreed: "Orange-Cat",
      gender: "Female",
      category: "Cat",
      image: "catbreed3.jpeg",
    },
  ],
};

for (let i of animals.data) {
  
  let card = document.createElement("div");
  
  card.classList.add("card", i.category.toLowerCase(), "hide");
  
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
 
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  // Container
  let container = document.createElement("div");
  container.classList.add("container");
  // Animal breed
  let breed = document.createElement("h5");
  breed.classList.add("animal-breed");
  breed.innerText = i.animalBreed.toUpperCase();
  container.appendChild(breed);
  // Gender
  let gender = document.createElement("h6");
  gender.innerText = "Gender: " + i.gender;
  container.appendChild(gender);

  card.appendChild(container);
  document.getElementById("animals").appendChild(card);
}


function filterAnimal(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  // Select all cards
  let elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      
      if (element.classList.contains(value.toLowerCase())) {
        
        element.classList.remove("hide");
      } else {
        
        element.classList.add("hide");
      }
    }
  });
}

// Search button click
document.getElementById("search").addEventListener("click", () => {
  
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".animal-breed");
  let cards = document.querySelectorAll(".card");

  
  elements.forEach((element, index) => {
    
    if (element.innerText.includes(searchInput.toUpperCase())) {
      
      cards[index].classList.remove("hide");
    } else {
    
      cards[index].classList.add("hide");
    }
  });
});

// Initially display all animals
window.onload = () => {
  filterAnimal("all");
};