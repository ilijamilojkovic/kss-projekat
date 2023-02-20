import { Igrac } from "./igrac.js";
import { IgracView } from "./igracView.js";
export class TimInfo{


    constructor(celaStrana, objekat){
        this.celaStrana = celaStrana;
        this.objekat = objekat;
        this.body = document.getElementsByTagName('body')[0];
    }

    crtajTimInfo(){

        var headerTeamInfo = document.createElement('div');
        headerTeamInfo.className = "header-liga";
        this.celaStrana.appendChild(headerTeamInfo);

        var bodyTeamInfo = document.createElement('div');
        bodyTeamInfo.className = "body-timInfo";
        bodyTeamInfo.id = this.objekat.id;
        this.celaStrana.appendChild(bodyTeamInfo);

        var footerTeamInfo = document.createElement('div');
        footerTeamInfo.className = "footer-liga";
        this.celaStrana.appendChild(footerTeamInfo);

        var bodyLevi = document.createElement('div');
        bodyLevi.className = "levi-bodyTinfo";
        bodyTeamInfo.appendChild(bodyLevi);

        var bodyDesni = document.createElement('div');
        bodyDesni.className = "levi-bodyTinfo";
        bodyTeamInfo.appendChild(bodyDesni);

        var slikaTima = document.createElement('img');
        slikaTima.src = this.objekat.urlSlike;
        slikaTima.className = "slika-Tima";
        bodyDesni.appendChild(slikaTima);

        var pTim = document.createElement('p');
        pTim.className = "p-Tima";
        pTim.innerHTML = this.objekat.naziv;
        bodyDesni.appendChild(pTim);

        fetch("http://localhost:8000/timRoutes" + "/" + bodyTeamInfo.id + "/igraci").then(data => 
            {
                console.log(data);
                data.igraci.forEach(igrac => {
                    const igrac1 = new Igrac(igrac.id, igrac.ime, igrac.prezime, igrac.datumRodjenja, igrac.brDresa, igrac.urlSlike);
                    var i = new IgracView(leviDiv, igrac1);
                    i.IscrtajMalogIgraca();
                });
            })
    }
}