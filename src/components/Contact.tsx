import React from 'react';

type ContactProps = {
    id: string;
}

const Contact = ({id}: ContactProps) => {
  return (
    <section id={id} className='scroll-mt-24 w-full min-h-screen flex flex-col gap-10' style={{ paddingLeft: 150, paddingRight: 150 }}>
      <h1 className='text-3xl mb-8'>Contato</h1>
    </section>
  );
};

export default Contact;
