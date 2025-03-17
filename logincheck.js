// Function to check if user is logged in
async function checkUserLogin() {
    try {
        const response = await fetch('/api/user');
        const user = await response.json();
        if (user.isLoggedIn) {
            displayCommentBox(user);
        } else {
            displayLoginPrompt();
        }
    } catch (error) {
        console.error('Error checking user login:', error);
        displayLoginPrompt();
    }
}

// Function to display comment box for logged in user
function displayCommentBox(user) {
    submitCommentBox.innerHTML = `
        <img src="${user.avatar}" alt="${user.name}'s avatar" width="50" height="50">
        <strong>${user.name}</strong>
        <textarea id="comment-text" placeholder="Write a comment..."></textarea>
        <button id="submit-comment">Submit</button>
    `;
    document.getElementById('submit-comment').addEventListener('click', submitComment);
}

// Function to display login prompt for non-logged in users
function displayLoginPrompt() {
    submitCommentBox.innerHTML = `
        <p>Please <a href="/login">login</a> to post a comment.</p>
    `;
}

// Check user login status on page load
checkUserLogin();
