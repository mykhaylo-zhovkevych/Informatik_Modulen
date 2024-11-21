// Import the CSS file
import '../css/index.css';
import '../css/background.css';
import '../css/contact.css';
import '../css/phone.css';
import '../css/login.css';
import '../css/search.css';
import '../css/content.css'
import '../css/user.css';
import '../css/JSON.css';
import '../css/minor-sidebar.css';


/* document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is working!');
}); */

function random(min,max) {
    return Math.random() * (max - min) + min
}

class Blob {
    constructor(element) {
        this.element = element
        this.size = element.getBoundingClientRect().width
        this.x = random(0, window.innerWidth - this.size)
        this.y = random(0, window.innerHeight - this.size)

        // for the velocity in x and y
        // this will move one pixel pre one Frame
        this.vx = random(2,2.5) * Math.random() > 0.5 ? -1 : 1
        this.vy = random(2,2.5) * Math.random() > 0.5 ? -1 : 1
        console.log(element);
    }

    update() {
        // in here the position and the valocity will be updated only values
        this.x += this.vx
        this.y += this.vy

        // right and bottom edge of the screen
        if (this.x >= window.innerWidth - this.size) {
            this.vx *= -1
            this.x = window.innerWidth - this.size
        }
        if (this.y >= window.innerHeight - this.size) {
            this.vy *= -1
            this.y = window.innerHeight - this.size
        }

        // left and top adges checker
        if (this.x <= 0) {
            this.vx *= -1
            this.x = 0
        }
        if (this.y <= 0) {
            this.vy *= -1
            this.y = 0
        }
    }
    move() {
        // in here the values will be acutally moved
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}


function initBlobs() {

    const blobEls = document.querySelectorAll('.blob')
    // to make it more essaly working with each blobs individually
    // it shoude be encapsulated in the class called blob

    // creation of the block object for each blob element
    // it can be done by looping trough them using the map function
    // but bofore doing it i must first conver the blob elements ot the Array
    const blobs = Array.from(blobEls).map(BlobElement => new Blob(BlobElement))

    function update() {
        blobs.forEach((blob) =>  {
            blob.update()
            blob.move()
        })
        requestAnimationFrame(update)
    }

    // this fuction takes callback that runs before next frame repaint so this mean i can prepare all wor for the next frame to rander
    requestAnimationFrame(update)
}

initBlobs();


