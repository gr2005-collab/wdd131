const temples = [
    {
      name: "Salt Lake Temple",
      location: "Salt Lake City, Utah, USA",
      dedicationDate: "June 16, 2024",
      area: 100000,
      image: "https://churchofjesuschristtemples.org/assets/img/temples/layton-utah-temple/layton-utah-temple-38376.jpg"
      
      
    },
    {
      name: "Auckland New Zealand Temple",
      location: "Auckland, New Zealand",
      dedicationDate: "April 13, 2025",
      area: 120000,
      image: "https://th.bing.com/th/id/OIP.Wr7sTRYQxivUev-FEUP2MAHaHa?rs=1&pid=ImgDetMain"
    },
    {
      name: "London England Temple",
      location: "London, England",
      dedicationDate: "September 7, 1958",
      area: 25000,
      image: "https://th.bing.com/th?id=OLC.eX/07KHyFaSp0w480x360&rs=1&pid=ImgDetMain"
    },
    {
      name: "Sydney Australia Temple",
      location: "Sydney, Australia",
      dedicationDate: "September 20, 1984",
      area: 36000,
      image: "https://th.bing.com/th/id/OIP.A48FfOyLoSIg_9aW4mczrwHaE7?rs=1&pid=ImgDetMain"
    },
    {
      name: "Kinshasa Democratic Republic of Congo Temple",
      location: "Kinshasa, DRC",
      dedicationDate: "September 14, 2019",
      area: 40000,
      image: "https://th.bing.com/th/id/R.c90c0d39886705c8e0e65d0da1f359c5?rik=160EQzQ4p1sNGQ&pid=ImgRaw&r=0"
    },
    {
      name: "Sierra Leone Freetown Temple",
      location: "Freetown, Sierra Leone",
      dedicationDate: "May 25, 2016",
      area: 18000,
      image: "https://a.mktgcdn.com/p/vCC_MifWCEwu2lR453DOgcS9q5q8s9VR8jagYMvFvp8/908x720.jpg"
    },
    {
      name: "Nairobi Kenya Temple",
      location: "Nairobi, Kenya",
      dedicationDate: "November 17, 2019",
      area: 30000,
      image: "https://th.bing.com/th/id/OIP.0U7j_AHfSoJNVxYyiVvDWwHaEK?rs=1&pid=ImgDetMain"
    },
    {
      name: "Lima Peru Temple",
      location: "Lima, Peru",
      dedicationDate: "January 10, 1986",
      area: 30000,
      image: "https://th.bing.com/th/id/OIP.llJDpZFNxKrUY3zBeggYtQHaFj?rs=1&pid=ImgDetMain"
    }
  ];
  
  const templeContainer = document.querySelector("#temple-cards");
  
  function createTempleCard(temple) {
    const templeCard = document.createElement("div");
    templeCard.classList.add("temple-card");
  
    const templeImage = document.createElement("img");
    templeImage.src = temple.image;
    templeImage.alt = `${temple.name} Image`;
    templeImage.loading = "lazy";
  
    const templeName = document.createElement("h3");
    templeName.textContent = temple.name;
  
    const templeLocation = document.createElement("p");
    templeLocation.textContent = `Location: ${temple.location}`;
  
    const templeDate = document.createElement("p");
    templeDate.textContent = `Dedicated: ${temple.dedicationDate}`;
  
    const templeArea = document.createElement("p");
    templeArea.textContent = `Area: ${temple.area} sq ft`;
  
    templeCard.appendChild(templeImage);
    templeCard.appendChild(templeName);
    templeCard.appendChild(templeLocation);
    templeCard.appendChild(templeDate);
    templeCard.appendChild(templeArea);
  
    templeContainer.appendChild(templeCard);
  }
  
  function displayTemples(templesArray) {
    templeContainer.innerHTML = ""; // Clear existing content
    templesArray.forEach(createTempleCard);
  }
  
  // Display all temples by default
  displayTemples(temples);
  
  const navMenu = document.querySelector("#nav-menu");
  
  navMenu.addEventListener("click", (event) => {
    const filterType = event.target.dataset.filter;
  
    let filteredTemples;
    switch (filterType) {
      case "old":
        filteredTemples = temples.filter(temple => new Date(temple.dedicationDate).getFullYear() < 1900);
        break;
      case "new":
        filteredTemples = temples.filter(temple => new Date(temple.dedicationDate).getFullYear() > 2000);
        break;
      case "large":
        filteredTemples = temples.filter(temple => temple.area > 90000);
        break;
      case "small":
        filteredTemples = temples.filter(temple => temple.area < 10000);
        break;
      case "home":
      default:
        filteredTemples = temples;
        break;
    }
  
    displayTemples(filteredTemples);
  });
  
  // Set year and last modified dynamically
  const yearSpan = document.querySelector("#year");
  const lastModifiedSpan = document.querySelector("#lastModified");
  
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
  lastModifiedSpan.textContent = document.lastModified;
  