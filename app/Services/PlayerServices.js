import { appState } from "../AppState.js"

class PlayersService {
    gainPoint(name) {
        console.log("serving point", name)
        let player = appState.players.find(p => p.name == name)
        player.score++
    }
    losePoint(name) {
        console.log("losing point", name)
        let player = appState.players.find(p => p.name == name)
        player.score--
    }
}

export const playersService = new PlayersService()