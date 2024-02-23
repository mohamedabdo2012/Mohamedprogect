var time = 0;
var start = false;

const watch = document.getElementById
("watchDiv");

async function startTimer() {
    if (start == false) {
        start=true;
        while (start) {
            time++;
            watch.innerText= time;
            await new Promise(r => setTimeout(r, 1000));
            
        }
        
    }
    
}


function pause() {
    start=false;

    
}

function stop() {
    pause();
    time=0;
    
}