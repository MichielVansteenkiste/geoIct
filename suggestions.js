$("#searchInput").autocomplete({
    preProcess: (suggestionsResponse) => {
        return suggestionsResponse.SuggestionResult;
    },
    filterMinChars: 3,
    onPick(el, item) {
        alert("User picked " + item.textContent);
    },
});
