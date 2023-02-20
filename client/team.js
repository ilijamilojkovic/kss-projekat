export class Team{
    constructor(idTima, nazivTima, urlSlike, listaIgraca){
         if(idTima){
            this.id = idTima;
        }
        else{
            this.id = "Default";
        }
        if(nazivTima){
            this.naziv = nazivTima;
        }
        else{
            this.naziv = "Default";
        }
        if(urlSlike){
            this.urlSlike = urlSlike;
        }
        else{
            this.urlSlike = "IMG";
        }
        if(listaIgraca){
            this.igraci = listaIgraca;
        }
        this.container = null;
    }

    crtajTim(gde){
        this.container = document.createElement('div');
        this.container.className = "tim";
        gde.appendChild(this.container);

        let levi =document.createElement('div');
        levi.className = "levi-tim";
        this.container.appendChild(levi);

        let desni =document.createElement('div');
        levi.className = "desni-tim";
        this.container.appendChild(desni);

        let slikaTima = document.createElement('img');
        slikaTima.className = "slika-Tima";
        slikaTima.src = this.urlSlike;
        this.container.appendChild(slikaTima);

        let nazivTima = document.createElement('a');
        nazivTima.className = "naziv-Tima";
        nazivTima.href = "#";
        nazivTima.innerHTML = this.imeTima;
        this.container.appendChild(nazivTima);
    }
}
