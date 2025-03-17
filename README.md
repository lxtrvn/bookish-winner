html and comments.js
you can prob move all from those other .js (not api.js) into conments . 


For this to work, you need to have the following API endpoints:

 **GET /api/comments**: Fetch all comments.
  **GET /api/user**: Check if the user is logged in and get user details.
 **POST /api/comments**: Submit a new comment.
**POST /api/comments/:commentId/replies**: Submit a reply to a comment.

These endpoints should be implemented on your server to handle the requests and return the appropriate data.
  node.ks and expess   is in api.js
