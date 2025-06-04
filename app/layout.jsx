import { ClientLayout } from './client-layout';
import './globals.css';

export const metadata = {
  title: 'Neal Jain • Computer Engineering Student',
  description:
    'Second-year Computer Engineering student at Shah and Anchor Kutchhi Engineering College. Offering video editing, event photography, and videography services.',
  keywords: [
    'Computer Engineering',
    'Video Editing',
    'Photography',
    'Videography',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
