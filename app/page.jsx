import {
  Contact,
  Description,
  Header,
  Project,
  Thumbnail,
} from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Home | Neal Jain',
  description:
    'Third-year Computer Engineering student at Shah and Anchor Kutchhi Engineering College. Offering video editing, event photography, and videography services.',
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Description />
        <Thumbnail />
        <Project />
      </main>
      <Contact />
    </>
  );
}
