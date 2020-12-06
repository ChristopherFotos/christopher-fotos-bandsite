/* create the show table container and header, and label row */
let showsTable = document.createElement('div')
showsTable.id = 'shows__table'
let headingContainer = document.createElement('div')
headingContainer.classList.add('shows__heading-container')

let labels     = ['DATE', 'VENUE', 'LOCATION', '']
labels.forEach((label, i) => {
    let newDiv  = document.createElement('div')
    newDiv.classList.add('show-card__label-wrapper')

    if(i == 3) newDiv.classList.add('show-card__label-wrapper__placeholder')
    
    let newP = document.createElement('p')
    newP.classList.add("show-card__heading--top")
    newP.classList.add("show-card__heading--top")
    newP.innerText = label

    newDiv.appendChild(newP)
    headingContainer.appendChild(newDiv)
})

let section = document.getElementById('shows')
let heading = document.createElement('h3')
heading.classList.add('heading', 'shows__heading')
heading.innerText = 'Shows'
section.appendChild(heading)

showsTable.appendChild(headingContainer)
section.appendChild(showsTable)

/* Make GET request to /comments, loop through the arry that it returns*/
axios.get(`${_URL}showdates?api_key=${API_KEY}`)
    .then( res=>{

        console.log(res)
        res.data.forEach(show =>{
            /* Make a show card */
            let showCard = document.createElement('div')
            showCard.classList.add('show-card');
        
            /* Make Date div */
            let date = document.createElement('div')
            date.classList.add("show-card__date")
            showCard.appendChild(date)
        
            let dateSpan = document.createElement('span')
            dateSpan.classList.add('show-card__heading')
            dateSpan.innerText = 'DATE'
            date.appendChild(dateSpan)
        
            let dateP = document.createElement('p')
            dateP.classList.add("show-card__text", "show-card__text--bold")
            dateP.innerText = show.date
            date.appendChild(dateP)
        
            /* Make venue div */
            let venue = document.createElement('div')
            venue.classList.add("show-card__venue")
            showCard.appendChild(venue)
        
            let venueSpan = document.createElement('span')
            venueSpan.classList.add('show-card__heading')
            venueSpan.innerText = 'VENUE'
            venue.appendChild(venueSpan)
        
            let venueP = document.createElement('p')
            venueP.classList.add('show-card__text')
            venueP.innerText = show.place
            venue.appendChild(venueP)
        
            /* Make location div */
            let location = document.createElement('div')
            location.classList.add("show-card__location")
            showCard.appendChild(location)
        
            let locationSpan = document.createElement('span')
            locationSpan.classList.add('show-card__heading')
            locationSpan.innerText = 'LOCATION'
            location.appendChild(locationSpan)
        
            let locationP = document.createElement('p')
            locationP.classList.add('show-card__text')
            locationP.innerText = show.location
            location.appendChild(locationP)
        
            /* Make button */
            let btnDiv = document.createElement('div')
            btnDiv.classList.add('show-card__button')
            let btn = document.createElement('button')
            btn.classList.add('action-button')
            btn.innerText = 'BUY TICKETS NOW'
            btnDiv.appendChild(btn);
        
            showCard.appendChild(btnDiv)

            /* get container and append showcard to it */
            let container = document.getElementById('shows__table')
            container.appendChild(showCard)
        })
    })


