import { Transition, Offcanvas } from '@/layout';
import { Footer } from '@/components';
import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';

export const metadata = {
  title: 'Work | Neal Jain',
  description:
    'Explore my diverse portfolio of projects, showcasing my expertise in web development, design, and various technical skills.',
};

export default function Work() {
  return (
    <Transition>
      <Offcanvas />
      <main className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">My Work</h1>

        {/* Recent Work Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Recent Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* B. Bharatkumar Jewellers Project */}
            <div className="rounded-lg overflow-hidden border">
              <div className="relative aspect-video w-full">
                <Image 
                  src="/images/1234567890.png"
                  alt="B. Bharatkumar Jewellers Website" 
                  fill 
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-medium">B. Bharatkumar Jewellers</h3>
                  <a 
                    href="https://b.bharatkumar.nealjain.website" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:underline"
                  >
                    <span className="mr-2">Visit</span>
                    <FaExternalLinkAlt />
                  </a>
                </div>
                
                <p className="mb-4">
                  A visually elegant and responsive website for B. Bharatkumar Jewellers, showcasing premium jewelry collections and enhancing user shopping experience online.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">E-Commerce</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Jewellery Website</span>
                </div>
              </div>
            </div>

            {/* Beyond Hunger Project */}
            <div className="rounded-lg overflow-hidden border">
              <div className="relative aspect-video w-full">
                <Image 
                  src="/images/beyound hunger.png"
                  alt="Beyond Hunger Website" 
                  fill 
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-medium">Beyond Hunger</h3>
                  <a 
                    href="https://beyondhunger.nealjain.website" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:underline"
                  >
                    <span className="mr-2">Visit</span>
                    <FaExternalLinkAlt />
                  </a>
                </div>
                
                <p className="mb-4">
                  A platform connecting food donors with those in need to reduce waste and fight hunger.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Food Donation</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Community Service</span>
                </div>
              </div>
            </div>
          </div>
        </section>


      </main>
      <Footer />
    </Transition>
  );
}