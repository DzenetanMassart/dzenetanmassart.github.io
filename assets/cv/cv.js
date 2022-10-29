/*
|==========================================|
| La détection du type de métier à montrer |
|==========================================|
*/
const url_o = window.location.href;
let url_result = url_o.substring(url_o.lastIndexOf("#") + 1);
console.log(url_o)
console.log(url_result);

document.addEventListener("DOMContentLoaded", function() {
    if (url_result === "") {
        document.title = "CV Général - Dzénetan Massart";
        document.getElementById("met").innerText = "";
        tD.style.display = "inline-block";
        video.style.display = "inline-block";
        photo.style.display = "inline-block";
        Gi.style.display = "inline-block";
        mep.style.display = "inline-block";
        optiweb.style.display = "inline-block";
        tdd.style.display = "inline-block";
        coding.style.display = "inline-block";
    };
    if (url_result === "VideoMaker") {
        document.title = "CV Video Maker - Dzénetan Massart";
        document.getElementById("met").innerText = "Pour " + "Video Maker";
        tD.style.display = "inline-block";
        video.style.display = "inline-block";
        photo.style.display = "inline-block";
        Gi.style.display = "inline-block";
        mep.style.display = "inline-block";
        optiweb.style.display = "none";
        tdd.style.display = "none";
        coding.style.display = "none";
    };
    if (url_result === "Photographie") {
        document.title = "CV Photographie - Dzénetan Massart";
        document.getElementById("met").innerText = "Pour " + "Photographie";
        tD.style.display = "none";
        video.style.display = "none";
        photo.style.display = "inline-block";
        Gi.style.display = "inline-block";
        mep.style.display = "none";
        optiweb.style.display = "none";
        tdd.style.display = "none";
        coding.style.display = "none";
    };
    if (url_result === "CommunityManager") {
        document.title = "CV Community Manager - Dzénetan Massart";
        document.getElementById("met").innerText = "Pour " + "Community Manager";
        tD.style.display = "inline-block";
        video.style.display = "inline-block";
        photo.style.display = "inline-block";
        Gi.style.display = "inline-block";
        mep.style.display = "inline-block";
        optiweb.style.display = "inline-block";
        tdd.style.display = "inline-block";
        coding.style.display = "inline-block";
    };
    if (url_result === "EmployeDeServices") {
        document.title = "CV Employé de Services - Dzénetan Massart";
        document.getElementById("met").innerText = "Pour " + "Employé de Services";
        tD.style.display = "none";
        video.style.display = "none";
        photo.style.display = "none";
        Gi.style.display = "none";
        mep.style.display = "inline-block";
        optiweb.style.display = "none";
        tdd.style.display = "inline-block";
        coding.style.display = "none";
    };
    if (url_result === "CodeurJavascript") {
        document.title = "CV Codeur Javascript - Dzénetan Massart";
        document.getElementById("met").innerText = "Pour " + "Codeur Javascript";
        tD.style.display = "none";
        video.style.display = "none";
        photo.style.display = "none";
        Gi.style.display = "none";
        mep.style.display = "none";
        optiweb.style.display = "none";
        tdd.style.display = "none";
        coding.style.display = "inline-block";
    };


});


/*
|==========================================|
|         Le type de métier montré         |
|==========================================|
*/
const colorisation = function() {
    const tD = document.getElementById("tD");
    const video = document.getElementById("video");
    const photo = document.getElementById("photo");
    const Gi = document.getElementById("Gi");
    const mep = document.getElementById("mep");
    const optiweb = document.getElementById("optiweb");
    const tdd = document.getElementById("tdd");
    const coding = document.getElementById("coding");
    tD.style.backgroundColor = "red";
    video.style.backgroundColor = "red";
    photo.style.backgroundColor = "black";
    Gi.style.backgroundColor = "black";
    mep.style.backgroundColor = "#4c85bd";
    optiweb.style.backgroundColor = "#4c85bd";
    tdd.style.backgroundColor = "#4c85bd";
    coding.style.backgroundColor = "yellow";
    coding.style.color = "black";
}
colorisation()


document.getElementById('metier').addEventListener('change', function() {




    switch (this.value) {
        case "Video Maker":
            document.title = "CV Video Maker - Dzénetan Massart";
            document.getElementById("met").innerText = "Pour " + this.value;
            tD.style.display = "inline-block";
            video.style.display = "inline-block";
            photo.style.display = "inline-block";
            Gi.style.display = "inline-block";
            mep.style.display = "inline-block";
            optiweb.style.display = "none";
            tdd.style.display = "none";
            coding.style.display = "none";
            window.location.href = url_o + "#" + this.value.replace(/ /g, '');

            break;
        case "Photographe":
            document.title = "CV Photographie - Dzénetan Massart";
            document.getElementById("met").innerText = "Pour " + this.value;
            tD.style.display = "none";
            video.style.display = "none";
            photo.style.display = "inline-block";
            Gi.style.display = "inline-block";
            mep.style.display = "none";
            optiweb.style.display = "none";
            tdd.style.display = "none";
            coding.style.display = "none";
            window.location.href = url_o + "#" + this.value.replace(/ /g, '');

            break;
        case "Community Manager":
            document.title = "CV Community Manager - Dzénetan Massart";
            document.getElementById("met").innerText = "Pour " + this.value;
            tD.style.display = "inline-block";
            video.style.display = "inline-block";
            photo.style.display = "inline-block";
            Gi.style.display = "inline-block";
            mep.style.display = "inline-block";
            optiweb.style.display = "inline-block";
            tdd.style.display = "inline-block";
            coding.style.display = "inline-block";
            window.location.href = url_o + "#" + this.value.replace(/ /g, '');

            break;
        case "Employé de Services":
            document.title = "CV Employé de Services - Dzénetan Massart";
            document.getElementById("met").innerText = "Pour " + this.value;
            tD.style.display = "none";
            video.style.display = "none";
            photo.style.display = "none";
            Gi.style.display = "none";
            mep.style.display = "inline-block";
            optiweb.style.display = "none";
            tdd.style.display = "inline-block";
            coding.style.display = "none";
            window.location.href = url_o + "#" + this.value.replace(/ /g, '');

            break;
        case "Codeur Javascript":
            document.title = "CV Codeur Javascript - Dzénetan Massart";
            document.getElementById("met").innerText = "Pour " + this.value;
            tD.style.display = "none";
            video.style.display = "none";
            photo.style.display = "none";
            Gi.style.display = "none";
            mep.style.display = "none";
            optiweb.style.display = "none";
            tdd.style.display = "none";
            coding.style.display = "inline-block";
            window.location.href = url_o + "#" + this.value.replace(/ /g, '');

            break;
        default:
            document.title = "CV Général - Dzénetan Massart";
            document.getElementById("met").innerText = "";
            tD.style.display = "inline-block";
            video.style.display = "inline-block";
            photo.style.display = "inline-block";
            Gi.style.display = "inline-block";
            mep.style.display = "inline-block";
            optiweb.style.display = "inline-block";
            tdd.style.display = "inline-block";
            coding.style.display = "inline-block";
            window.location.href = url_o + "#" + this.value.replace(/ /g, '');


    }
});