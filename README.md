### Depak's Json-To-Excel Convertor
This project is a simple utility to convert JSON data representing a bookstore into an Excel file.

### JSON Data Structure
The JSON structure used for this utility should follow this format:

``` {
  "name": "The Reading Nook",
  "location": "123 Book St, Bibliopolis",
  "isOpen": true,
  "numberOfSections": 2,
  "contact": null,
  "popularGenres": ["Fiction", "Mystery", "Sci-Fi", "Non-Fiction"],
  "sections": [
    {
      "sectionName": "Section 1",
      "books": [
        {
          "title": "Journey to the Unknown",
          "author": "Alice Wonder",
          "price": 12.99,
          "isAvailable": true
        },
        {
          "title": "Mystery of the Ancient Map",
          "author": "Clive Cussler",
          "price": 15.50,
          "isAvailable": false
        }
      ]
    },
    {
      "sectionName": "Section 2",
      "books": [
        {
          "title": "The Reality of Myths",
          "author": "Helen Troy",
          "price": 18.25,
          "isAvailable": true
        }
      ]
    }
  ]
} ```

### Getting Started
* Ensure Node.js is installed on your machine.
* Clone the repository or download the project files.
* Install dependencies using npm install.
* Modify the JSON data in JSExcel.js to your desired bookstore data.
* Run the application using npm start.

### Usage
* Open the terminal in the project directory.
* Run the command npm start.
* Click the "Generate Excel" button to create the Excel file based on the provided JSON data.
Output

### The generated Excel file (TheReadingNook.xlsx) will contain sheets with details about the bookstore and its sections along with book information.

Feel free to modify the code to suit your specific JSON structure or requirements!

You can add more details or specific instructions based on your project's needs. This README.md provides a starting point for users or contributors to understand and use your JSON-to-Excel conversion utility.
