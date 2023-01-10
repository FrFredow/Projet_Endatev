const categorie = document.getElementsByClassName("categorie")
const categorie2 = document.getElementsByClassName("categorie2")
const categorie3 = document.getElementsByClassName("categorie3")
const categorie4 = document.getElementsByClassName("categorie4")
const paragraphe1 = document.getElementById("texte-changeant1")
const paragraphe2 = document.getElementById("texte-changeant2")
const paragraphe3 = document.getElementById("texte-changeant3")
const paragraphe4 = document.getElementById("texte-changeant4")

categorie[0].addEventListener("click", () => {
    paragraphe1.innerHTML = "Les horaires sont de 1h a 2h";
})
categorie[1].addEventListener("click", () => {
    paragraphe1.innerHTML = "Ce job est rémunéré à ... euros";
})
categorie[2].addEventListener("click", () => {
    paragraphe1.innerHTML = "Les avantages sont: ";
})
categorie[3].addEventListener("click", () => {
    paragraphe1.innerHTML = "Ce job consiste en ... ";
})

categorie2[0].addEventListener("click", () => {
    paragraphe2.innerHTML = "Les horaires sont de 3h a 4h";
})
categorie2[1].addEventListener("click", () => {
    paragraphe2.innerHTML = "Ce job est rémunéré à ... euros";
})
categorie2[2].addEventListener("click", () => {
    paragraphe2.innerHTML = "Les avantages sont: ";
})
categorie2[3].addEventListener("click", () => {
    paragraphe2.innerHTML = "Ce job consiste en ... ";
})

categorie3[0].addEventListener("click", () => {
    paragraphe3.innerHTML = "Les horaires sont de 5h a 6h";
})
categorie3[1].addEventListener("click", () => {
    paragraphe3.innerHTML = "Ce job est rémunéré à ... euros";
})
categorie3[2].addEventListener("click", () => {
    paragraphe3.innerHTML = "Les avantages sont: ";
})
categorie3[3].addEventListener("click", () => {
    paragraphe3.innerHTML = "Ce job consiste en ... ";
})

categorie4[0].addEventListener("click", () => {
    paragraphe4.innerHTML = "Les horaires sont de 7h a 8h";
})
categorie4[1].addEventListener("click", () => {
    paragraphe4.innerHTML = "Ce job est rémunéré à ... euros";
})
categorie4[2].addEventListener("click", () => {
    paragraphe4.innerHTML = "Les avantages sont: ";
})
categorie4[3].addEventListener("click", () => {
    paragraphe4.innerHTML = "Ce job consiste en ... ";
})