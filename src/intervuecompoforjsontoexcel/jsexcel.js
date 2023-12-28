//This is the given Sample data , Just for understanding urposes the data is not being safely formatted .If needed we would place the data on a separate file and destructure it .
import React from 'react';
import * as XLSX from 'xlsx/xlsx.mjs';
const JSExcel = () => {
    const data = {
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
      };
      
    const generateExcelFromBookstore = (data) => {
        const workbook = XLSX.utils.book_new();
      
        // Create details sheet data as an array of objects
        const detailsSheetData = [
          {
            'Property': 'Bookstore Name',
            'Value': data.name || 'N/A'
          },
          {
            'Property': 'Location',
            'Value': data.location || 'N/A'
          },
          {
            'Property': 'Is Open',
            'Value': data.isOpen ? 'Yes' : 'No'
          },
          {
            'Property': 'Number of Sections',
            'Value': data.numberOfSections || 'N/A'
          },
          {
            'Property': 'Popular Genres',
            'Value': Array.isArray(data.popularGenres) ? data.popularGenres.join(', ') : 'N/A'
          }
        ];
      
        const detailsSheet = XLSX.utils.json_to_sheet(detailsSheetData);
        XLSX.utils.book_append_sheet(workbook, detailsSheet, 'Bookstore Details');
      
        if (Array.isArray(data.sections)) {
          data.sections.forEach((section, index) => {
            const sectionName = section.sectionName || `Unknown Section ${index + 1}`;
            const books = Array.isArray(section.books) ? section.books : [];
      
            const sectionSheetData = [
              ['Title', 'Author', 'Price', 'Is Available'],
              ...books.map(book => [
                book.title || 'N/A',
                book.author || 'N/A',
                book.price || 'N/A',
                book.isAvailable !== undefined ? (book.isAvailable ? 'Yes' : 'No') : 'N/A'
              ])
            ];
      
            const sectionSheet = XLSX.utils.aoa_to_sheet(sectionSheetData);
            XLSX.utils.book_append_sheet(workbook, sectionSheet, `Section ${index + 1} - ${sectionName}`);
          });
        } else {
          console.error('Sections data is not in the expected format.');
        }
      
        XLSX.writeFile(workbook, 'TheReadingNook.xlsx');
        console.log('Excel file generated successfully!');
      };
      
      return (
        <div className="bg-gradient-to-r from-blue-500 to from-blue-300 w-full h-screen">
        <div className="flex flex-col items-center p-20">
        <h1 className="text-5xl text-center m-2">Depak's Json-To-Excel Convertor</h1>
          <button className="p-4 m-2 bg-gradient-to-r from-yellow-500 to from-yellow-300 :hover bg-gradient-to-r from-yellow-300 to from-yellow-500" onClick={generateExcelFromBookstore}>Generate Excel</button>
        </div>
        </div>
      )
}


export default JSExcel