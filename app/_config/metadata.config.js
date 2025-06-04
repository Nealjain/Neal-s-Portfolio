/** @type {import('next').Metadata} */
export const rootMetadata = {
  metadataBase: new URL('https://neal-jain-portfolio.vercel.app/'),
  title: {
    template: '%s | Neal Jain',
    default: 'Neal Jain • Computer Engineering Student',
  },
  description:
    'Third-year Computer Engineering student at Shah and Anchor Kutchhi Engineering College. Offering video editing, event photography, and videography services.',
  generator: 'Neal Jain',
  applicationName: 'Neal Jain',
  referrer: 'origin-when-cross-origin',
  keywords: ['Computer Engineering', 'Video Editing', 'Photography', 'Videography'],
  authors: [
    { name: 'Neal Jain', url: 'https://www.linkedin.com/in/neal-jain-491b56239/' },
  ],
  creator: 'Neal Jain',
  publisher: 'Neal Jain',
  twitter: {
    card: 'summary_large_image',
    title: 'Neal Jain',
    description:
      'Third-year Computer Engineering student at Shah and Anchor Kutchhi Engineering College. Offering video editing, event photography, and videography services.',
    siteId: '',
    creator: '',
    creatorId: '',
    images: {
      url: 'https://neal-jain-portfolio.vercel.app/screenshot.png',
      alt: 'Portfolio Screenshot',
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
