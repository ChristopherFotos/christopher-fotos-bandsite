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



function makeCommentObject(){
    let comment     = {}
    comment.name    = nameInput.value
    comment.comment = commentInput.value
    return comment
}

function displayComment(comment){
    let newComment = document.createElement('div')
    newComment.classList = ['comment']
    newComment.innerHTML= 
            `<h1 class='comment__name'>${comment.name}</h1>
            <p>${comment.comment}</p>
            <p>date:${comment.date}</p>`

    commentContainer.appendChild(newComment)
}

function submitComment(){
    commentContainer.innerHTML = '';
    commentsArray.push(makeCommentObject())
    commentsArray.forEach(c => displayComment(c))
}

submitButton.addEventListener('click', e => {
    e.preventDefault()
    submitComment()
})

commentsArray.forEach(c => displayComment(c))