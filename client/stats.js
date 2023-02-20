export class Stats{
    constructor(nazivTima, grad, tblMesto, urlSlike){
        if(nazivTima){
            this.imeTima = nazivTima;
        }
        else{
            this.imeTima = "Default";
        }
        if(grad){
            this.grad = grad;
        }
        else{
            this.grad = "Default";
        }
        if(tblMesto){
            this.tblMesto = tblMesto;
        }
        else{
            this.tblMesto = "Default";
        }
        if(urlSlike){
            this.urlSlike = urlSlike;
        }
        else{
            this.urlSlike = "IMG";
        }

        this.container = null;
    }

    crtajStats(gde){
        this.container = document.createElement('div');
        this.container.className = "stats";
        gde.appendChild(this.container);

        let imgDiv = document.createElement('div');
        imgDiv.className = "img-div";
        this.container.appendChild(imgDiv);

        let statsDiv = document.createElement('div');
        statsDiv.className = "stats-div";
        this.container.appendChild(statsDiv);

        let slikaTima = document.createElement('img');
        slikaTima.className = "slika-tima";
        slikaTima.src(this.urlSlike);
        imgDiv.appendChild(slikaTima);  
        
        let stats = document.createElement('p');
        stats.className = "stats-tima";
        stats.textContent = this.imeTima + "\br City: " + this.grad + "\br #" + this.tblMesto;
        statsDiv.appendChild(stats);
    }
}