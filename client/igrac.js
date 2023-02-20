export class Igrac{
    constructor(ime, prezime, datumRodjenja, brojDresa, urlSlike){
        if(ime){
            this.ime = ime;
        }
        else{
            this.ime = "N";
        }
        if(prezime){
            this.prezime = prezime;
        }
        else{
            this.prezime = "N";
        }
        if(datumRodjenja){
            this.datumRodjenja = datumRodjenja;
        }
        else{
            this.datumRodjenja = "N";
        }
        if(brojDresa){
            this.brojDresa = brojDresa;
        }
        else{
            this.brojDresa = "#";
        }
        if(urlSlike){
            this.urlSlike = urlSlike;
        }
        else{
            this.urlSlike = "IMG";
        }

        this.container = null;
    }

    crtajIgraca(gde){
        this.container = document.createElement('div');
        this.container.className = "igrac";
        gde.appendChild(this.container);

        let slikaDiv = document.createElement('div');
        slikaDiv.className = "slika-div";
        this.container.appendChild(slikaDiv);

        let imeDiv = document.createElement('div');
        imeDiv.className = "ime-div";
        this.container.appendChild(imeDiv);

        let brDiv = document.createElement('div');
        brDiv.className = "br-div";
        this.container.appendChild(brDiv);

        let slikaIgraca = document.createElement('img');
        slikaIgraca.className = "slika-Igraca";
        slikaIgraca.src(this.urlSlike);
        slikaDiv.appendChild(slikaIgraca);

        let imeIgraca = document.createElement('label');
        imeIgraca.className = "ime-Igraca";
        imeIgraca.innerHTML = this.ime;
        imeDiv.appendChild(imeIgraca);

        let prezimeIgraca = document.createElement('label');
        prezimeIgraca.className = "prezime-igraca";
        prezimeIgraca.innerHTML = this.prezime;
        imeDiv.appendChild(prezimeIgraca);

        let brIgraca = document.createElement('lab');
        brIgraca.className = "br-igraca";
        brIgraca.innerHTML = "# " + this.brojDresa;
        brDiv.appendChild(brIgraca);
    }
}