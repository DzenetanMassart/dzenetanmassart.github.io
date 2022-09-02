let generate = " ";



for (let ii = 0; ii < app.length; ii++) {
    let apps = (app[ii]);

    generate += '<article><h4><i class="' + apps.icon + ' "></i> ' +
        apps.title +
        '</h4>' +
        '<p>' +
        apps.desc +
        '</p><a target="_blank" href="' +
        apps.link +
        '">Lien</a></div></article>';
}

document.getElementById("generate").innerHTML += generate;