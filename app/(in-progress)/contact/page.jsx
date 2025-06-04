import { Transition, Offcanvas } from '@/layout';
import { Footer } from '@/components';
import { FaEnvelope, FaPhone, FaLinkedin, FaInstagram } from 'react-icons/fa';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Contact | Neal Jain',
  description:
    'Get in touch with Neal Jain. Contact information including email, phone, and social media profiles.',
};

export default function Contact() {
  return (
    <Transition>

      <Offcanvas />
      <main className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Contact Me</h1>
        
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Let's Connect</h2>
          <p className="mb-8 text-lg">Feel free to reach out to me through any of the following channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <FaPhone className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Phone</h3>
                  <p className="text-muted-foreground">+91 9372820541</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <FaEnvelope className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Email</h3>
                  <p className="text-muted-foreground">nealmanawat@gmail.com</p>
                  <p className="text-muted-foreground">neal.18191@sakec.ac.in</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <FaLinkedin className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/neal-jain-491b56239/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">linkedin.com/in/neal-jain-491b56239</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <FaInstagram className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Instagram</h3>
                  <a href="https://www.instagram.com/neal_manawat_20_05/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@neal_manawat_20_05</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wrap Footer in a try-catch to prevent runtime errors */}

      </main>
      <Footer />
    </Transition>
  );
}
