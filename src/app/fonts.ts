import localFont from 'next/font/local'

export const webFonts = localFont({
    src: [
        {
            path: '../../public/fonts/Inter-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/NunitoSans-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/NunitoSans-ExtraLight.woff2',
            weight: '200',
            style: 'normal',
        },
    ],
    variable: '--web-fonts',
    display: 'swap'
})