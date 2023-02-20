export class Konferencija{
    constructor(naziv){
        if(naziv){
            this.naziv = naziv;
        }
        else{
            this.naziv = "Default";
        }
        this.listaTimova = [];
        this.container = null;
    }

    dodajTim(team){
        this.listaTimova.push(team);
    }

    crtajKonferenciju(gde){
        this.container = document.createElement('div');
        this.container.className = "konferencija";
        gde.appendChild(this.container);
        
        let up = document.createElement('div');
        up.className = "up-konf";
        this.container.appendChild(up);

        let down = document.createElement('div');
        down.className = "down-konf";
        this.container.appendChild(down);

        let nazivKonferencije = document.createElement('h3');
        nazivKonferencije.innerHTML = this.naziv;
        nazivKonferencije.className = "naziv-konferencije";
        up.appendChild(nazivKonferencije);

        let timovi = document.createElement('div');
        timovi.className = "timovi";
        down.appendChild(timovi);

        this.listaTimova.forEach((team, index) => {team.crtajTim(timovi);})
    }
}