let nameInput        = document.getElementById('comments__name-input');
let commentInput     = document.getElementById('comment-input');
let commentContainer = document.getElementById('comment-container');
let submitButton     = document.getElementById('add-comment');



/* displayComment function creates an HTML comment component */
function displayComment(comment){

    /* displayComment function: create comment div */
    let commentDiv = document.createElement('div');
    commentDiv.classList.add('comments__content');

    /* displayComment function: create avatar and append it to comment div */
    let commentImg = document.createElement('img');
    commentImg.classList.add('comments__avatar');
    commentImg.setAttribute('src', './assets/images/avatars/1.jpg')
    commentDiv.appendChild(commentImg);

    /* displayComment function: create text container div and append it to comment div */
    let innerDiv = document.createElement('div')
    innerDiv.classList.add('comments__inner-container')
    commentDiv.appendChild(innerDiv)

    /* displayComment function: create commentText div and append it to commentDiv */
    let commentText = document.createElement('div');
    commentText.classList.add('comments__text');
    innerDiv.appendChild(commentText);

    /* displayComment function: create meta date div and append it to commentDiv */
    let commentMeta = document.createElement('div');
    commentMeta.classList.add('comments__meta');
    commentText.appendChild(commentMeta);

    /* displayComment function: create name span and append it to comment meta div */
    let commentName = document.createElement('span');
    commentName.classList.add('comments__name');
    commentName.innerText = comment.name;
    commentMeta.appendChild(commentName);

    /* displayComment function: create date span and append it to meta div */
    let date = new Date(comment.timestamp)

    let commentDate = document.createElement('span');
    commentDate.classList.add('comments__date');
    commentDate.innerText = `${date.getMonth()}/${date.getDate()}/${date.getYear()} at ${date.getHours()}:${date.getMinutes()}`
    commentMeta.appendChild(commentDate);

    /* displayComment function: create comment body div and append it to innerDiv */
    let commentBody = document.createElement('div');
    commentBody.classList.add('comments__text');
    innerDiv.appendChild(commentBody);

    /* displayComment function: create comment text para and append it to comment Body */
    let commentP = document.createElement('p');
    commentP.classList.add('comments__p');
    commentP.innerText = comment.comment;
    commentBody.appendChild(commentP);
    
    /* displayComment function: append the newly created comment div to the comments container */
    commentContainer.appendChild(commentDiv)

} /* END displayComment function */ 

/* Create a comment object using the values from the form inputs */
function makeCommentObject(){
    let comment     = {}
    comment.name    = nameInput.value
    comment.comment = commentInput.value
    return comment
}

/* Clear the comments from the screen, create a new comment and add it to the array, */
function submitComment(){
    axios({
        method: 'post',
        url: `${_URL}comments?api_key=${API_KEY}`,
        data: makeCommentObject()
      })
      .then(() => {
        return axios.get(`${_URL}comments?api_key=${API_KEY}`)
      })
      .then(res => {
        console.log(res)
        commentContainer.innerHTML = '';
        nameInput.value = ''
        commentInput.value = ''; 
        let newestFirst = res.data.reverse()
        newestFirst.forEach(c => displayComment(c))
    })
    .catch(err => console.log(err))
}

/* Add event listener to button */
submitButton.addEventListener('click', e => {
    e.preventDefault()
    submitComment()
})


/* make axios GET request to append default comments to the page */

axios.get(`${_URL}comments?api_key=${API_KEY}`)
     .then(res => {
        let newestFirst = res.data.reverse()
        newestFirst.forEach(c => displayComment(c))
        })
     .catch(err => console.error(err))
    