// Get the category from the URL
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

// Update the page title dynamically
document.getElementById('category-title').innerText = category;

// Define destinations for Luzon
const destinations = {
    Beach: [
        { name: "Boracay", img: "boracay.jpg", guide: "Boracay Travel Guide" },
        { name: "Pagudpud", img: "pagudpud.jpg", guide: "Pagudpud Travel Guide" }
    ],
    Hiking: [
        { name: "Mount Pulag", img: "mt-pulag.jpg", guide: "Mount Pulag Travel Guide" },
        { name: "Mount Ulap", img: "mt-ulap.jpg", guide: "Mount Ulap Travel Guide" }
    ],
    Falls: [
        { name: "Pagsanjan Falls", img: "pagsanjan.jpg", guide: "Pagsanjan Falls Travel Guide" },
        { name: "Maria Cristina Falls", img: "maria-cristina.jpg", guide: "Maria Cristina Falls Travel Guide" }
    ],
    Historical: [
        { name: "Intramuros", img: "intramuros.jpg", guide: "Intramuros Travel Guide" },
        { name: "Vigan", img: "vigan.jpg", guide: "Vigan Travel Guide" }
    ]
};

// Generate content dynamically
const destinationList = document.getElementById('destination-list');
if (destinations[category]) {
    destinations[category].forEach((place) => {
        const item = document.createElement('div');
        item.className = 'destination-item';
        item.innerHTML = `
            <img src="${place.img}" alt="${place.name}">
            <h3>${place.name}</h3>
            <button onclick="alert('${place.guide}')">Travel Guide</button>
        `;
        destinationList.appendChild(item);
    });
} else {
    destinationList.innerHTML = "<p>No destinations available for this category.</p>";
}