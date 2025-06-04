'use client';

import Link from 'next/link';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

export function Footer() {
  // Get current time in GMT+2
  const now = new Date();
  const gmtPlus2 = new Date(now.getTime() + (2 * 60 * 60 * 1000));
  const hours = gmtPlus2.getHours();
  const minutes = gmtPlus2.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const displayHours = (hours % 12 || 12).toString().padStart(2, '0');
  const timeString = `${displayHours}:${minutes} ${ampm} GMT+2`;
  
  return (
    <footer className="py-12 border-t mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-medium mb-4">VERSION</h3>
            <p className="text-muted-foreground">{new Date().getFullYear()} © Edition</p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-4">LOCAL TIME</h3>
            <p className="text-muted-foreground">{timeString}</p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-4">SOCIALS</h3>
            <div className="flex flex-col space-y-2">
              <Link href="https://nealjain.github.io/B.BharatKumar/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">B.BharatKumar</Link>
              <Link href="https://beyondhunger0.pythonanywhere.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">Beyond Hunger</Link>
              <Link href="https://www.instagram.com/neal_manawat_20_05/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">Instagram</Link>
              <Link href="https://www.instagram.com/its_neal___?igsh=emhmZjhtamV3aGh4&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">Instagram Alt</Link>
              <Link href="https://www.linkedin.com/in/neal-jain-491b56239/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">LinkedIn</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}