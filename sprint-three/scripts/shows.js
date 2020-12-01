let shows = [
    {
        date: 'Mon Dec 17 2018',
        venue: 'Ronald Lane',
        location: 'San Francisco, California'
    },
    {
        date: 'Tue Jul 18 2019',
        venue: 'Pier 3 East',
        location: 'San Francisco, California'
    },
    {
        date: 'Sat Aug 12 2019',
        venue: 'Hyatt Agency',
        location: 'San Francisco, California'
    },
    {
        date: 'Fri Sep 05 2019',
        venue: 'Moscow Center',
        location: 'San Francisco, California'
    },
    {
        date: 'Wed Aug 11 2019',
        venue: 'Pres Club',
        location: 'San Francisco, California'
    },
    {
        date: 'Fri Sep 05 2019',
        venue: 'Moscow Center',
        location: 'San Francisco, California'
    },
    {
        date: 'Fri Sep 05 2019',
        venue: 'Moscow Center',
        location: 'San Francisco, California'
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

    // get container and append showcard to it
    let container = document.getElementById('shows__table')
    container.appendChild(showCard)
})
