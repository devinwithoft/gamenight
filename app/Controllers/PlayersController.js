import { appState } from "../AppState.js"
import { playersService } from "../Services/PlayerServices.js"

export class PlayersController {
    constructor() {
        this.drawPlayers()
    }

    drawPlayers() {
        let template = ''
        appState.players.forEach(p => template += p.Template)
        document.getElementById('app').innerHTML = template
    }

    gainPoint(name) {
        console.log("gaining point", name)
        playersService.gainPoint(name)
        this.drawPlayers()
    }

    losePoint(name) {
        playersService.losePoint(name)
        this.drawPlayers()
    }
}