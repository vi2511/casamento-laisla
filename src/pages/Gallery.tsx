import { useState, useEffect } from "react";
import "../styles/gallery.css";

import img1 from "../assets/photos/galery/1.jfif";
import img2 from "../assets/photos/galery/2.jpg";
import img3 from "../assets/photos/galery/3.jpg";
import img4 from "../assets/photos/galery/4.webp";
import img5 from "../assets/photos/galery/5.jpg";
import img6 from "../assets/photos/galery/6.jpg";
import img7 from "../assets/photos/galery/7.jpg";
import img8 from "../assets/photos/galery/8.jfif";
import img9 from "../assets/photos/galery/9.jpg";
import img10 from "../assets/photos/galery/10.webp";
import img11 from "../assets/photos/galery/11.webp";
import img12 from "../assets/photos/galery/12.jfif";
import img13 from "../assets/photos/galery/13.jpg";
import img14 from "../assets/photos/galery/14.jfif";
import img15 from "../assets/photos/galery/15.jfif";

// Imagens do carrossel
const galleryImages = [
    { id: 1, url: img1 },
    { id: 2, url: img2 },
    { id: 3, url: img3 },
    { id: 4, url: img4 },
    { id: 5, url: img5 },
    { id: 6, url: img6 },
    { id: 7, url: img7 },
    { id: 8, url: img8 },
    { id: 9, url: img9 },
    { id: 10, url: img10, },
    { id: 11, url: img11, },
    { id: 12, url: img12, },
    { id: 13, url: img13, },
    { id: 14, url: img14, },
    { id: 15, url: img15, },
];

export default function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    // Autoplay effect
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [currentIndex]); // Re-run effect when currentIndex changes to ensure correct state

    return (
        <div className="autumn-background">
            <div className="gallery-container">
                <h1 className="gallery-title">Galeria de Fotos</h1>
                <p className="gallery-subtitle">
                    Momentos especiais da nossa jornada juntos
                </p>

                <div className="carousel-container">
                    {/* Botão Anterior */}
                    <button
                        className="carousel-button carousel-button-prev"
                        onClick={prevSlide}
                        aria-label="Foto anterior"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>

                    {/* Slides */}
                    <div className="carousel-slides">
                        {galleryImages.map((image, index) => (
                            <div
                                key={image.id}
                                className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
                            >
                                <img
                                    src={image.url}
                                    className="carousel-image"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Botão Próximo */}
                    <button
                        className="carousel-button carousel-button-next"
                        onClick={nextSlide}
                        aria-label="Próxima foto"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>

                {/* Indicadores */}
                <div className="carousel-indicators">
                    {galleryImages.map((_, index) => (
                        <button
                            key={index}
                            className={`indicator ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Ir para foto ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Grid de thumbnails */}
                <div className="gallery-grid">
                    {galleryImages.map((image, index) => (
                        <div
                            key={image.id}
                            className={`gallery-thumbnail ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        >
                            <img src={image.url} />
                            <div className="thumbnail-overlay">
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
