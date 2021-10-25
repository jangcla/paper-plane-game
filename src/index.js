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
let obstacle = document.getElementById("obstacle");
obstacle.addEventListener('animationiteration', () => {
    var random = Math.floor(Math.random() * 3);
    left = random * 200;  
    obstacle.style.left = left + "px";
    counter++;
    if (counter === 5) {
        obstacle2.style.animation = "slide 6s infinite";
    }
})
let obstacle2 = document.getElementById("obstacle2");
obstacle2.addEventListener('animationiteration', () => {
    var random = Math.floor(Math.random() * 3);
    left = random * 200;  
    obstacle2.style.left = left + "px";
    counter++;
    if (counter === 10) {
        obstacle3.style.animation = "slide 6s infinite";
    }
})
let obstacle3 = document.getElementById("obstacle3");
obstacle3.addEventListener('animationiteration', () => {
    var random = Math.floor(Math.random() * 3);
    left = random * 200;  
    obstacle3.style.left = left + "px";
    counter++;
    if (counter === 25) {
        obstacle4.style.animation = "slide 6s infinite";
    }
})
let obstacle4 = document.getElementById("obstacle4");
obstacle4.addEventListener('animationiteration', () => {
    var random = Math.floor(Math.random() * 3);
    left = random * 200;  
    obstacle4.style.left = left + "px";
    counter++;
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