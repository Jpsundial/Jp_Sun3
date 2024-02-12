"use strict";

let i = 1;
let n = 1;

const Diapo = document.querySelector(".epure");
const Compteur = document.querySelector("#compteur");
const Legende = document.querySelector("#legende");
const btn1 = document.getElementById("bouton");
//const btn1 = document.getElementById("submit");
const btn2 = document.getElementById("start");
const btn3 = document.getElementById("back");
//0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
var D_arr = new Array();// "D" pour DIAPOSITIVE.
D_arr[0] = document.querySelector(".D1");
D_arr[1] = document.querySelector(".D2");
D_arr[2] = document.querySelector(".D3");
D_arr[3] = document.querySelector(".D4");
D_arr[4] = document.querySelector(".D5");
D_arr[5] = document.querySelector(".D6");
D_arr[6] = document.querySelector(".D7");
D_arr[7] = document.querySelector(".D8");
D_arr[8] = document.querySelector(".D9");
D_arr[9] = document.querySelector(".D10");
D_arr[10] = document.querySelector(".D11");
D_arr[11] = document.querySelector(".D12");
D_arr[12] = document.querySelector(".D13");
D_arr[13] = document.querySelector(".D14");
D_arr[14] = document.querySelector(".D15");
D_arr[15] = document.querySelector(".D16");
D_arr[16] = document.querySelector(".D17");
D_arr[17] = document.querySelector(".D18");
D_arr[18] = document.querySelector(".D19");
D_arr[19] = document.querySelector(".D20");
D_arr[20] = document.querySelector(".D21");
D_arr[21] = document.querySelector(".D22");
D_arr[22] = document.querySelector(".D23");
D_arr[23] = document.querySelector(".D24");
D_arr[24] = document.querySelector(".D25");
//0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
var C_arr = new Array();// "C" pour COMPTEUR.
for (i = 1; i <= 25; i++, n++)
    if (n < 10) { C_arr[i - 1] = "0" + [n] + "/25" }
    else { C_arr[i - 1] = [n] + "/25" };
//0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
var L_arr = new Array()// "L" pour LEGENDE.
L_arr[0] = " Données brutes et courbes d'égales déclinaisons ( de bleu solstice d'hiver à rouge solstice d'été ).";
L_arr[1] = " Données brutes: courbes d'égales déclinaisons monochromes et méridienne de temps moyen.";
L_arr[2] = " Focus sur la méridienne de temps moyens.";
L_arr[3] = " Méridienne de temps moyen avec droites horaires des minutes.";
L_arr[4] = " Données brutes, heures temporaires, heures babyloniques et heures italiques.";
L_arr[5] = " Données brutes et table du cadran paramètrée.";
L_arr[6] = " Focus sur la table du cadran.";
L_arr[7] = " Heures moyennes: année complète.";
L_arr[8] = " Heures moyennes: hiver et printemps.";
L_arr[9] = " Heures moyennes: été et automne.";
L_arr[10] = " Heures temporaires.";
L_arr[11] = " Focus sur les heures temporaires.";
L_arr[12] = " Heures babyloniques.";
L_arr[13] = " Focus sur les heures babyloniques.";
L_arr[14] = " Heures italiques.";
L_arr[15] = " Focus sur les heures italiques.";
L_arr[16] = " Heures sidérales: année complète.";
L_arr[17] = " Heures sidérales: hiver et printemps.";
L_arr[18] = " Heures sidérales: été et automne.";
L_arr[19] = " Coordonnées horizontales du soleil: azimuts et hauteurs.";
L_arr[20] = " Coordonnées horizontales du soleil: droites d'azimuts.";
L_arr[21] = " Coordonnées horizontales du soleil: courbes de hauteurs.";
L_arr[22] = " Courbe de correction pour l'équation du temps.";
L_arr[23] = " Dimensions d'un style triangulaire.";
L_arr[24] = " Style droit pour les heures temporaires, babyloniques, italiques, sidérales et coordonnées polaires.";
//0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
//btn1.onclick = () => document.body.style.backgroundColor = "red";//OK_
//0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
i = 0
function imgSuivante() {
    if (i <= 23) {
        (i++)
        Compteur.innerHTML = C_arr[i];
        Legende.innerHTML = L_arr[i];
    }
    Diapo.innerHTML = D_arr[i].innerHTML
    return
}
btn2.onclick = () => imgSuivante();
//0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
function imgPrécédente() {
    if (i > 0) {
        (i--)
        Compteur.innerHTML = C_arr[i];
        Legende.innerHTML = L_arr[i];
    }
    Diapo.innerHTML = D_arr[i].innerHTML
    return
}
btn3.onclick = () => imgPrécédente();
//0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000