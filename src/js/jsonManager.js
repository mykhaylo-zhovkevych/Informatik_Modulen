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

            // Clear existing content
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
                chartTitle.className = 'verzeichnis';
                chartTitle.textContent = chartData.title;

                chartCard.appendChild(chartTitle);

                 // Add links for each item in the verzeichnis
                 const list = document.createElement('ul');
                 chartData.items.forEach(item => {
                     const listItem = document.createElement('li');
                     const link = document.createElement('a');
                     link.href = `#${item.id}`;
                     link.textContent = item.label;
                     listItem.appendChild(link);
                     list.appendChild(listItem);
                 });
                chartCard.appendChild(list);

                chartsContainer.appendChild(chartCard);
            });

            // Function to create elements
            const createElement = (content) => {
                let element;
                if (content.type === 'text') {
                    element = document.createElement('div');
                    element.className = 'text';
                    if (content.id) {
                        element.id = content.id;  // Set the ID for the section
                    }
                    element.textContent = content.content;

                // Append sub-content if any
                if (content.subContent) {
                    content.subContent.forEach(subContent => {
                        element.appendChild(createElement(subContent));
                    });
                }

                } else if (content.type === 'sub-text') {
                    element = document.createElement('div');
                    element.className = 'sub-text';
                    element.textContent = content.content;
                } 
                
                else if (content.type === 'sub-container') {
                    element = document.createElement('div');
                    element.className = 'sub-container';
                    element.textContent = content.content;
                } 

                else if (content.type === 'sub-container-code') {
                    element = document.createElement('div');
                    element.className = 'sub-container-code';
                    element.textContent = content.content;
                } 

                else if (content.type === 'image') {
                    element = document.createElement('img');
                    element.src = content.src;
                    element.alt = content.alt;
                    element.className = 'full-width-image';
                }
                else if (content.type === 'sub-layout') {
                    element = document.createElement('div');
                    element.className = 'sub-layout';
                    element.textContent = content.content;
        

                    // Append sub-content
                    content.subContent.forEach(subContent => {
                        element.appendChild(createElement(subContent));
                    });
                } else if (content.type === 'chart') {
                    element = document.createElement('div');
                    element.className = 'charts-card';

                    const chartTitle = document.createElement('h2');
                    chartTitle.className = 'chart-title';
                    chartTitle.textContent = content.title;

                    element.appendChild(chartTitle);
                }
                return element;
            };

            // Add main text content
            data.mainTextContent.forEach(content => {
                additionalContentContainer.appendChild(createElement(content));
                console.log("Added element:", content); // Log the added element for debugging
            });

            // Add additional charts if any
            /* if (data.additionalCharts) {
                data.additionalCharts.forEach(chartData => {
                    chartsContainer.appendChild(createElement({ type: 'chart', title: chartData.title }));
                });
            } */

        })
        .catch(error => console.error('Error loading page:', error));
}

// Make the function globally accessible
window.loadPage = loadPage;
