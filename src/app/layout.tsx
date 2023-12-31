import './globals.scss';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const berlin = localFont({
  src: [
    {
      path: '../../public/assets/fonts/berlin_sans_fb_demi_bold-webfont.woff',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/berlin_sans_fb_demi_bold-webfont.woff2',
      weight: 'normal',
      style: 'normal',
    },
  ],
  variable: '--tg-berlin-font-family',
});

const poppins = localFont({
  src: [
    {
      path: '../../public/assets/fonts/Poppins-Light.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/Poppins-Regular.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/Poppins-Medium.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/Poppins-SemiBold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/Poppins-Bold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/Poppins-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--tg-body-font-family',
});

const barlow = localFont({
  src: [
    {
      path: '../../public/assets/fonts/Barlow-ExtraLight.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/Barlow-Light.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/Barlow-Regular.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/Barlow-Medium.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/Barlow-SemiBold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/Barlow-Bold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/Barlow-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--tg-body-font-family',
});

export const metadata: Metadata = {
  title: 'Vocalify - Transforming Voices using AI & ML',
  description:
    'Vocalify is a groundbreaking project poised to revolutionize the music industry by leveraging advanced Realistic Voice Cloning v2 (RVC 2) Voice Models for high-quality, realistic voice cloning and training using Artificial Intelligence Models and Machine Learning',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${berlin.variable} ${poppins.variable} ${barlow.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
