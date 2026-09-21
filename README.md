# Dev Stack Builder
## A react-based website called Dev Stack Builder assists developers in exploring various technologies and creating the development stack of their objectives.

---

## Technologies Used
- React
- TypeScript
- Vite
- Tailwind CSS
- React Toastify
- JSON


---

## 3 Features
- Explore development technologies.
- Create a custom technology stack.
- Technologies can be dynamically added and removed.

---

1. What is JSX, and why is it used in React?

JavaScript code that resembles HTML can be written using JSX. It simplifies and improves readability when designing React UI.

2. What is the difference between props and state?

Props are used to send data from a parent to a child.
State stores data that can change inside a component.

3. What does the useState hook do, and where did you use it in this project?

Data is updated and stored using useState. I used it to manage the technology data and selected/stack items in this project.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect executes code following a component's rendering. When the page loads, I utilized it to load the technical info from the JSON file.

5. Why does every item in a .map() list need a unique key prop?

React uses a unique key to identify each item in the list. It enables React to effectively update the list.

6. What is conditional rendering?

When something is rendered conditionally, it is only displayed when a specific criteria is met.

Example:
{stack.length === 0 ? (

  <p>Your stack is empty.</p>
) : (

  <StackList />
)}

Here, the empty stack message is shown when there are no items.

7. How do you pass data from parent to child, and child to parent?

Parent → Child: We pass data using props.
Child → Parent: The parent passes a function as a prop, and the child calls that function to send data back.
