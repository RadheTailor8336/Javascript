
# 📚 JavaScript Events – Quick Revision

A quick reference to commonly used events in JavaScript and how to handle them. Ideal for beginners and interview prep.

---

## 🔹 What is an Event?

An **event** is an action that occurs in the browser – like a user clicking a button, pressing a key, resizing the window, etc.

---

## 🔸 Common Event Types

| Event         | Description                               |
|---------------|-------------------------------------------|
| `click`       | Fired when an element is clicked          |
| `dblclick`    | Fired when an element is double-clicked   |
| `mouseover`   | Mouse enters the element                  |
| `mouseout`    | Mouse leaves the element                  |
| `mousemove`   | Mouse is moved within the element         |
| `mousedown`   | Mouse button is pressed                   |
| `mouseup`     | Mouse button is released                  |
| `keydown`     | Key is pressed                            |
| `keyup`       | Key is released                           |
| `keypress`    | Key is pressed (deprecated)               |
| `submit`      | A form is submitted                       |
| `change`      | Input value is changed                    |
| `input`       | Fires when the user types in an input     |
| `focus`       | Element receives focus                    |
| `blur`        | Element loses focus                       |
| `load`        | Page or resource is loaded                |
| `resize`      | Window is resized                         |
| `scroll`      | Page or element is scrolled               |

---

## 🔹 Adding an Event Listener

```js
element.addEventListener("click", function () {
  console.log("Element clicked!");
});
```

### ✅ Using Arrow Function

```js
button.addEventListener("click", () => {
  alert("Button clicked!");
});
```

---

## 🔸 Removing an Event Listener

```js
function myFunc() {
  alert("Removed!");
}
button.addEventListener("click", myFunc);
button.removeEventListener("click", myFunc);
```

---

## 🔹 Inline Event (Not Recommended)

```html
<button onclick="sayHi()">Click Me</button>
```

---

## 🔸 Event Object

```js
element.addEventListener("click", (event) => {
  console.log(event);        // Full event info
  console.log(event.target); // Element clicked
});
```

---

## 🔹 `this` vs `event.target`

```js
element.addEventListener("click", function () {
  console.log(this); // Refers to the element
});

element.addEventListener("click", (e) => {
  console.log(e.target); // Same as above, refers to element
});
```

---

## 🔸 Keyboard Event Example

```js
document.addEventListener("keydown", (e) => {
  console.log(`Key pressed: ${e.key}`);
});
```

---

## 🔹 Form Submit Event

```js
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevents page reload
  console.log("Form submitted!");
});
```

---

## 📌 Pro Tip

Use `e.preventDefault()` to stop default behavior (e.g., form submission reload).

---

## 🙌 Happy Learning!

> Save this as your quick go-to reference for JS event handling ✨
