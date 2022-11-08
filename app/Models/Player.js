export class Player {
    constructor(name) {
        this.name = name
        this.score = 0
    }

    get Template() {
        return `<div class="col-10 card">
    <h2>${this.name}</h2>
    <h4>Score: ${this.score}</h4><i class="mdi mdi-plus-circle fs-2 text-success" onclick="app.playersController.gainPoint('${this.name}')"></i><i class =" mdi mdi-minus-circle fs-2 text-danger" onclick="app.playersController.losePoint('${this.name}')"></i>
</div>`
    }
}
