// Function to submit a comment
async function submitComment() {
    const commentText = document.getElementById('comment-text').value;
    if (!commentText) return;

    try {
        const response = await fetch('/api/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: commentText })
        });
        const comment = await response.json();
        fetchComments();
        document.getElementById('comment-text').value = '';
    } catch (error) {
        console.error('Error submitting comment:', error);
    }
}