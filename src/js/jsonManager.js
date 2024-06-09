/* export function loadPage(page) {
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

 */
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

            // Update main title
            document.querySelector('.main-title h2').textContent = data.mainTitle;

            // Clear existing cards, charts, and additional content
            const cardsContainer = document.querySelector('.main-cards');
            const chartsContainer = document.querySelector('.charts');
            const additionalContentContainer = document.querySelector('.main-text-content');
            cardsContainer.innerHTML = '';
            chartsContainer.innerHTML = '';
            additionalContentContainer.innerHTML = '';

            // Update cards
            data.cards.forEach(cardData => {
                const card = document.createElement('div');
                card.className = 'card';
                
                const cardInner = document.createElement('div');
                cardInner.className = 'card-inner';
                
                const cardTitle = document.createElement('h3');
                cardTitle.textContent = cardData.title;
                cardInner.appendChild(cardTitle);

                const cardValue = document.createElement('h1');
                cardValue.textContent = cardData.value;

                card.appendChild(cardInner);
                card.appendChild(cardValue);
                cardsContainer.appendChild(card);
            });

            // Update charts
            data.charts.forEach(chartData => {
                const chartCard = document.createElement('div');
                chartCard.className = 'charts-card';

                const chartTitle = document.createElement('h2');
                chartTitle.className = 'chart-title';
                chartTitle.textContent = chartData.title;

                chartCard.appendChild(chartTitle);
                chartsContainer.appendChild(chartCard);
            });

            // Add additional content
            data.mainTextContent.forEach(content => {
                let element;
                if (content.type === 'text') {
                    element = document.createElement('div');
                    element.className = 'text';
                    element.textContent = content.content;
                } else if (content.type === 'image') {
                    element = document.createElement('img');
                    element.src = content.src;
                    element.alt = content.alt;
                    element.className = 'full-width-image';
                }
                additionalContentContainer.appendChild(element);
                console.log("Added element:", element); // Log the added element for debugging
            });

        })
        .catch(error => console.error('Error loading page:', error));
}

// Make the function globally accessible
window.loadPage = loadPage;
