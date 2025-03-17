document.addEventListener('DOMContentLoaded', () => {
    const commentsList = document.getElementById('comments-list');
    const submitCommentBox = document.getElementById('submit-comment-box');

    // Function to fetch comments
    async function fetchComments() {
        try {
            const response = await fetch('/api/comments');
            const comments = await response.json();
            displayComments(comments);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    }

    // Function to display comments
    function displayComments(comments) {
        commentsList.innerHTML = '';
        comments.forEach(comment => {
            const commentDiv = document.createElement('div');
            commentDiv.className = 'comment';
            commentDiv.innerHTML = `
                <img src="${comment.avatar}" alt="${comment.name}'s avatar" width="50" height="50">
                <strong>${comment.name}</strong> <span>${timeAgo(comment.timestamp)}</span>
                <p>${comment.text}</p>
                <button class="reply-button" data-comment-id="${comment.id}">Reply</button>
                <div class="reply-box" id="reply-box-${comment.id}"></div>
            `;
            commentsList.appendChild(commentDiv);
        });
    }

    // Fetch comments on page load
    fetchComments();
});