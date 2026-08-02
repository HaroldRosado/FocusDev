export class PomodoroTimer {
    constructor(minutes = 50) {
        this.duration = minutes * 60;
        this.remaining = this.duration;

        this.interval = null;

        this.isRunning = false;
    }

    start(update) {
        if (this.isRunning) return;

        this.isRunning = true;

        this.interval = setInterval(()=>{
            this.remaining--;

            update(this.remaining);

            if(this.remaining <= 0) {
                this.stop();
            }
        },1000);
    }

    pause() {
        clearInterval(this.interval);

        this.isRunning = false;
    }

    stop() {
        clearInterval(this.interval);

        this.isRunning = false;

        this.remaining = this.duration;
    }

    reset() {

    }
}