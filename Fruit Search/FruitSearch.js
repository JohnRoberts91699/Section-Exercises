const input = document.querySelector('#fruit');
    const suggestionsContainer = document.getElementById('suggestions');

    const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

    function search(query) {
        query = query.toLowerCase();
        const results = fruit.filter(fruitName => fruitName.toLowerCase().includes(query));
        return results;
    }

    function searchHandler(e) {
        const inputVal = e.target.value;
        const results = search(inputVal);
        showSuggestions(results, inputVal);
    }

    function showSuggestions(results) {
        suggestionsContainer.innerHTML = ''; // Clear previous suggestions
        if (results.length > 0) {
            results.forEach(result => {
                const listItem = document.createElement('li');
                listItem.textContent = result;
                listItem.classList.add('dropdown-item');
                suggestionsContainer.appendChild(listItem);
            });
            suggestionsContainer.style.display = 'block'; // Display the suggestions
        } else {
            suggestionsContainer.style.display = 'none'; // Hide the suggestions if there are none
        }
    }

    function highlightSuggestion(e) {
        const selectedSuggestion = e.target;
        if (selectedSuggestion.classList.contains('dropdown-item')) {
            // Remove highlight from all suggestions
            suggestionsContainer.querySelectorAll('.dropdown-item').forEach(suggestion => {
                suggestion.classList.remove('highlight');
            });
            // Add highlight to the selected suggestion
            selectedSuggestion.classList.add('highlight');
        }
    }

    function useSuggestion(e) {
        const clickedItem = e.target.closest('.dropdown-item');
        if(clickedItem) {
            const selectedText = clickedItem.textContent;
            input.value = selectedText;
            suggestionsContainer.style.display = 'none';
        }
    }

    input.addEventListener('input', searchHandler);
    input.addEventListener('blur', () => suggestionsContainer.style.display = 'none'); // Hide suggestions on input blur
    suggestionsContainer.addEventListener('mouseover', highlightSuggestion);
    suggestionsContainer.addEventListener('mousedown', useSuggestion);