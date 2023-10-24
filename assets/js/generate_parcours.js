let generate_parc = " ";



for (let iii = 0; iii < parcours.length; iii++) {
    let parci = (parcours[iii]);

    generate_parc += '<article  id="#' + parci.alt + '">';
    generate_parc += '<div style="background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(255,255,255,0) 100%), url(' + img_link[iii] +'.webp );">';
    generate_parc +='<img src="' + img_link[iii] + '.webp" alt="' + parci.alt + '">';
    generate_parc +='</div><div>';
    generate_parc +='<h3>' + parci.title + '</h3>';
    generate_parc += '<p>' + parci.para1 + '<p>';

    if (parci.para2 != undefined) {
        generate_parc += '<p>' + parci.para2 + '<p>';
    }
    if (parci.para3 != undefined) {
        generate_parc += '<p>' + parci.para3 + '<p>';
    }
    if (parci.para4 != undefined) {
        generate_parc += '<p>' + parci.para4 + '<p>';
    }


    generate_parc += '</div></article>';
}

document.getElementById("parc").innerHTML += generate_parc;