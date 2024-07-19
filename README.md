# Google Books API Search Engine

## Outline

This project will require you to use React and Asynchronous programming.
The aim is for the user to be able to search for a book inside the Google Books database and to be able to get more details about a certain title.

## MVP

Create a page that allows users to search for books
Page should include the following:

- Header section introducing the page
- Form containing a text input and a submit / search button

- A grid of books
  Instructions:

- When the submit button is clicked you need the request books from the Google books API using the input value as your query string
- The books that you receive should be rendered in the books grid.
- Each book in the grid should have an image, author, title and description
- The grid should be responsive on different screen sizes
- You should use async / await for your request code, NOT .then
  - .then is okay in a useEffect though
- You **may** want to seperate your request code from component code

Styling (required):

This application should look good, take some time to pick a palette and plan out your design - this will also help with splitting the app into React components. You can use tools like Figma or wireframe pro to plan what your application is going to look like.

Use modules for styling, don't forget about other SCSS features, like a separate file for palette or variables.

Application Design (required):

- Remember that some JavaScript logic, like functions that fetch data, can be moved to their own .js files
- Always use iterators over loops
- Always parametrize and abstract large pieces of duplicate code.

## Bonus (optional, but highly recommended):

- Give feedback to the user when no book results can be found for the query.
- When a user clicks a book in the grid, a modal should appear with more book information, think about release, publish date, country, languages, etc.
- Hard mode: Pagination

## Hints:

- The data you get back won't always be uniform
- It will be easier if your presentation components are very dumb, and don't have to make decisions

## Useful Resources:

- [Google Books API no Auth link](https://developers.google.com/books/docs/v1/using#WorkingVolumes)
- [Using Async Await](https://dmitripavlutin.com/javascript-fetch-async-await/)
- [Using Postman to Test APIs](https://www.blazemeter.com/blog/how-use-postman-test-apis)
- [Download Postman](https://www.postman.com/downloads/)
