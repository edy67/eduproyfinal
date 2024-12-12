// src/components/CarouselComponent.jsx
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

// Lista de imágenes para el carrusel
const items = [
  {
    src: 'https://http2.mlstatic.com/balon-de-futbol-brazuca-official-match-ball-nuevo-D_NQ_NP_672780-MLM27984193920_082018-F.jpg',
    altText: 'Imagen 1',
    caption: 'Imagen 1',
    key: 1,
  },
  {
    src: 'https://th.bing.com/th/id/OIP.swT7vYytpkddUdgnX0kmIQHaHa?w=267&h=200&c=7&r=0&o=5&dpr=2.5&pid=1.7',
    altText: 'Imagen 2',
    caption: 'Imagen 2',
    key: 2,
  },
  {
    src: 'https://th.bing.com/th/id/R.720a4810e314d77dad591d283837e5a4?rik=nKQWn3H4fdgbBQ&pid=ImgRaw&r=0',
    altText: 'Imagen 3',
    caption: 'Imagen 3',
    key: 3,
  },
  {
    src: 'https://dojiw2m9tvv09.cloudfront.net/17331/product/X_aletas-natacion-pp-hydro-foto-014509.jpg?51&time=1733577622',
    altText: 'Imagen 4',
    caption: 'Imagen 4',
    key: 4,
  },
  {
    src: 'https://http2.mlstatic.com/chamarra-adidas-originals-azul-hombre-bk5919-look-trendy-D_NQ_NP_779440-MLM26650813529_012018-F.jpg',
    altText: 'Imagen 5',
    caption: 'Imagen 5',
    key: 5,
  },
  {
    src: 'https://th.bing.com/th/id/OIP.N0IECHSaE_tzPsAN_WyB_QHaKu?w=1104&h=1600&rs=1&pid=ImgDetMain',
    altText: 'Imagen 6',
    caption: 'Imagen 6',
    key: 6,
  },
];

function CarouselComponent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  // Manejadores de la navegación del carrusel
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  // Generar los slides del carrusel
  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="carousel-image" />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default CarouselComponent;
