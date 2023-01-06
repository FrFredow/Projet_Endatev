const categorie = document.getElementsByClassName("categorie")
const paragraphe = document.getElementById("texte-changeant1")

categorie[0].addEventListener("click", () => {
    paragraphe.innerHTML = "Les horaires sont de ... a ...";
})
categorie[1].addEventListener("click", () => {
    paragraphe.innerHTML = "Ce job est rémunéré à ... euros";
})
categorie[2].addEventListener("click", () => {
    paragraphe.innerHTML = "Les avantages sont: ";
})
categorie[3].addEventListener("click", () => {
    paragraphe.innerHTML = "Ce job consiste en ... ";
})