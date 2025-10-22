import React from 'react';

type SobreMimProps = {
  id: string;
}

const SobreMim = ({id}: SobreMimProps) => {
  return (
    <section 
      id={id} 
      className='min-h-screen flex flex-col justify-center items-start text-start gap-10 cursor-default 
                 scroll-mt-24
                 px-6 sm:px-12 md:px-24 lg:px-64 xl:px-96 2xl:px-[500px]
                 text-base md:text-lg lg:text-xl'
    >
      <p>
        Me chamo Breno Santos, nascido em 2002, sou um criativo multidisciplinar natural de São Paulo.
      </p>
      <p>
        Meu primeiro contato com a internet e com os videoclipes de diversos artistas foi fundamental para minha formação cultural, despertando meu interesse pela música, moda, fotografia, produção audiovisual e todas as interseções entre eles. Ao me aprofundar nas pesquisas e vivências, adquiri um vasto repertório de referências e habilidades, compreendendo os diferentes aspectos das indústrias relacionadas.
      </p>
      <p>
        Decidi seguir meu sonho e me dediquei ao estudo de Produção Multimídia. Durante essa jornada, comecei a registrar meu cotidiano por meio de imagens, explorando minha criatividade no audiovisual.
      </p>
    </section>
  );
};

export default SobreMim;