# My-Assignment-4

## 1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`?

**Answer:**

- Only one element can be accessed with `getElementById` with id use. and If the same class name is added to multiple elements, then `getElementByClassName` can be accessed on all elements with the same class name;

- `querySelector` is used to access the first matching element with a Css selector. and `querySelectorAll` used to accessed the all the matching element with Css Selector.

- `getElementClassName` give a `HtmlCollection`
- `querySelectorAll` give a `NodeList`.


## 2. How do you `create` and `insert` a new `element` into the `DOM`?

**Answer:**

- First, we `create` an element using `createElement()` and then `insert` it into the `dom` using `appendChild`.

## 3. What is `Event` `Bubbling`? And how does it `work`?

**Answer:**

- `Event Bubbling` is a process where events `start` from `child` elements and move up to `parent elements`.

## 4. What is Event `Delegation` in `JavaScript`? Why is it `useful`?

**Answer:**

- Event `Delegation` is the process of `handling` events of `child` elements by using an `event listener` on the `parent element`, which improves performance and is useful for `dynamic elements`.

## 5. What is the difference between preventDefault() and stopPropagation() methods?

**Answer:**

- `preventDefault()` use to Element of default browser action can run stopped.
`stopPropagation()` is used to stop bubbles and captures.

- The main difference is that using `preventDefault()` prevents the default action and using `stopPropagation()` stops the event from going to the `parent element`.
