'use client';

import React, { useState } from 'react';
import { Mail, Instagram, Send } from 'lucide-react';

type ContactProps = {
    id: string;
}

const Contact = ({id}: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Criar mailto com os dados do formulário
    const subject = encodeURIComponent(`Contato de ${formData.name}`);
    const body = encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`);
    window.location.href = `mailto:brenolacerda.contato@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      id={id} 
      className='scroll-mt-24 w-full min-h-screen flex flex-col gap-10 px-6 sm:px-12 md:px-20 lg:px-28 pt-12 items-center'
    >
      <h1 className='text-3xl md:text-4xl font-bold'>Contato</h1>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl pt-20'>
        {/* Formulário */}
        <div className='space-y-6'>
          <div>
            <h2 className='text-2xl font-semibold mb-4'>Envie uma mensagem</h2>
            <p className='text-gray-600'>Preencha o formulário abaixo e entrarei em contato o mais breve possível.</p>
          </div>

          <form onSubmit={handleSubmit} className='space-y-4 bg-neutral-800/50 p-5 rounded-2xl'>
            <div>
              <label htmlFor="name" className='block text-sm font-medium text-gray-100 mb-2'>
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-700 focus:border-transparent outline-none transition-all'
                placeholder='Seu nome'
              />
            </div>

            <div>
              <label htmlFor="email" className='block text-sm font-medium text-gray-100 mb-2'>
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-700 focus:border-transparent outline-none transition-all'
                placeholder='seu@email.com'
              />
            </div>

            <div>
              <label htmlFor="message" className='block text-sm font-medium text-gray-100 mb-2'>
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-700 focus:border-transparent outline-none transition-all resize-none'
                placeholder='Sua mensagem...'
              />
            </div>

            <button
              type="submit"
              className='w-full bg-neutral-700 text-white px-6 py-3 rounded-lg hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 font-medium'
            >
              <Send size={20} />
              Enviar Mensagem
            </button>
          </form>
        </div>

        {/* Informações de Contato */}
        <div className='space-y-8'>
          <div>
            <h2 className='text-2xl font-semibold mb-4'>Outras formas de contato</h2>
            <p className='text-gray-600'>Você também pode entrar em contato diretamente através dos canais abaixo.</p>
          </div>

          <div className='space-y-6'>
            {/* E-mail */}
            <a
              href="mailto:brenolacerda.contato@gmail.com"
              className='flex items-start gap-4 p-4 border border-gray-200 rounded-lg hover:ring-gray-700 hover:shadow-md transition-all group'
            >
              <div className='w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-black transition-colors'>
                <Mail className='w-6 h-6 text-gray-700 group-hover:text-white transition-colors' />
              </div>
              <div>
                <h3 className='font-semibold text-lg mb-1'>E-mail</h3>
                <p className='text-gray-600 break-all'>brenolacerda.contato@gmail.com</p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/be.mov_/"
              target="_blank"
              rel="noopener noreferrer"
              className='flex items-start gap-4 p-4 border border-gray-200 rounded-lg hover:ring-gray-700 hover:shadow-md transition-all group'
            >
              <div className='w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-black transition-colors'>
                <Instagram className='w-6 h-6 text-gray-700 group-hover:text-white transition-colors' />
              </div>
              <div>
                <h3 className='font-semibold text-lg mb-1'>Instagram</h3>
                <p className='text-gray-600'>@be.mov_</p>
              </div>
            </a>
          </div>

          {/* Informações adicionais */}
          <div className='bg-neutral-900 p-6 rounded-lg border border-gray-200'>
            <h3 className='font-semibold text-lg mb-3 text-white'>Horário de Atendimento</h3>
            <p className='text-gray-600 text-sm leading-relaxed'>
              Respondo todas as mensagens de segunda a sexta, das 9h às 18h. 
              Mensagens enviadas fora deste horário serão respondidas no próximo dia útil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
