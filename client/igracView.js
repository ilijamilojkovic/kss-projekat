import { Team } from "./team.js";
import { Igrac } from "./igrac.js";


export class IgracView{

    constructor(celaStrana, objekat){
        this.celaStrana = celaStrana;
        this.objekat = objekat;
        this.body = document.getElementsByTagName('body')[0];
    }

    crtajMalogIgraca(gde){
        var NazivIme = this.objekat.ime;
        var NazivPrezime = this.objekat.prezime;
        var NazivBrDresa = this.objekat.brDresa;
        var NazivUrlSlike = this.objekat.urlSlike;
    
        var podatak = document.createElement('div');
        podatak.className = "podatak";
        podatak.id = this.objekat.id;
        this.celaStrana.appendChild(podatak);

        var podaci = document.createElement('div');
        podaci.className = "podaci";
        podaci.id = this.objekat.id;
        podatak.appendChild(podaci);

        var ime = document.createElement('p');
        ime.innerHTML = this.objekat.ime;
        podaci.appendChild(ime);

        var prezime =  document.createElement('p');
        prezime.innerHTML = this.objekat.prezime;
        podaci.appendChild(prezime);

        var datumRodjenja =  document.createElement('p');
        datumRodjenja.innerHTML = this.objekat.datumRodjenja;
        podaci.appendChild(datumRodjenja);
        
        var brDresa =  document.createElement('p');
        brDresa.innerHTML = this.objekat.brDresa;
        podaci.appendChild(brDresa);

        var urlSlike =  document.createElement('p');
        urlSlike.innerHTML = this.objekat.urlSlike;
        podaci.appendChild(urlSlike);

        podatak.addEventListener('click', function()
        {
            const body = document.getElementsByTagName("body")[0];
            while(body.children.length > 0)
                body.removeChild(body.children[0]);
            var maliDiv = document.createElement("div");
            maliDiv.className = "maliDiv";
            var dugmeZaBrisanje = document.createElement("button");
            dugmeZaBrisanje.className = "dugm";
            dugmeZaBrisanje.innerHTML = "Obriši igraca";
            var dugmeZaEdit = document.createElement("button");
            dugmeZaEdit.className = "dugme";
            dugmeZaEdit.innerHTML = "Izmeni igraca";
            maliDiv.appendChild(dugmeZaBrisanje);
            maliDiv.appendChild(dugmeZaEdit);
            body.appendChild(maliDiv);

            dugmeZaEdit.addEventListener("click", function()
            {
                const body = document.getElementsByTagName("body")[0];
                while(body.children.length > 0)
                    body.removeChild(body.children[0]);

                var strana = document.createElement("div");
                strana.className = "stranica";    
                
                var forma = document.createElement("form");
                forma.className = "formica";

                var unesiIme = document.createElement("input");
                unesiIme.type = "text";
                unesiIme.placeholder = "Ime igrača";
                unesiIme.value = NazivIme;

                var unesiPrezime = document.createElement("input");
                unesiPrezime.type = "text";
                unesiPrezime.placeholder = "Unesite Prezime!";
                unesiPrezime.value = NazivPrezime;

                var unesiBrDresa = document.createElement("input");
                unesiBrDresa.type = "text";
                unesiBrDresa.placeholder = "Broj Vašeg dresa";
                unesiBrDresa.value = NazivBrDresa;

                var unesiUrlSlike = document.createElement("input");
                unesiUrlSlike.type = "text";
                unesiUrlSlike.placeholder = "Unesite url slike!";
                unesiUrlSlike.value = NazivUrlSlike;
                
                const prviDiv = document.createElement("div");
                prviDiv.className = "divovi";
                const drugiDiv = document.createElement("div");
                drugiDiv.className = "divovi";

                var vratiSe = document.createElement("button");
                vratiSe.className = "dugme";
                vratiSe.innerHTML = "Vrati se na početnu!";
                vratiSe.addEventListener("click", function(){
                    location.reload();
                })

                var dodajIgracaButton = document.createElement("button");
                dodajIgracaButton.innerHTML = "Dodaj igraca";
                dodajIgracaButton.className = "dugme";
                dodajIgracaButton.id = "dodaj";
                
                prviDiv.appendChild(dodajIgracaButton);
                drugiDiv.appendChild(vratiSe);
                

                strana.appendChild(forma);
                forma.appendChild(unesiIme);
                forma.appendChild(unesiPrezime);
                forma.appendChild(unesiBrDresa);
                forma.appendChild(unesiUrlSlike);
                forma.appendChild(prviDiv);
                strana.appendChild(drugiDiv);
                body.appendChild(strana);
                

                forma.addEventListener("submit",function(e){
                    e.preventDefault();
                    var data;
                    data = {
                        ime: forma.children[0].value,
                        prezime: forma.children[1].value,
                        brDresa: forma.children[2].value,
                        urlSlike: forma.children[3].value
                    }
                    fetch("http://localhost:8000/igracRoutes" + "/" + podatak.id, {
                    method: "PATCH",
                    headers: {
                        "Content-Type" : "application/json"
                    },
                    body: JSON.stringify(
                        data
                    )
                }).then(s => {
                    if(s.ok){
                        console.log("Proslo");
                    }
                    else{
                        console.log(s);
                    }
                });
                    return false;
                });
                
            })
        })

        dugmeZaBrisanje.addEventListener("click", function(){

            fetch("http://localhost:5000/api/IzgubljeneZivotinje/" + podatak.id, {
                method: "DELETE",
                headers: {
                    "Content-Type" : "application/json"
                }
            }).then(s => {
                if(s.ok){
                    console.log("Proslo");
                }
                else{
                    console.log(s);
                }
            });
    })}
    /*crtajTimView(gde){
        var naziv = this.objekat.naziv;
        var urlSlike = this.objekat.urlSlike;

        var headerLiga = document.createElement('div');
        headerLiga.className = "header-liga";
        this.celaStrana.appendChild(headerLiga);

        var podatak = document.createElement('div');
        podatak.className = "podatak";
        podatak.id = this.objekat.id;
        this.celaStrana.appendChild(podatak);

        var footerLiga = document.createElement('div');
        footerLiga.className = "footer-liga";
        this.celaStrana.appendChild(footerLiga);

        var levi =document.createElement('div');
        levi.className = "levi-tim";
        podatak.appendChild(levi);

        var desni =document.createElement('div');
        desni.className = "desni-tim";
        podatak.appendChild(desni);

        var slikaTima = document.createElement('img');
        slikaTima.className = "slika-Tima";
        slikaTima.src = this.objekat.urlSlike;
        desni.appendChild(slikaTima);

        var nazivTima = document.createElement('p');
        slikaTima.className = "naziv-Tima";
        nazivTima.innerHTML = this.objekat.naziv;
        desni.appendChild(nazivTima);

        this.container = document.createElement('div');
        this.container.className = "tim";
        gde.appendChild(this.container);
    }*/

}