import { Center, ParallaxReveal, Footer } from '@/components';
import { Transition, Offcanvas } from '@/layout';
import Image from 'next/image';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'About | Neal Jain',
  description:
    'Third-year Computer Engineering student at Shah and Anchor Kutchhi Engineering College. Learn more about my educational journey and interests.',
};

export default function About() {
  return (
    <Transition>

      <Offcanvas />
      <main className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">About Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium">Shah and Anchor Kutchhi Engineering College</h3>
                <p className="text-muted-foreground">Bachelor in Technology, Computer Engineering</p>
                <p className="text-sm">Current</p>
              </div>
              <div>
                <h3 className="text-xl font-medium">Bharti Vidya Bhavan</h3>
                <p className="text-sm">Secondary Education</p>
              </div>
              <div>
                <h3 className="text-xl font-medium">Mahapragya Public School</h3>
                <p className="text-sm">Primary Education</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full h-80 mb-6 rounded-lg overflow-hidden">
              <Image 
                src="/images/profile.jpg" 
                alt="Neal Jain" 
                fill 
                className="object-cover object-center"
                priority
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">My Journey</h2>
            <div className="prose dark:prose-invert">
              <p>
                I am a third-year student at Shah and Anchor Kutchhi Engineering College, where I am pursuing a Bachelor in Technology in Computer Engineering. I have a strong interest in technology and software solutions and am eager to explore the ever-evolving field of computer engineering.
              </p>
              <p>
                My educational journey began at Mahapragya Public School, where I completed my primary education and developed a fascination with the intricate workings of technology. I then attended Bharti Vidya Bhavan, where I expanded my horizons and honed my skills in various fields, including electronics. I also acquired procedural programming skills, which I apply to coding and problem-solving challenges.
              </p>
              <p>
                As I continue my college journey, I am dedicated to making the most of my time and opportunities. I am keen to learn from my professors, peers, and mentors, and to apply my passion for computer engineering to real-world challenges. I believe in the power of collaboration, learning, and growth and am always ready to take on new and exciting projects.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Services I Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-medium mb-2">Video Editing</h3>
              <p>Professional video editing services for various projects and requirements.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-medium mb-2">Event Photography</h3>
              <p>Capturing special moments at events with high-quality photography.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-medium mb-2">Videography</h3>
              <p>Professional videography services for events, promotions, and more.</p>
            </div>
          </div>
        </div>
        
        {/* Wrap Footer in a try-catch to prevent runtime errors */}

      </main>
      <Footer />
    </Transition>
  );
}
