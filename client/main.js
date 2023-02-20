import { Liga } from './liga.js';
import { Konferencija } from './konferencija.js';
import { Team } from './team.js';
import { TimInfo } from './timInfo.js';

let liga = new Liga("NBA", "https://cdn.freebiesupply.com/images/large/2x/nba-logo-transparent.png");

let konferencija1 = new Konferencija("East");
let konferencija2 = new Konferencija("West");

let team1 = new Team("63f133a85f640b7510c459e7","Boston Celtics","https://cdn.nba.com/logos/nba/1610612738/global/L/logo.svg");
let team2 = new Team("Milwaukee Bucks","https://cdn.nba.com/logos/nba/1610612749/global/L/logo.svg");
let team3 = new Team("Miami Heat","https://cdn.nba.com/logos/nba/1610612748/global/L/logo.svg");
let team4 = new Team("Denver Nuggets","https://cdn.nba.com/logos/nba/1610612743/global/L/logo.svg");
let team5 = new Team("Los Angeles Lakers","https://cdn.nba.com/logos/nba/1610612747/global/L/logo.svg");
let team6 = new Team("Golden State Warriors","https://cdn.nba.com/logos/nba/1610612744/global/L/logo.svg");

konferencija1.dodajTim(team1);
konferencija1.dodajTim(team2);
konferencija1.dodajTim(team3);
konferencija2.dodajTim(team4);
konferencija2.dodajTim(team5);
konferencija2.dodajTim(team6);

liga.dodajKonferenciju(konferencija1);
liga.dodajKonferenciju(konferencija2);

//liga.crtajLigu(document.body);
var a = new TimInfo(document.body, team1);
a.crtajTimInfo();
