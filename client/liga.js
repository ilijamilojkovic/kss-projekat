export class Liga{
    constructor(naziv, urlSlike){
        if(naziv){
            this.naziv = naziv;
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

        this.listKonferencija  = [];
        this.container = null;
    }

    dodajKonferenciju(konferencija){
        this.listKonferencija.push(konferencija);
    }

    crtajLigu(gde){
        this.container = document.createElement('div');
        this.container.className = "liga";
        gde.appendChild(this.container);

        let headerLiga = document.createElement('div');
        headerLiga.className = "header-liga";
        this.container.appendChild(headerLiga);

        let bodyLiga = document.createElement('div');
        bodyLiga.className = "body-liga";
        this.container.appendChild(bodyLiga);

        let footerLiga = document.createElement('div');
        footerLiga.className = "footer-liga";
        this.container.appendChild(footerLiga);

        let slikaLige = document.createElement('img');
        slikaLige.src = this.urlSlike;
        slikaLige.href = "./index.html";
        slikaLige.className = "slika-lige";
        headerLiga.appendChild(slikaLige);

        let nazivLige = document.createElement('a');
        nazivLige.href ="./index.html";
        nazivLige.innerHTML = this.naziv;
        nazivLige.className = "naziv-lige";
        headerLiga.appendChild(nazivLige);

        let konferencije = document.createElement('div');
        konferencije.className = "konferencije";
        bodyLiga.appendChild(konferencije);
        
        this.listKonferencija.forEach((konferencija, index) => {konferencija.crtajKonferenciju(konferencije);})
        
    }
}