const plants = [
  {
    name: "Aloe Vera",
    type: "succulent",
    description: "A succulent known for its medicinal properties.",
    image:"https://www.niehs.nih.gov/sites/default/files/health/assets/images/aloe_og.jpg"
  },
  {
    name: "Oak Tree",
    type: "tree",
    description: "A large deciduous tree known for strength and longevity.",
    image: "https://treenewal.com/wp-content/uploads/2020/11/oak-tree-care.png",
  },
  {
    name: "Basil",
    type: "herb",
    description: "A fragrant herb used in cooking and herbal remedies.",
    image: "https://i.redd.it/uop4tccwqnq71.jpg",
  },
  {
    name: "Rose",
    type: "flower",
    description: "A popular flowering plant with beautiful blooms.",
    image: "https://cdn.flowersnfruits.com/uploads/product/flowers_n_fruits/OCT2024/1728296889014-Bouquetof150RedRoses.webp",
  },
  {
    name: "Cactus",
    type: "succulent",
    description: "A hardy succulent that stores water in its stems.",
    image: "https://gran.luchito.com/wp-content/uploads/2019/08/Cactus-2.jpg",
  },
  {
    name: "Mint",
    type: "herb",
    description: "A refreshing herb often used in drinks and cooking.",
    image: "https://www.shutterstock.com/image-photo/lavender-peppermint-isolated-on-white-260nw-109830596.jpg",
  },
  {
    name: "Lavender",
    type: "flower",
    description: "A fragrant purple flower known for calming scent.",
    image: "https://www.theluckyseed.com/wp-content/uploads/2023/02/82642-430x430.jpg",
  },
  {
    name: "Maple Tree",
    type: "tree",
    description: "Famous for its beautiful autumn leaves and sweet syrup.",
    image: "https://images.squarespace-cdn.com/content/v1/5cb3ca007a1fbd45aeff89ea/f0a9c6c6-52bf-4bac-b865-bb8dc1fc8e55/nashville-tree-conservation-corps-tree-of-month-red-maple-tn.jpg",
  },
  {
    name: "Echeveria",
    type: "succulent",
    description: "A rosette-shaped succulent loved for its symmetry.",
    image: "https://www.ugaoo.com/cdn/shop/articles/52484cf3d3.jpg?v=1724215879",
  },
  {
    name: "Coriander",
    type: "herb",
    description: "A herb used in many cuisines for fresh flavor.",
    image: "https://seedsnpots.com/wp-content/uploads/2017/10/coriander.jpg",
  }
];

const plantContainer = document.getElementById("plantContainer");
const filterButtons = document.querySelectorAll("#filterButtons button");
const searchInput = document.getElementById("searchInput");

function displayPlants(plantsToDisplay) {
  plantContainer.innerHTML = "";

  if (plantsToDisplay.length === 0) {
    plantContainer.innerHTML = "<p class='no-results'>No plants found.</p>";
    return;
  }

  plantsToDisplay.forEach((plant) => {
    const card = document.createElement("div");
    card.classList.add("plant-card");
    card.innerHTML = `
      <img src="${plant.image}" alt="${plant.name}" loading="lazy" />
      <div class="plant-name">${plant.name}</div>
      <div class="plant-desc">${plant.description}</div>
    `;
    plantContainer.appendChild(card);
  });
}

// Filter plants by category
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    let filteredPlants;
    if (filter === "all") {
      filteredPlants = plants;
    } else {
      filteredPlants = plants.filter((p) => p.type === filter);
    }
    // Also apply search filter if any
    const searchTerm = searchInput.value.toLowerCase();
    filteredPlants = filteredPlants.filter((p) =>
      p.name.toLowerCase().includes(searchTerm)
    );

    displayPlants(filteredPlants);
  });
});

// Search plants by name
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const activeFilter = document.querySelector("#filterButtons button.active").getAttribute("data-filter");

  let filteredPlants;
  if (activeFilter === "all") {
    filteredPlants = plants;
  } else {
    filteredPlants = plants.filter((p) => p.type === activeFilter);
  }

  filteredPlants = filteredPlants.filter((p) =>
    p.name.toLowerCase().includes(searchTerm)
  );

  displayPlants(filteredPlants);
});

// Initial display
displayPlants(plants);
