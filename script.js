const imagens = [
    "./imagens/encarada.jpg",
    "./imagens/sapeca.jpg",
    "./imagens/sorrindo.jpg"
];

document.getElementById("btn-galeria").addEventListener("click", () => {
    const galeria = document.getElementById("imagens-galeria");
    
    galeria.innerHTML = "";
    imagens.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Foto de Cachorro"; 
        
        // Adiciona a imagem dentro da div da galeria
        galeria.appendChild(img);
    });
});