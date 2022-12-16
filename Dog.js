class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    
    setMatchStatus(bool) {
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }
    
    getDogHtml() {
        const { name, avatar, age, bio } = this
        return `
            <img id='avatar' src='${avatar}' alt='dog bio pic' />
            <div class='profile-details'>
                <h1 id='${name}'>${name}, ${age}</h1>
                <p id='profile-bio'>${bio}</p>
            </div>
        `
    }
}

export default Dog