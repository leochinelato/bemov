'use client'

import React from 'react'

type CardProps = {
    title: string
    description: string
    image: string
    linkTo: string
}

const Card = ({ title, description, image, linkTo, ...props}: CardProps) => {
    return (
        <div
            className='w-sm h-100 rounded-3xl flex flex-col justify-end items-start relative overflow-hidden gap-4'
            style={{
                padding: 20,
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, .8), transparent 200%), url(${image})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}
            {...props}
        >
            <div className='w-full z-10'>
                <h1 style={{ color: '#FFF' }}>{title}</h1>
                <p style={{fontSize: 12, color: '#ffffffbe'}} >{description}</p>
            </div>

            <a
                href={linkTo}
                className='
                rounded-2xl
                border
                border-(--glass-border)
                px-6 py-3
                shadow-2xl/20
                inset-shadow-current/20
                backdrop-blur-sm
                bg-(--glass-bg)
                inset-shadow-sm
                text-[#c0c0c0]
                w-full
                cursor-pointer
                [&:hover]:scale-101
                transition
                duration-300
                text-center'
                style={{ padding: 15 }}
            >
                Ver Projetos
            </a>
        </div>
    )
}

export default Card