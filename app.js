function register(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const name = document.getElementById("nid").value;
    const contacts = document.getElementById("contacts").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log("Name:", name);
    console.log("Contact Number:", contacts);
    console.log("Email:", email);
    console.log("Message:", message);

    fetch("https://47p82bwl19.execute-api.ap-south-1.amazonaws.com/dev/send", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nn: name,
            nc: contacts,
            ne: email,
            nm: message
        })
    })
    .then(response => response.json())  // Parse JSON response
    .then(data => {
        alert(data.body.message)
        // Optionally, handle/display the response here
    })
    .catch(error => {
        
        alert("something went wrong")// Log error
        // Optionally, handle error here
    });
}
