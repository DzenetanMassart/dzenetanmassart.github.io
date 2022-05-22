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
            document.getElementById("met").innerText = "Pour " + this.value;
            tD.style.display = "inline-block";
            video.style.display = "inline-block";
            photo.style.display = "inline-block";
            Gi.style.display = "inline-block";
            mep.style.display = "inline-block";
            optiweb.style.display = "none";
            tdd.style.display = "none";
            coding.style.display = "none";
            break;
        case "Photographe":
            document.getElementById("met").innerText = "Pour " + this.value;
            tD.style.display = "none";
            video.style.display = "none";
            photo.style.display = "inline-block";
            Gi.style.display = "inline-block";
            mep.style.display = "none";
            optiweb.style.display = "none";
            tdd.style.display = "none";
            coding.style.display = "none";
            break;
        case "Community Manager":
            document.getElementById("met").innerText = "Pour " + this.value;
            tD.style.display = "inline-block";
            video.style.display = "inline-block";
            photo.style.display = "inline-block";
            Gi.style.display = "inline-block";
            mep.style.display = "inline-block";
            optiweb.style.display = "inline-block";
            tdd.style.display = "inline-block";
            coding.style.display = "inline-block";
            break;
        case "Employé de Service":
            document.getElementById("met").innerText = "Pour " + this.value;
            tD.style.display = "none";
            video.style.display = "none";
            photo.style.display = "none";
            Gi.style.display = "none";
            mep.style.display = "inline-block";
            optiweb.style.display = "none";
            tdd.style.display = "inline-block";
            coding.style.display = "none";
            break;
        case "Codeur Javascript":
            document.getElementById("met").innerText = "Pour " + this.value;
            tD.style.display = "none";
            video.style.display = "none";
            photo.style.display = "none";
            Gi.style.display = "none";
            mep.style.display = "none";
            optiweb.style.display = "none";
            tdd.style.display = "none";
            coding.style.display = "inline-block";
            break;
        default:

            document.getElementById("met").innerText = "";
            tD.style.display = "inline-block";
            video.style.display = "inline-block";
            photo.style.display = "inline-block";
            Gi.style.display = "inline-block";
            mep.style.display = "inline-block";
            optiweb.style.display = "inline-block";
            tdd.style.display = "inline-block";
            coding.style.display = "inline-block";

    }
});