const url_o = window.location.href;
let url_result = url_o.substring(url_o.lastIndexOf("#") + 1);

document.addEventListener("DOMContentLoaded", function() {
    if (url_result === "") {};
    if (url_result === "Secrétaire") { generator(com) };
    if (url_result === "Infographiste") { generator(video + photo + code) };
    if (url_result === "Codeur") { generator(code) };
    if (url_result === "Monteur") { generator(video) };
    if (url_result === "Photographe") { generator(photo) };
    if (url_result === "CommunityManager") { generator(com) };
    if (url_result === "EmployéDeService") { generator(com) };
    if (url_result === "Vidéaste") { generator(video + photo) };
});