function updateDateTime() {

    const now = new Date();

    const dateOptions = {
        day: "numeric",
        month: "short",
        year: "numeric",
        timeZone: "Asia/Kolkata"
    };

    const timeOptions = {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata"
    };

    document.getElementById("current-date").innerText =
        now.toLocaleDateString("en-US", dateOptions).toUpperCase();

    document.getElementById("current-time").innerText =
        now.toLocaleTimeString("en-US", timeOptions).toUpperCase();
}

updateDateTime();

setInterval(updateDateTime, 1000);

/* SHOWREEL SCROLL */

const showreelSection =
document.querySelector(".showreel-section");

const showreelTrack =
document.querySelector(".showreel-track");

let currentX = 0;
let targetX = 0;

function animate(){

    currentX += (targetX - currentX) * 0.08;

    showreelTrack.style.transform =
    `translateX(-${currentX}px)`;

    requestAnimationFrame(animate);
}

animate();

window.addEventListener("scroll",()=>{

    const start =
    showreelSection.offsetTop;

    targetX =
    Math.max(0, window.scrollY - start);

});


const playButtons = document.querySelectorAll(".play-btn");

playButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".music-card");
        const audio = card.querySelector(".music-audio");

        document.querySelectorAll(".music-audio").forEach(song => {

            if(song !== audio){
                song.pause();
                song.currentTime = 0;
            }

        });

        document.querySelectorAll(".play-btn").forEach(btn => {

            if(btn !== button){
                btn.innerHTML = "▶";
            }

        });

        if(audio.paused){
            audio.play();
            button.innerHTML = "⏸";

        }else{

            audio.pause();
            button.innerHTML = "▶";

        }

        audio.onended = () => {
            button.innerHTML = "▶";
        };

    });

});

