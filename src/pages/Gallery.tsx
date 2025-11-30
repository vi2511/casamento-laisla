import { useState } from "react";
import "../styles/gallery.css";

// Imagens do carrossel - você pode substituir por suas próprias fotos
const galleryImages = [
    {
        id: 1,
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
        caption: "Nosso primeiro encontro"
    },
    {
        id: 2,
        url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&q=80",
        caption: "Pedido de casamento"
    },
    {
        id: 3,
        url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=80",
        caption: "Ensaio pré-wedding"
    },
    {
        id: 4,
        url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&q=80",
        caption: "Momentos especiais"
    },
    {
        id: 5,
        url: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1200&q=80",
        caption: "Nossa história"
    },
    {
        id: 6,
        url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80",
        caption: "Juntos para sempre"
    }
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
                                    alt={image.caption}
                                    className="carousel-image"
                                />
                                <div className="carousel-caption">
                                    <p>{image.caption}</p>
                                </div>
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
                            <img src={image.url} alt={image.caption} />
                            <div className="thumbnail-overlay">
                                <span>{image.caption}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
