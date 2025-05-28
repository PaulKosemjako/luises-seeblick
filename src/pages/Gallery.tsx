import { useState, useEffect } from 'react';
import styles from './gallery.module.scss';
import galleryData from './galleryData.json';

type ImageData = {
  src: string;
  alt: string;
  category: string;
};

const Gallery = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('alle');

  useEffect(() => {
    setImages(galleryData as ImageData[]);
  }, []);

  const categories = Array.from(new Set(images.map(img => img.category)));

  const filteredImages = selectedCategory === 'alle'
    ? images
    : images.filter(img => img.category === selectedCategory);

  const closeLightbox = () => setCurrentIndex(null);
  const showPrev = () => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };
  const showNext = () => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex + 1) % filteredImages.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex !== null) {
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'Escape') closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <section className={styles.gallery}>
      <h2>Galerie</h2>

      <div className={styles.categoryButtons}>
        <button
          className={selectedCategory === 'alle' ? styles.active : ''}
          onClick={() => setSelectedCategory('alle')}
        >
          Alle
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? styles.active : ''}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredImages.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            onClick={() => setCurrentIndex(index)}
            className={styles.thumbnail}
          />
        ))}
      </div>

      {currentIndex !== null && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.close} onClick={closeLightbox}>&times;</button>
            <button className={styles.prev} onClick={(e) => { e.stopPropagation(); showPrev(); }}>&lt;</button>
            <img
              src={filteredImages[currentIndex].src}
              alt={filteredImages[currentIndex].alt}
              className={styles.lightboxImage}
            />
            <button className={styles.next} onClick={(e) => { e.stopPropagation(); showNext(); }}>&gt;</button>
          </div>
        </div>
      )}

    </section>
  );
};

export default Gallery;
