# Replicate Splice Function

This project demonstrates how to replicate the JavaScript `splice` function using a custom implementation. The project includes a simple web interface where users can input an array, specify the start index, delete count, and items to add, and see the results of the custom splice operation.

## Files

- `index.html`: The main HTML file that contains the structure of the web page.
- `style.css`: The CSS file that styles the web page.
- `script.js`: The JavaScript file that contains the custom splice function and handles user interactions.

## Usage

1. Open `index.html` in a web browser.
2. Enter the array elements (comma-separated) in the "Array" input field.
3. Enter the start index in the "Start Index" input field.
4. Enter the delete count in the "Delete Count" input field.
5. Enter the items to add (comma-separated) in the "Items to Add" input field.
6. Click the "Apply Splice" button to see the results.

## Example

For example, if you input the following values:
- Array: `1,2,3,4,5,6`
- Start Index: `2`
- Delete Count: `2`
- Items to Add: `10,20`

The results will be:
- Original Array: `[1, 2, 3, 4, 5, 6]`
- Modified Array: `[1, 2, 10, 20, 5, 6]`
- Removed Items: `[3, 4]`
