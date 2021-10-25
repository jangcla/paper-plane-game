var firebaseConfig = {
    apiKey: "AIzaSyAzIj8yUZ6HsVI4Ip1GO95REzzuLW_sBwA",
    authDomain: "score-board-9a8a9.firebaseapp.com",
    projectId: "score-board-9a8a9",
    storageBucket: "score-board-9a8a9.appspot.com",
    messagingSenderId: "1018757918132",
    appId: "1:1018757918132:web:f38d149043efbc98a496e1",
    measurementId: "G-1H7KM54G4J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();




function moveLeft() {
    let left = parseInt(window.getComputedStyle(paperplane).getPropertyValue("left"));
    left -= 200;
    if (left>=0) {
        paperplane.style.left = left + "px";
    }
}
function moveRight() {
    let left = parseInt(window.getComputedStyle(paperplane).getPropertyValue("left"));
    left += 200;
    if (left<600) {
        paperplane.style.left = left + "px";
    }
}

document.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft" || event.key === "a" || event.key === "A") {moveLeft();}
    if (event.key === "ArrowRight"|| event.key === "d" || event.key === "D") {moveRight();}
})

let counter = 0
let counterShow = document.getElementById("counter")

let obstacle = document.getElementById("obstacle");
obstacle.addEventListener('animationiteration', () => {
    var random = Math.floor(Math.random() * 3);
    left = random * 200;  
    obstacle.style.left = left + "px";
    counter++;
    document.getElementById('counter').innerHTML = counter;
    if (counter === 5) {
        obstacle2.style.animation = "slide 6s infinite";
        document.getElementById('counter').style.color = 'red'
    }
    if (counter === 15) {
        obstacle3.style.animation = "slide 12s infinite";
        document.getElementById('counter').style.color = 'yellow'
    }
    if (counter === 30) {
        obstacle4.style.animation = "slide 18s infinite";
        document.getElementById('counter').style.color = 'green'
    }
    if (counter > 45) {
        document.getElementById('counter').style.color = 'lightskyblue'
    }
})
let obstacle2 = document.getElementById("obstacle2");
obstacle2.addEventListener('animationiteration', () => {
    var random = Math.floor(Math.random() * 3);
    left = random * 200;  
    obstacle2.style.left = left + "px";
    counter++;
    document.getElementById('counter').innerHTML = counter;

    if (counter === 5) {
        obstacle2.style.animation = "slide 6s infinite";
        document.getElementById('counter').style.color = 'red'
    }
    if (counter === 15) {
        obstacle3.style.animation = "slide 12s infinite";
        document.getElementById('counter').style.color = 'yellow'
    }
    if (counter === 30) {
        obstacle4.style.animation = "slide 18s infinite";
        document.getElementById('counter').style.color = 'green'
    }
    if (counter > 45) {
        document.getElementById('counter').style.color = 'lightskyblue'
    }
})
let obstacle3 = document.getElementById("obstacle3");
obstacle3.addEventListener('animationiteration', () => {
    var random = Math.floor(Math.random() * 3);
    left = random * 200;  
    obstacle3.style.left = left + "px";
    counter++;
    document.getElementById('counter').innerHTML = counter;

    if (counter === 5) {
        obstacle2.style.animation = "slide 6s infinite";
        document.getElementById('counter').style.color = 'red'
    }
    if (counter === 15) {
        obstacle3.style.animation = "slide 12s infinite";
        document.getElementById('counter').style.color = 'yellow'
    }
    if (counter === 30) {
        obstacle4.style.animation = "slide 18s infinite";
        document.getElementById('counter').style.color = 'green'
    }
    if (counter > 45) {
        document.getElementById('counter').style.color = 'lightskyblue'
    }
})
let obstacle4 = document.getElementById("obstacle4");
obstacle4.addEventListener('animationiteration', () => {
    var random = Math.floor(Math.random() * 3);
    left = random * 200;  
    obstacle4.style.left = left + "px";
    counter++;
    document.getElementById('counter').innerHTML = counter;
    
    if (counter === 5) {
        obstacle2.style.animation = "slide 6s infinite";
        document.getElementById('counter').style.color = 'red'
    }
    if (counter === 15) {
        obstacle3.style.animation = "slide 12s infinite";
        document.getElementById('counter').style.color = 'yellow'
    }
    if (counter === 30) {
        obstacle4.style.animation = "slide 18s infinite";
        document.getElementById('counter').style.color = 'green'
    }
    if (counter > 45) {
        document.getElementById('counter').style.color = 'lightskyblue'
    }
})

setInterval(function() {
    let obs = [obstacle, obstacle2, obstacle3, obstacle4]
    var paperPlaneLeft = parseInt(window.getComputedStyle(paperplane).getPropertyValue("left"));
    var obstacleLeft = parseInt(window.getComputedStyle(obs[0]).getPropertyValue("left"));
    var obstacleLeft2 = parseInt(window.getComputedStyle(obs[1]).getPropertyValue("left"));
    var obstacleLeft3 = parseInt(window.getComputedStyle(obs[2]).getPropertyValue("left"));
    var obstacleLeft4 = parseInt(window.getComputedStyle(obs[3]).getPropertyValue("left"));
    var onTop = parseInt(window.getComputedStyle(obs[0]).getPropertyValue("top"));
    var onTop2 = parseInt(window.getComputedStyle(obs[1]).getPropertyValue("top"));
    var onTop3 = parseInt(window.getComputedStyle(obs[2]).getPropertyValue("top"));
    var onTop4 = parseInt(window.getComputedStyle(obs[3]).getPropertyValue("top"));

    if (paperPlaneLeft === obstacleLeft && onTop < 890 && onTop > 700) {
        alert(`Game Over... ${counter} DODGED `);
        saveScore();
        counter = 0;
        obstacle.style.animation = "none"
        obstacle2.style.animation = "none"
        obstacle3.style.animation = "none"
        obstacle4.style.animation = "none"
    }
    else if (paperPlaneLeft === obstacleLeft2 && onTop2 < 790 && onTop2 > 600) {
        alert(`Game Over... ${counter} DODGED `);
        saveScore();
        counter = 0;
        obstacle.style.animation = "none"
        obstacle2.style.animation = "none"
        obstacle3.style.animation = "none"
        obstacle4.style.animation = "none"
    }
    else if (paperPlaneLeft === obstacleLeft3 && onTop3 < 690 && onTop3 > 500) {
        alert(`Game Over... ${counter} DODGED `);
        saveScore();
        counter = 0;
        obstacle.style.animation = "none"
        obstacle2.style.animation = "none"
        obstacle3.style.animation = "none"
        obstacle4.style.animation = "none"
    }
    else if (paperPlaneLeft === obstacleLeft4 && onTop4 < 590 && onTop4 > 400) {
        alert(`Game Over... ${counter} DODGED `);
        saveScore();
        counter = 0;
        obstacle.style.animation = "none"
        obstacle2.style.animation = "none"
        obstacle3.style.animation = "none"
        obstacle4.style.animation = "none"
    }
}, 1)




function reload() {
    var container = document.getElementById("main-container");
    var content = container.innerHTML;
    container.innerHTML = content;
}




function saveScore() {
    let name = prompt("Pilot...What is your name?", "Pilot Name");

    if (name !== null) {
        db.collection("scores").doc().set({
            name: name,
            score: counter 
        })
            .then(function () {
                updateScores();
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
    }
}

function updateScores() {
    document.getElementById('scoreboard').innerHTML = '<tr><th>Name</th><th>Score</th></tr>';

    db.collection("scores").orderBy("score", "desc").limit(10).get().then((snapshot) => {
        snapshot.forEach((doc) => {
            document.getElementById('scoreboard').innerHTML += '<tr>' +
                '<td>' + doc.data().name + '</td>' +
                '<td>' + doc.data().score + '</td>' +
                '</tr>';
        })
    })
}



function loadingDiv() {
    document.getElementById("cover").style.display = "none";
    obstacle.style.animation = "slide 6s infinite";
}




window.setTimeout("loadingDiv();", 5000);
window.onload = updateScores();
window.onload = function () {
    document.getElementById('counter').innerHTML = counter;
};


let button = document.getElementById("reset-game");

button.onclick = function() {
    counter = 0;
    document.getElementById('counter').innerHTML = counter;
    document.getElementById("counter").style.color = "black";
    document.getElementById("cover").style.display = "block";
    document.getElementById("paperplane").style.left = '200px';

    setTimeout(function () {
        document.getElementById("cover").style.display = "none";
        obstacle.style.animation = "slide 6s infinite";
    }, 5000);
}

let changePlane = document.getElementById("plane-change");

changePlane.onclick = function() {
    let planeArr = ['url(https://media2.giphy.com/media/S9ukg9TDGpMDxHKqGI/giphy.gif)', 'url(https://cdn.dribbble.com/users/2113762/screenshots/4207808/layer-1-paperflight-3.gif)', 'url(https://media.giphy.com/media/26xBBWHMhvoAkndhC/giphy.gif)', 'url(https://www.grc.nasa.gov/www/k-12/airplane/Images/pplanes.gif)', 'url(https://i.pinimg.com/originals/bf/72/56/bf7256a96df56f720ef60b05e7dd09ac.gif)', 'url(https://cdn.dribbble.com/users/1912193/screenshots/4753129/airplane-gif_dribbble_.gif)', 'url(https://data.whicdn.com/images/63516206/original.gif)', 'url(https://monophy.com/media/KzAaUM0ftgkoZuP6b1/monophy.gif)', 'url(https://i.pinimg.com/originals/29/38/a3/2938a3b0772876c56082d65731c23692.gif)', 'url(https://media0.giphy.com/media/cTbVbxI1A5ulEQxRjs/giphy.gif?cid=6c09b952ffb7cb6b3c516a5ed80a2521ecf32839a02121c8&rid=giphy.gif&ct=s)', 'url(https://i.pinimg.com/originals/13/fa/be/13fabe368d08211706da14d461727b50.gif)', 'url(https://paper-planes.in/images/only-plane.gif)']
    
    let randomIndex = Math.floor(Math.random() * planeArr.length)
    
    
    document.getElementById("paperplane").style.background = planeArr[randomIndex];
    document.getElementById("paperplane").style.backgroundSize = "100% 100%";
}