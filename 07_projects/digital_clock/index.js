// HTML element jisme time display hoga, usko select kar rahe hain
const clock = document.getElementById('clock');

// Alternative method (wrong in this case):
// document.querySelector('clock')  // ❌ Incorrect because 'clock' is not a tag, use '.clock' or '#clock' if using querySelector

// Har 1 second (1000ms) mein ye function chalega
setInterval(function() {
    // Naya Date object bana rahe hain, jo current date & time deta hai
    let date = new Date();

    // Current time ko console par print kar rahe hain (for debugging)
    console.log(date.toLocaleTimeString());

    // HTML mein clock element ke andar current time show kar rahe hain
    clock.innerHTML = date.toLocaleTimeString();

}, 1000); // 1000 milliseconds = 1 second
