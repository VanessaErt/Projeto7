// Inicializa o carrossel
var myCarousel = document.getElementById('carouselExampleIndicators');
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 3000, // Define o intervalo de 3 segundos
    wrap: true // Permite que o carrossel volte ao início após a última imagem
});