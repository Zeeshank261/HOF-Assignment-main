/*
6. LinkedIn Profile URL Validator.
As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are
formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with https://
www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and
end with a letter or digit. The length of the profile ID should be between 5 and 30 characters.
The program should use a regular expression to match valid LinkedIn profile URLs, and should not match URLs
that do not follow this format or contain invalid characters. The program should provide clear output messages
indicating whether each input is a valid LinkedIn profile URL or not.
*/

// combination of wrong and correct linkedin urls
const linkedinUrls = [
    "https://www.linkedin.com/in/username",                                                         // correct
    "htps://www.linkedin.com/in/username123",                                                       // wrong
    "https://www.linkein.com/in/username_123",                                                      // wrong
    "https://www.linkedin.com/in/username_123roweijrldkfjdjsdhfkldsjlfksdjflksjdlfkjdslkfjsdlkfj",  // wrong
    "https://www.linkedin.com/in/username-123",                                                     // correct
    "https://www.linkedin.com/in/username_",                                                        // wrong
    
]

const urlRegex = /^(https:\/\/www.linkedin.com\/in\/)[a-zA-Z0-9_-]{3,29}[a-zA-Z0-9]{1}$/

const matchedUrls = linkedinUrls.filter((url) => urlRegex.test(url))

console.log(matchedUrls)


