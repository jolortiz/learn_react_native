const API_KEY = "73b19491b83909c7e07016f4bb4644f9:2:60667290";
const LIST_NAME = "hardcover-fiction";
const API_STEM = "https://api.nytimes.com/svc/books/v3/lists";

function fetchBooks(list_name = LIST_NAME) {
    let url = `${API_STEM}/${LIST_NAME}?response-format=json&api-key=${API_KEY}`;
    return fetch(url)
        .then(response => response.json())
        .then(responseJson => {
            console.log("response", responseJson.fault);
            return responseJson.results;
        })
        .catch(error => {
            console.error("response_2", error);
        });
}

export default { fetchBooks: fetchBooks };