let nameInput        = document.getElementById('comments__name-input');
let commentInput     = document.getElementById('comment-input');
let commentContainer = document.getElementById('comment-container');
let submitButton     = document.getElementById('add-comment');

let commentsArray = [
    {
        name: 'John Candy',
        comment: 'Great energy. Love seeing these guys live.',
        timestamp: new Date()
    },
    {
        name: 'John Wayne',
        comment: 'Their last album was 3/10 at best. They\'re sellouts now.',
        timestamp: new Date()
    },
    {
        name: 'Jimmy Fallon',
        comment: 'I have every single one of their records, even the b-sides. Not a bad song in their whole catalog.',
        timestamp: new Date()
    }
]


// Create a comment object using the values from the form inputs
function makeCommentObject(){
    let comment     = {}
    comment.name    = nameInput.value
    comment.comment = commentInput.value
    return comment
}

// Create an element, apply a class of comments__content to it, set its innerHTML,
// and then append it to the comment container 

function displayComment(comment){
    let commentDiv = document.createElement('div');
    commentDiv.classList.add('comments__content');

    let commentImg = document.createElement('img');
    commentImg.classList.add('comments__avatar');
    commentImg.setAttribute('src', './assets/images/avatars/1.jpg')
    commentDiv.appendChild(commentImg);

    let innerDiv = document.createElement('div')
    innerDiv.classList.add('comments__inner-container')
    commentDiv.appendChild(innerDiv)

    let commentText = document.createElement('div');
    commentText.classList.add('comments__text');
    innerDiv.appendChild(commentText);

    let commentMeta = document.createElement('div');
    commentMeta.classList.add('comments__meta');
    commentText.appendChild(commentMeta);

    let commentName = document.createElement('span');
    commentName.classList.add('comments__name');
    commentName.innerText = comment.name;
    commentMeta.appendChild(commentName);

    let commentDate = document.createElement('span');
    commentDate.classList.add('comments__date');
    commentDate.innerText = comment.date;
    commentMeta.appendChild(commentDate);

    let commentBody = document.createElement('div');
    commentBody.classList.add('comments__text');
    innerDiv.appendChild(commentBody);

    let commentP = document.createElement('p');
    commentP.classList.add('comments__p');
    commentP.innerText = comment.comment;
    commentBody.appendChild(commentP);


    // newComment.innerHTML= 
            // `
            // <img src="./assets/images/avatars/1.jpg" alt="" class="comments__avatar">

            // <div class="comments__text">
            //     <div class="comments__meta">
            //     <span class="comments__name">${comment.name}</span>
            //     <span class="comments__date"> Date</span>
            // </div>

            // <div class="comments__text">
            //     <p class="comments__p">
            //         ${comment.comment}
            //     </p>
            // </div>
            
            // </div>

            // </div>`

    
    commentContainer.appendChild(commentDiv)
}

function submitComment(){
    commentContainer.innerHTML = '';
    commentsArray.unshift(makeCommentObject())
    nameInput.value = ''
    commentInput.value = '';
    commentsArray.forEach(c => displayComment(c))
}

submitButton.addEventListener('click', e => {
    e.preventDefault()
    submitComment()
})

commentsArray.forEach(c => displayComment(c))