# Search Filter

In this assignment, you are going to create a search filter, that filters through articles listed in your HTML and highlights the search term.

The goal of this exercise is to use JavaScript events to trigger your code, manipulate the DOM, and manipulate arrays. 

All the needed JavaScript functions are available in the boilerplate. Notice that each function is responsible for a single task and needs to be used together to accomplish the tasks.


## Tasks

You are **not allowed** to change the HTML, other than assigning event listeners on the filter controls.

- Filter Articles when the user searches
- Get the input value directly form the event (**do not** use `document.getElementById()` or similar functions)
- Do not filter the articles if the search term is less than 3 characters
- Highlight the words that matches the terms with the available `highlight()` function
- Display the filtered articles in the DOM
- Reset the articles if the search term is less than 3 characters
- Reset articles and clear search field when you click the `Clear Filter` button

Use the provided JavaScript functions to accomplish the tasks.


# Hints
- Be generous with the `console.log()` and solve one step at a time
- Use [Object.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values) to convert an object to an array
- Be precise when you choose to use `innerText` vs `innerHTML` on a DOM element
- Use [map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) and [filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) on array to create variations of the original articles array

- use [join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) on an array to