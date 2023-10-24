let generate = " ";



for (let ii = 0; ii < app.length; ii++) {
    let apps = (app[ii]);

    generate += '<article><h3>' +
        apps.title +
        '</h3>' +
        '<p>' +
        apps.desc +
        '</p><a target="_blank" href="' +
        apps.link +
        '">S\'y rendre</a></div></article>';
}

document.getElementById("generate").innerHTML += generate;