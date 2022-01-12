/* Le parcours en lien d'image */
const img_link = [
    "assets/image/parcours/2007.png",
    "assets/image/parcours/2008.png",
    "assets/image/parcours/2010.png",
    "assets/image/parcours/2011.png",
    "assets/image/parcours/2014.png",
    "assets/image/parcours/2016.png",
    "assets/image/parcours/2019.png",
    "assets/image/parcours/2020.png",
    "assets/image/parcours/2021.png"
];

/* Le parcours en texte */
const parcours = [{
    "alt": "PaintXP",
    "title": "2007: L'image",
    "para1": "C'est en 2007 que je commence à m'amuser avec <a target='_blank' href='https://www.01net.com/telecharger/windows/Multimedia/creation_graphique/fiches/111091.html'>Paint de WindowsXP</a> et où j'ai commencé à faire des montages-photos et du dessin.",
    "para2": "<a target='_blank' href='https://www.commentcamarche.net/telecharger/photo-graphisme/17729-picasa/'>Picasa</a> sera également employé pour pallier le manque d'effet de traitement visuel."
}, {
    "alt": "Windows Movie Maker",
    "title": "2008: La vidéo",
    "para1": "C'est en Avril 2008 que je commence à m'amuser avec <a target='_blank' href='https://windows-movie-maker.fr.softonic.com/?utm_source=google&utm_medium=paid&utm_campaign=Google_FR_DSA_CPA&gclid=Cj0KCQiAqbyNBhC2ARIsALDwAsCB2h-gTw9TAvrulVxOHINyCqjy5zJj5KGwVoxjL5NLGlW73OUDssgaAvVaEALw_wcB'>Windows Movie Maker</a> et où j'ai commencé à faire des YouTube Poop et des podcasts.",
    "para2": "<a target='_blank' href='https://www.audacityteam.org/'>Audacity</a> sera également employé pour pallier le manque d'effet de traitement audio."
}, {
    "alt": "Google SketchUp",
    "title": "2010: La 3D",
    "para1": "C'est en Novembre 2010 que je commence à m'amuser avec <a target='_blank' href='https://www.sketchup.com/fr'>Google SketchUp</a> et où j'ai commencé à faire des mises en scène en 3D.",
}, {
    "alt": "Magix Video Deluxe et PaintDotNet",
    "title": "2011: Magix Video Deluxe et PaintDotNet",
    "para1": "C'est en Juillet 2011 que je commence à me séparer de Windows Movie Maker et de Paint pour bien plus puissant et donc moins contraignant : <a target='_blank' href='https://www.magix.com/fr-be/montage-video/video-deluxe/'>Magix Video Deluxe</a> et <a target='_blank' href='https://www.getpaint.net/download.html'>Paint.NET</a>",
    "para2": "<a target='_blank' href='https://www.gimp.org/'>TheGimp</a> fera également partie des logiciels que j'emploie mais seulement pour la création et la modification de gif animé."
}, {
    "alt": "Photoshop",
    "title": "2014: Photoshop CS6",
    "para1": "C'est en 2014 que je me tourne vers la suite Adobe pour <a target='_blank' href='https://www.adobe.com/be_fr/products/photoshop.html?mv=search&mv=search&sdid=LZ32SYVR&ef_id=Cj0KCQiAqbyNBhC2ARIsALDwAsAG5J89XYKqcbqtSurfCbrp3SsVW5lIEEj5DiCLfQdx-8vxhClxqK0aAveSEALw_wcB:G:s&s_kwcid=AL!3085!3!341214949579!e!!g!!adobe%20photoshop!1438212189!56311763455&gclid=Cj0KCQiAqbyNBhC2ARIsALDwAsAG5J89XYKqcbqtSurfCbrp3SsVW5lIEEj5DiCLfQdx-8vxhClxqK0aAveSEALw_wcB'>Photoshop</a> afin de pouvoir faire certains effets non disponibles sur PaintDotNet et Magix Video Deluxe.",
    "para2": "Je me sépare de TheGimp pour des raisons de lenteur et de doublon avec PaintDotNet et Photoshop."
}, {
    "alt": "Adobe Illustraor, After Effect & InDesign. Autodesk 3DSmax, Maya. ",
    "title": "2016: Illustrator, After Effect , InDesign , 3DSmax et Maya",
    "para1": "C'est en 2016, à la Haute École Albert Jacquard ( HEAJ ) en section \"infographie\" que j'apprends à me servir du reste de <a target='_blank' href='https://www.adobe.com/be_fr/'>la suite Adobe</a> et que je découvre <a target='_blank' href='https://www.autodesk.be/fr'>la suite d'Autodesk.</a>",
    "para2": "Je me sépare de TheGimp pour des raisons de lenteur et de doublon avec PaintDotNet et Photoshop.",
    "para3": "Je fais la rencontre du logiciel <a target='_blank' href='https://notepad-plus-plus.org/downloads/'>Notepad++</a> en cours de Javascript et je m'en sers pour commencer à créer des petites pages en HTML de temps en temps."
}, {
    "alt": "Adobe Premiere Pro CS6 & Visual Studio Code",
    "title": "2019: Adobe Premiere Pro et Visual Studio Code",
    "para1": "C'est en 2019 , suite à la perte de Magix Video Deluxe suite à un problème de ré-installation, que je passe enfin à <a target='_blank' href='https://www.adobe.com/be_fr/products/premiere.html?promoid=PQ7SQBYQ&mv=other'>Adobe Premiere Pro</a> qui me permet de faire des vidéos avec encore plus d'ambition de part son système d'imbrication et ses effets multiples et polyvalents. C'est aussi cette année-là où je fais ma formation à BeCode où j'apprends à me servir de Visual Studio Code pour coder mon site web, des applications et même rédiger mon C.V. .",
    "para2": "Je me sépare de Notepad++ devenu inutile face à la machine à gaz qu'est mon <a target='_blank' href='https://code.visualstudio.com/'>Visual Studio Code</a>."
}, {
    "alt": "OBS Studio",
    "title": "2020: OBS Studio",
    "para1": "C'est en 2020 , afin d'optimiser mes captures d'écrans et ainsi faire des tutoriels beaucoup plus fluides, que je me suis procuré le logiciel <a target='_blank' href='https://obsproject.com/fr'>OBS studio</a> .",
    "para2": "Je fais la rencontre du logiciel <a target='_blank' href='https://firealpaca.fr.softonic.com/?utm_source=google&utm_medium=paid&utm_campaign=Google_FR_DSA_CPA&gclid=Cj0KCQiAqbyNBhC2ARIsALDwAsCA07V21eoxam_Wqfpqbwv9T-qWxSOG1p9gfrM1J1trBxUsfMXMY5caAj-KEALw_wcB'>FireAlpaca</a> qui est compatible avec ma tablette graphique contrairement à mon Adobe Photoshop CS6."
}, {
    "alt": "Word & Excel",
    "title": "2021: Word et Excel",
    "para1": "C'est en 2021 , lors de ma formation d'Employé de Service , que j'ai appris à employé de manière professionelle <a target='_blank' href='https://www.microsoft.com/fr-be/microsoft-365/word'>Word</a> et <a target='_blank' href='https://www.microsoft.com/fr-be/microsoft-365/excel'>Excel</a>.",
    "para2": "Bien sur, j'employais déjà Word avant pour écire mes vidéos et j'avais déjà eût une initiation à Excel en année secondaire."
}];