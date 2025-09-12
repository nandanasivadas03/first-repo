// Predefined recommendations
const recommendations = [
    { title: "Inception", category: "Sci-Fi", reason: "Mind-bending thriller with amazing visuals." },
    { title: "Stranger Things", category: "Thriller", reason: "Great mix of nostalgia, mystery, and adventure." },
    { title: "Parasite", category: "Drama", reason: "Oscar-winning masterpiece with social commentary." },
    { title: "The Dark Knight", category: "Action", reason: "Legendary superhero film with a brilliant villain." },
    { title: "Interstellar", category: "Sci-Fi", reason: "Explores space, time, and love beautifully." }
];

const surpriseBtn = document.querySelector('.btn-primary');  // Surprise Me button

surpriseBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * recommendations.length);
    const rec = recommendations[randomIndex];

    alert(`🎬 ${rec.title}\nCategory: ${rec.category}\nWhy watch? ${rec.reason}`);
});


const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();  // Prevent page reload

    // Get values from inputs
    const title = form.querySelector('input[placeholder="Movie, Series, or Drama Title"]').value.trim();
    const category = form.querySelector('input[placeholder="Category (e.g., Sci-Fi, Thriller, Comedy)"]').value.trim();
    const reason = form.querySelector('textarea').value.trim();

    if (title && category) {
        recommendations.push({ title, category, reason: reason || "No reason provided" });
        alert(`✅ Your recommendation "${title}" has been added!`);
        
        // Clear form
        form.reset();
    } else {
        alert("Please enter at least the title and category.");
    }
});
const displayDiv = document.getElementById('recommendation-display');

surpriseBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * recommendations.length);
    const rec = recommendations[randomIndex];

    displayDiv.innerHTML = `
        <div class="card p-3 mt-3">
            <h5>${rec.title}</h5>
            <p><strong>Category:</strong> ${rec.category}</p>
            <p>${rec.reason}</p>
        </div>
    `;
});
