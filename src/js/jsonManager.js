export function loadPage(page) {
    // fetch ist eine Methode zum Abrufen von Ressourcen über das Netzwerk. Sie gibt ein Promise zurück, das eine Response enthält
    fetch(`../html/modulen/${page}.json`)
        // 
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


                // Element sub-text => div
                } else if (content.type === 'sub-text') {
                    element = document.createElement('div');
                    element.className = 'sub-text';
                    element.textContent = content.content;
                }
                
                else if (content.type === 'sub-text-important') {
                    element = document.createElement('div');
                    element.className = 'sub-text-important';
                    element.textContent = content.content;
                }

                // Element sub-container => div
                else if (content.type === 'sub-container') {
                    element = document.createElement('div');
                    element.className = 'sub-container';
                    element.textContent = content.content;
                } 

                // Element sub-container-code => pre + code
                else if (content.type === 'sub-container-code') {
                    element = document.createElement('pre');
                    const codeElement = document.createElement('code');
             
                    codeElement.textContent = content.content.join('\n');
                    element.appendChild(codeElement);
                } 
                // Element image => img 
                else if (content.type === 'image') {
                    element = document.createElement('img');
                    element.src = content.src;
                    element.alt = content.alt;
                    element.className = 'full-width-image';
                }

                // Element sub-layout => div 
                else if (content.type === 'sub-layout') {
                    element = document.createElement('div');
                    element.className = 'sub-layout';
                    element.textContent = content.content;
        
                    // Append sub-content
                    content.subContent.forEach(subContent => {
                        element.appendChild(createElement(subContent));
                    });

                // 
                } else if (content.type === 'HandlungsZiele') {
                        element = handleHandlungsZiele(content); 


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

                // Process HandlungsZiele
                const handleHandlungsZiele = (HandlungsZieleData) => {
                const handlungszielContainer = document.createElement('div');
                handlungszielContainer.className = 'handlungsziel-container';

                const handlungszielTitle = document.createElement('h2');
                handlungszielTitle.className = 'handlungsziel-title';
                handlungszielTitle.textContent = HandlungsZieleData.ziel;
                handlungszielContainer.appendChild(handlungszielTitle);

                const knowledgeList = document.createElement('ul');
                knowledgeList.className = 'knowledge-list';

                HandlungsZieleData.HandlungsnotwendigeKenntnisse.forEach(knowledgeItem => {
                    const listItem = document.createElement('li');
                    listItem.className = 'knowledge-item';
                    listItem.textContent = knowledgeItem;
                    knowledgeList.appendChild(listItem);
                });

                handlungszielContainer.appendChild(knowledgeList);
                return handlungszielContainer;
            };




            // Add main text content
            data.mainTextContent.forEach(content => {
                additionalContentContainer.appendChild(createElement(content));
                console.log("Added element:", content); // Log the added element for debugging
            });

            // Highlight code blocks
            document.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightBlock(block);
            });

        })
        .catch(error => console.error('Error loading page:', error));
}

// Make the function globally accessible
window.loadPage = loadPage;
