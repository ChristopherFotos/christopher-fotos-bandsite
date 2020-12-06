let nameInput              = document.getElementById('comments__name-input');
let commentInput           = document.getElementById('comment-input');
let commentContainer       = document.getElementById('comment-container');
let submitButton           = document.getElementById('add-comment');

/* this function will be called in the delete button's event listener */
function deleteFunction(e){
    console.log(e.target)
        axios.delete(`${_URL}comments/${e.target.dataset.commentId}?api_key=${API_KEY}`)
             .catch(err => console.error(err))

    let comment = document.getElementById(e.target.dataset.id)
    comment.remove()
}

/* this function will be called in the like button's event listener. */
function likeFunction(e){

    /* NOTE: you might get a CORS error when this function runs. disabling CORS in chrome will resolve this issue. instructions: https://bit.ly/3lUlJHP*/

    let likedComments;

    if(localStorage.likedComments){
        likedComments = JSON.parse(localStorage.likedComments)
        if(likedComments.find(id => id === e.target.dataset.commentId)) {
            return
        }
    } else {
        likedComments = []
        localStorage.likedComments = JSON.stringify([])
    }

    if(e.target.classList.contains('comments__like-icon')){
        likedComments.push(e.target.dataset.commentId)
        localStorage.likedComments = JSON.stringify(likedComments)
        
        let likes = parseInt(e.target.parentNode.parentNode.dataset.likes)
        likes += 1
        e.target.parentNode.parentNode.dataset.likes = likes
        let likesSpan = e.target.parentNode.previousSibling
        likesSpan.innerText = `${likes} likes`  

        axios.put(`${_URL}comments/${e.target.dataset.commentId}/like?api_key=${API_KEY}`)
    }
    
}

/* displayComment function accepts a Comment object and uses it to create an HTML comment component.*/
function displayComment(comment, i){

    /* displayComment function: create comment div */
    let commentDiv = document.createElement('div');
    commentDiv.classList.add('comments__content');
    commentDiv.dataset.id = comment.id;
    commentDiv.id = i

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

    /* displayComment function: create button container and buttons*/
    let buttonContainer = document.createElement('div')
    buttonContainer.dataset.likes = Number(comment.likes)
    commentBody.appendChild(buttonContainer)
    buttonContainer.classList.add('comments__button-container')

    let spanInfo = [
        {class:'comments__delete-button', text:'delete', function: deleteFunction},
        {class:'comments__likes', text:`${comment.likes} likes`, function: null},
        {class:'comments__like-button', text:`<img src="./assets/images/like.png" class='comments__like-icon' alt="like button">`, function: likeFunction}
    ]

    spanInfo.forEach(s=>{
        let span = document.createElement('span')
        span.classList.add(s.class)
        span.innerHTML = s.text
        span.dataset.commentId = comment.id
        span.dataset.id = i
        buttonContainer.appendChild(span)

        if(span.firstChild.classList){
            span.firstChild.dataset.commentId = comment.id
        }

        if(s.function){
            span.addEventListener('click', s.function)
        }
    })

    /* displayComment function: append the newly created comment div to the comments container */
    commentContainer.appendChild(commentDiv)

} /* END displayComment function */ 


/* Comment constructor function */
function Comment(name, comment){
    this.name    = name
    this.comment = comment
}

/* Clear the comments from the screen, create a new comment and add it to the array, */

function submitComment(){
    axios({
        method: 'post',
        url: `${_URL}comments?api_key=${API_KEY}`,
        data: new Comment(nameInput.value, commentInput.value)
      })
      .then(() => {
        return axios.get(`${_URL}comments?api_key=${API_KEY}`)
      })
      .then(res => {
        commentContainer.innerHTML = '';
        nameInput.value = ''
        commentInput.value = ''; 
        let newestFirst = res.data.reverse()
        newestFirst.forEach((c,i) => displayComment(c,i))
        // addButtonListeners()
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
        newestFirst.forEach((c,i) => displayComment(c,i))
        // addButtonListeners()
        })
     .catch(err => console.error(err))