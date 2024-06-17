function main() {
    let article = document.getElementById("home");
    article.style.display = "initial";

    const articles = ["home", "redes", "logica"];
    for (let name of articles) {
        const link = document.getElementById("a-" + name);
        link.addEventListener("click", () => {
            const new_article = document.getElementById(name);
            if (article !== new_article) {
                article.style.display = "none";
                article = new_article;
                article.style.display = "initial";
            }
        });
    }
}
