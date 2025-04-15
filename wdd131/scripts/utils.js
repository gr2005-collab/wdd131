// Example array of temple objects
const temples = [
    {
        name: "Salt Lake Temple",
        location: "Salt Lake City, Utah",
        dedicationDate: "1893-04-06",
        area: 106000,
        image: "https://example.com/salt-lake-temple.jpg"
    },
    {
        name: "Palmyra New York Temple",
        location: "Palmyra, New York",
        dedicationDate: "2000-04-06",
        area: 10600,
        image: "https://example.com/palmyra-temple.jpg"
    },
    // More temple objects...
];

// Render all temples on the Home page
renderAllTemples(temples);

// Filter temples based on the "Old" category (built before 1900)
const oldTemples = filterTemplesByYear(temples, 'old');
renderAllTemples(oldTemples);

// Filter temples based on the "New" category (built after 2000)
const newTemples = filterTemplesByYear(temples, 'new');
renderAllTemples(newTemples);

// Filter temples based on size (larger than 90,000 sq ft)
const largeTemples = filterTemplesBySize(temples, 'large');
renderAllTemples(largeTemples);

// Filter temples based on size (smaller than 10,000 sq ft)
const smallTemples = filterTemplesBySize(temples, 'small');
renderAllTemples(smallTemples);
