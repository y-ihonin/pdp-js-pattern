class PlayingState {
  constructor(state) {
    this.state = state

    this.state.videoBlock.play();
  }

  play() {
    this.state.videoBlock.play();
  }

  pause() {
    this.state.setState(new this.state.states.pauseState(this.state))
  }

  stop() {
    this.state.setState(new this.state.states.stopState(this.state))
  }
}

class PausedState {
  constructor(state) {
    this.state = state

    this.state.videoBlock.pause();
  }

  play() {
    this.state.setState(new this.state.states.playState(this.state))
  }

  pause() {
    this.state.videoBlock.pause();
  }

  stop() {
    this.state.setState(new this.state.states.stopState(this.state))
  }
}

class StoppedState {
  constructor(state) {
    this.state = state;

    this.state.videoBlock.pause();
    this.state.videoBlock.currentTime = 0;
  }

  play() {
    console.log(this)
    this.state.setState(new this.state.states.playState(this.state))
  }

  pause() {
    this.state.setState(new this.state.states.pauseState(this.state))
  }

  stop() {
    this.state.videoBlock.pause();
    this.state.videoBlock.currentTime = 0;
  }
}

class State {
  constructor(selector) {
    this.states = {
      playState: PlayingState,
      pauseState: PausedState,
      stopState: StoppedState
    }
    this.videoBlock = document.querySelector(selector)

    this.state = new this.states.stopState(this)
  }

  setState(currentState){
    this.state = currentState;
  }

  play() {
    console.log("PLAY")
    this.state.play()
  }

  pause() {
    console.log("PAUSE")
    this.state.pause()
  }

  stop() {
    console.log("STOP")
    this.state.stop()
  }
}

const MediaPlayer = new State("#video")

const playButton = document.querySelector("#playButton");
const pauseButton = document.querySelector("#pauseButton");
const stopButton = document.querySelector("#stopButton");

playButton.addEventListener('click', () => MediaPlayer.play());
pauseButton.addEventListener('click', () => MediaPlayer.pause());
stopButton.addEventListener('click', () => MediaPlayer.stop());
