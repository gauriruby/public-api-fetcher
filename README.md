
# Public API Fetcher

## Overview

This project demonstrates how to fetch data from a public API using JavaScript Promises. The example uses the Dog API to fetch and display random dog images. The implementation includes basic error handling and dynamic content updating on the webpage.

## Features

- Fetches random dog images from the Dog API.
- Displays the fetched image on the webpage.
- Shows loading messages while fetching data.
- Handles and displays errors if something goes wrong during the fetch operation.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/MohdAahil01/Public-api-fetcher.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd Public-api-fetcher
   ```

3. **Open the `index.html` File:**

   Open `index.html` in your web browser.

## Project Structure

- `index.html` - Contains the HTML structure with a button to fetch data and a div to display results.
- `fetch-data.js` - Implements the JavaScript logic for fetching data from the API, processing the response, and handling errors.

## How It Works

1. **HTML Setup:**
   - A button triggers the data fetch.
   - A div is used to display the fetched data or error messages.

2. **JavaScript Implementation:**
   - Uses the `fetch` API to request data from the Dog API.
   - Handles the response and updates the DOM.
   - Implements error handling to manage network issues or invalid responses.

## Example

Click the "Fetch Data" button to see a random dog image. If the fetch operation is successful, the image will be displayed. If there is an error, an error message will be shown instead.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Dog API](https://dog.ceo/dog-api) for providing random dog images.

