'use client'; // Necessário para usar estado e interatividade

import React from 'react';
import Card from './ui/Card';
import { navitems } from '@/data/NavItems';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

type ProjectsProps = {
  id: string;
}

const Projects = ({ id }: ProjectsProps) => {

  const areasData = navitems.find(item => item.title === 'Áreas de Atuação');

  if (!areasData || !areasData.fields) {
    return null;
  }

  return (
    <section 
      id={id} 
      className="w-full flex flex-col scroll-mt-24 
                 px-6 sm:px-12 md:px-20 lg:px-28" // Padding responsivo
      style={{
        justifyContent: 'space-between',
        minHeight: 'calc(100vh - 200px)'
    }}>
      <h1 className='text-3xl mb-8'>Áreas de Atuação</h1>

      <Carousel
        opts={{
          align: "start",
          loop: true,
          skipSnaps: false,
          dragFree: false,
        }}
        className="w-full"
      >
        <CarouselContent className='-ml-4'> {/* Margem negativa para alinhar o carrossel */}
          {areasData.fields.map((item, index) => (
            <CarouselItem 
              key={index}
              // Largura responsiva customizada
              className='carousel-item-custom pl-4' // Padding para espaçamento
            >
              <Card
                title={item.title}
                description={item.description}
                image={item.image}
                linkTo={item.href}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <span style={{color: '#000'}}>.</span>
    </section>
  );
};

export default Projects;