let nameInput        = document.getElementById('comments__name-input');
let commentInput     = document.getElementById('comment-input');
let commentContainer = document.getElementById('comment-container');
let submitButton     = document.getElementById('add-comment');



// create comment element
function displayComment(comment){

    //create comment div
    let commentDiv = document.createElement('div');
    commentDiv.classList.add('comments__content');

    // create avatar and append it to comment div
    let commentImg = document.createElement('img');
    commentImg.classList.add('comments__avatar');
    commentImg.setAttribute('src', './assets/images/avatars/1.jpg')
    commentDiv.appendChild(commentImg);

    // create text container div and append it to comment div
    let innerDiv = document.createElement('div')
    innerDiv.classList.add('comments__inner-container')
    commentDiv.appendChild(innerDiv)

    // create commentText div and append it to commentDiv
    let commentText = document.createElement('div');
    commentText.classList.add('comments__text');
    innerDiv.appendChild(commentText);

    //create meta date div and append it to commentDiv
    let commentMeta = document.createElement('div');
    commentMeta.classList.add('comments__meta');
    commentText.appendChild(commentMeta);

    // create name span and append it to comment meta div 
    let commentName = document.createElement('span');
    commentName.classList.add('comments__name');
    commentName.innerText = comment.name;
    commentMeta.appendChild(commentName);

    // create date span and append it to meta div
    let commentDate = document.createElement('span');
    commentDate.classList.add('comments__date');
    commentDate.innerText = comment.date;
    commentMeta.appendChild(commentDate);

    // create comment body div and append it to innerDiv
    let commentBody = document.createElement('div');
    commentBody.classList.add('comments__text');
    innerDiv.appendChild(commentBody);

    // create comment text para and append it to comment Body 
    let commentP = document.createElement('p');
    commentP.classList.add('comments__p');
    commentP.innerText = comment.comment;
    commentBody.appendChild(commentP);
    
    // append the newly created comment div to the comments container
    commentContainer.appendChild(commentDiv)
}

// Render default comments to the screen

// Create a comment object using the values from the form inputs
function makeCommentObject(){
    let comment     = {}
    comment.name    = nameInput.value
    comment.comment = commentInput.value
    return comment
}

// Clear the comments from the screen, create a new comment and add it to the array, 
function submitComment(){
    commentContainer.innerHTML = '';
    commentsArray.unshift(makeCommentObject())
    nameInput.value = ''
    commentInput.value = '';
    commentsArray.forEach(c => displayComment(c))
}

// Add event listener to button
submitButton.addEventListener('click', e => {
    e.preventDefault()
    submitComment()
})

// declare a variable to hold the comments returned from axios GET request
let commentsArray; 

// make axios GET request
axios.get(`${_URL}comments?api_key=${API_KEY}`)
    .then(res => {
        commentsArray = res.data 
        console.log(commentsArray)
        commentsArray.forEach(c => displayComment(c))
    })
    .catch(err => console.log(err))
