import dogsData from './data.js'
import Dog from './Dog.js'

let currentDogIndex = 0
let currentDog = new Dog(dogsData[currentDogIndex]) 
let likedDogs = []

const likeBtn = document.getElementById('like-btn')
const nopeBtn = document.getElementById('nope-btn')

likeBtn.addEventListener('click', liked)
nopeBtn.addEventListener('click', disLiked)

render()

function render() {
    document.getElementById('avatar-wrapper').innerHTML = currentDog.getDogHtml()
}

function getNewDog() {
    currentDogIndex++
    currentDog = new Dog(dogsData[currentDogIndex])
    render()
}

function endScreen() {
    document.getElementById('profile').innerHTML = `
        <div class='end-screen'>
            <div class='end-screen-txt'>
                <h2>Sorry, no more available dogs in your area!</h2>
                <button id='matches'>See your matches</p>
            </div>
        </div>
    `
    
    document.getElementById('matches').addEventListener('click', seeMatches)
}

function liked() {
    document.getElementById('liked-badge').style.display = 'block'
    currentDog.setMatchStatus(true)
    likedDogs.push(currentDog)
    likeBtn.disabled = true
    
    setTimeout(function(){
        likeBtn.disabled = false
        document.getElementById('liked-badge').style.display = 'none'
        if (currentDogIndex === 2) {
            endScreen()
        } else {
            getNewDog()
        }
    }, 1500)    
}

function disLiked() {
    document.getElementById('disliked-badge').style.display = 'block'
    currentDog.setMatchStatus(false)
    nopeBtn.disabled = true

    setTimeout(function(){
        nopeBtn.disabled = false
        document.getElementById('disliked-badge').style.display = 'none'
        if (currentDogIndex === 2) {
            endScreen()
        } else {
            getNewDog()
        }
    }, 1500)    
}

function seeMatches() {
    const likedDogsHtml = likedDogs.map(dog => `
            <div class='dog-card'>
                <img class='dog-card-avatar' src='${dog.avatar}' />
                <h3 class='dog-card-name'>${dog.name}</h3>
            </div>
    `).join('')
    
    document.getElementById('profile').innerHTML = `
        <div class='dog-card-wrapper'>
            ${likedDogsHtml}
        </div>
    ` 
}
