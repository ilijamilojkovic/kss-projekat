export class Roster{
    constructor(){
        this.listaIgraca = [];
        this.container = null;
    }
    
    dodajIgraca(igrac){
        this.listaIgraca.push(igrac);
    }

    crtajRoster(gde){
        this.container = document.createElement('div');
        this.container.className = "roster";
        gde.container.appendChild(this.container);

        let upRoster = document.createElement('div');
        upRoster.className = "up-roster";
        this.container.appendChild(upRoster);

        let downRoster = document.createElement('div');
        downRoster.className = "down-roster";
        this.container.appendChild(downRoster);

        let labelRoster = document.createElement('label');
        labelRoster.className = "labela-roster";
        upRoster.appendChild(labelRoster);

        let igraci = document.createElement('div');
        igraci.className = "igraci";
        downRoster.appendChild(igraci);

        this.listaIgraca.forEach((igrac, index) => {igrac.crtajIgraca(igraci);})
    }
}