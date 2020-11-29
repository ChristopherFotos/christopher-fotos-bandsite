let container = document.getElementById('shows')

let shows = [
    {
        date: '11/02/2020',
        vanue: 'El Mocambo',
        location: 'Toronto, ON'
    },
    {
        date: '11/02/2020',
        vanue: 'El Mocambo',
        location: 'Toronto, ON'
    },
    {
        date: '11/02/2020',
        vanue: 'El Mocambo',
        location: 'Toronto, ON'
    },
    {
        date: '11/02/2020',
        vanue: 'El Mocambo',
        location: 'Toronto, ON'
    }
]

shows.forEach(show =>{
    let showCard = document.createElement('div')
    showCard.classList.add('show-card');
    showCard.innerHTML = `
    <div class="show-card__date">
        <span class="show-card__heading">DATE</span>
        <p class="show-card__text show-card__text--bold"> 
            ${show.date}
        </p>
    </div>

    <div class="show-card__venue">
        <span class="show-card__heading">VENUE</span>
        <p class="show-card__text ">
            ${show.vanue}
        </p>
    </div>  

    <div class="show-card__location">
        <span class="show-card__heading">LOCATION</span>
        <p class="show-card__text">
            ${show.location}
        </p>
    </div>
    <div class="show-card__button">
        <button class="action-button">BUY TICKETS NOW</button>
    </div>
    `
    container.appendChild(showCard)
})
