document.getElementById('fetchData').addEventListener('click', fetchData);

function fetchData() {
    const dataDiv = document.getElementById('data');
    dataDiv.innerHTML = 'Loading...';

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            dataDiv.innerHTML = `<img src="${data.message}" alt="Random Dog Image">`;
        })
        .catch(error => {
            dataDiv.innerHTML = `Error: ${error.message}`;
        });
}
