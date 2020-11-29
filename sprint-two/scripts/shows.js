let shows = [
    {
        date: '11/02/2020',
        venue: 'El Mocambo',
        location: 'Toronto, ON'
    },
    {
        date: '11/02/2020',
        venue: 'El Mocambo',
        location: 'Toronto, ON'
    },
    {
        date: '11/02/2020',
        venue: 'El Mocambo',
        location: 'Toronto, ON'
    },
    {
        date: '11/02/2020',
        venue: 'El Mocambo',
        location: 'Toronto, ON'
    }
]

shows.forEach(show =>{
    let showCard = document.createElement('div')
    showCard.classList.add('show-card');

    // Date div

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

    // Venue div

    let venue = document.createElement('div')
    venue.classList.add("show-card__venue")
    showCard.appendChild(venue)

    let venueSpan = document.createElement('span')
    venueSpan.classList.add('show-card__heading')
    venueSpan.innerText = 'VENUE'
    venue.appendChild(venueSpan)

    let venueP = document.createElement('p')
    venueP.classList.add('show-card__text')
    venueP.innerText = show.venue
    venue.appendChild(venueP)

    // Location div

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

    // button
    let btnDiv = document.createElement('div')
    btnDiv.classList.add('show-card__button')

    let btn = document.createElement('button')
    btn.classList.add('action-button')
    btn.innerText = 'BUY TICKETS NOW'
    btnDiv.appendChild(btn);

    showCard.appendChild(btnDiv)



    

   


    // showCard.innerHTML = `
    // <div class="show-card__date">
    //     <span class="show-card__heading">DATE</span>
    //     <p class="show-card__text show-card__text--bold"> 
    //         ${show.date}
    //     </p>
    // </div>

    // <div class="show-card__venue">
    //     <span class="show-card__heading">VENUE</span>
    //     <p class="show-card__text ">
    //         ${show.vanue}
    //     </p>
    // </div>  

    // <div class="show-card__location">
    //     <span class="show-card__heading">LOCATION</span>
    //     <p class="show-card__text">
    //         ${show.location}
    //     </p>
    // </div>
    // <div class="show-card__button">
    //     <button class="action-button">BUY TICKETS NOW</button>
    // </div>
    // `

    let container = document.getElementById('shows')
    container.appendChild(showCard)
})
