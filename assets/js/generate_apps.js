let generate = " ";



for (let ii = 0; ii < app.length; ii++) {
    let apps = (app[ii]);

    generate += '<article class="card"><h4 class="card-title"><i class="' + apps.icon + ' "></i> ' +
        apps.title +
        '</h4><span class="badge ' +
        apps.badgestyle +
        '">' +
        apps.badge +
        '</span><div class="card-body"><p class="card-text">' +
        apps.desc +
        '</p><a href="' +
        apps.link +
        '" class="btn btn-primary">Lien</a></div></article>';
}

document.getElementById("generate").innerHTML += generate;