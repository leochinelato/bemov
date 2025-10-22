import React from 'react';

type GalleryProps = {
    id: string;
}

const Gallery = ({id}: GalleryProps) => {
  return (
    <section id={id} className='scroll-mt-24 w-full min-h-screen flex flex-col gap-10' style={{ paddingLeft: 150, paddingRight: 150 }}>
      <h1 className='text-3xl mb-8'>Galeria</h1>
    </section>
  );
};

export default Gallery;
