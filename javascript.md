## JAVASCRIPT NOTES 
### Naming  a variable 
- Use `var` to name a variable (function scoped) 
- Use `let` to name a variable (block scoped)

### Creating a Function 
- Declare the function by writing `function` followed by the function name, a pair of parentheses, and a pair of curly brackets to define the function in. 
- In order to call the function, simply write the function name followed by a pair of parentheses and a semicolon to end the line.
- This should look something like this: 

``` javascript 
function greet () {
	console.log(`Hello World!`) 
}
greet();
```
- You could also use an event lister, like `onclick=”greet()”` in your html file to assign the javascript function to an event, such as a button being clicked!