const promiseOne = new Promise(function(resolve, reject) {
    // Async task start
    // Example: DB call, cryptography, or network request
    setTimeout(function() {
        console.log('Async task is complete'); // Simulating async task complete
        resolve(); // Tells that promise is fulfilled
    }, 1000);
});

promiseOne.then(function() {
    console.log("Promise consumed"); // Will run after promiseOne is resolved
});


// Promise 2 — directly used without storing in variable
new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async Task 2"); // Prints when async task 2 completes
        resolve(); // Resolves the promise
    }, 1000);
}).then(function() {
    console.log("Async 2 resolved"); // Will run after the above promise is resolved
});


// Promise 3 — resolved with an object
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({ username: "Chai", email: "chai@example.com" }); // Sending user object
    }, 1000);
});

promiseThree.then(function(user) {
    console.log(user); // Will log the user object after 1 second
});


// Promise 4 — with error handling using .catch and .finally
const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true; // Change to false to simulate successful response
        if (!error) {
            resolve({ username: "hitesh", password: "123" }); // Promise resolved with user data
        } else {
            reject("Error: Something went wrong"); // Promise rejected with error message
        }
    }, 2000);
});

promiseFour
    .then((user) => {
        console.log(user); // Logs user object if resolved
        return user.username; // Passes username to next .then
    })
    .then((username) => {
        console.log(username); // Logs the username
    })
    .catch(function(error) {
        console.log(error); // Logs error if promise is rejected
    })
    .finally(() => console.log("The promise is either resolved or rejected")); // Always runs


// Promise 5 — consumed using async/await
const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true; // Change to false to test success case
        if (!error) {
            resolve({ username: "javascript", password: "123" }); // Resolved with user object
        } else {
            reject("Error: JS went wrong"); // Rejected with error
        }
    }, 1000);
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive; // Waits for promiseFive to resolve or reject
        console.log(response); // Logs resolved value
    } catch (error) {
        console.log(error); // Logs any error if rejected
    }
}

consumePromiseFive(); // Calling the async function


// Fetching data from external API using fetch() — same as Promise
fetch('https://jsonplaceholder.typicode.com/users') // Starts HTTP GET request
    .then((response) => {
        return response.json(); // Converts response to JSON
    })
    .then((data) => {
        console.log(data); // Logs user data from API
    })
    .catch((error) => console.log("error")); // Catches and logs any error during fetch
