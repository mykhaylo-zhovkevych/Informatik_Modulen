export function loadPage(page) {
    fetch(`../html/modulen/${page}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.title = data.title;
            const contentDiv = document.getElementById('content');
            contentDiv.innerHTML = ''; // Clear previous content

            data.elements.forEach(element => {
                const el = document.createElement(element.tag);
                if (element.content) el.innerHTML = element.content;
                if (element.src) el.src = element.src;
                if (element.alt) el.alt = element.alt;
                if (element.id) el.id = element.id;
                if (element.class) el.className = element.class;
                contentDiv.appendChild(el);
            });
        })
        .catch(error => console.error('Error loading page:', error));
}

// Make the function globally accessible
window.loadPage = loadPage;

