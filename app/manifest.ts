import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'VCare - AI Medical Voice Assistant',
    short_name: 'VCare',
    description: 'AI-powered medical voice assistant for healthcare professionals',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#1d4ed8',
    icons: [
      {
        src: '/logo.png',
        sizes: '96x96',
        type: 'image/png',
      },
    ],
  };
}
