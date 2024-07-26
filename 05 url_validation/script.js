/*
5. URL validation.
Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
Print a message indicating if the input matches the conditions or not.
*/

const urls = [
    'https://w8w$.google.com',
    'http://www.google.com',
    'https://w8wgooglecom/',
    'http://w$w.google.com/',
    'https://www.go8gle.com/search',
    'http://www.8oogle.com/search',
    'https://www.google.com/search?q=javascript',
    'http://www.google.com/search?q=javascript',
];

const urlRegex = /^(http|https):\/\/[\w!@#$%^&*_+]{1,3}\.[a-zA-Z]+/

const matchedUrls = urls.filter((url) => urlRegex.test(url));

console.log(matchedUrls )

