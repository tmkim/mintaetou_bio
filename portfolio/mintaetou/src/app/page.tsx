'use client'
import { useState } from 'react';
import ContactModal from './ui/contact-modal';
export default function Page() {

  const [contactModal, setContactModal] = useState<boolean>(false);

  return (
    <main className="text-gray-900">
      <section id="hero" className="bg-white shadow-md">
          <div className="text-center py-8 bg-green-500 text-white">
              <p className="text-lg ml-45">(person)&nbsp;&nbsp;(great)&nbsp;&nbsp;&nbsp;(head)</p>
              <h1 className="text-4xl font-bold">Tae-Min = Min Tae Tou</h1>
              <p className="text-lg mt-2">Software Engineer | Community Leader | Thrill Seeker</p>
              <h2> This will be replaced by an image banner with some things I love</h2>
          </div>
      </section>
        
      <section id="about" className="container mx-auto my-12 p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">♪ Welcome To My Life ♪</h2>
          <p className="text-xl">
            What's up y'all? I'm Tae-Min, a Software Engineer with eight years of experience developing products
            and helping clients implement solutions to exceed their business requirements. I enjoy innovating solutions 
            for interesting problems, but most importantly empowering others and making life easier. With a strong 
            background in object oriented programming, database management, and full stack development, I am very confident
            in my fundamental coding skills and my ability to learn new technologies. 
          </p>
          <br/>
          <p className="text-xl">
            Outside of work, I love to seek new experiences and broaden my perspective of the world. Whether I'm trying new food,
            traveling to new places, or participating in new activities, I like to be active in learning more about what makes people
            happy, and spreading that joy with others. There are so many awesome experiences in the world, you will never know what 
            you don't know unless you step outside your comfort zone and embrace the unknown. 
          </p>
      </section>
      
      <section id="projects" className="container mx-auto my-12 p-6">
          <h2 className="text-3xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white shadow-md border rounded-lg">
                  <h3 className="text-2xl font-semibold">
                    Dank Bank&nbsp;
                    <a href="https://www.github.com/tmkim/dank_bank"
                    className="font-semibold text-blue-500 text-lg italic hover:text-blue-700 transition-colors duration-300"
                    >(Git Repo)</a>
                  </h3>
                  <p className="text-lg">
                    Ever want to share something you love, but have trouble coming up with 
                    recommendations on the spot? Same.. which is why I put together a "bank" of 
                    things I really enjoy. So if you want to learn about things that make me happy,
                    please check out my&nbsp;
                    <a href="/DankBank" className="font-semibold text-blue-500 underline hover:text-blue-700 transition-colors duration-300">
                    Dank Bank!
                    </a>
                  </p> 
                  <pre className="text-wrap">
                    Made using Django Rest Framework, Next.js, Tailwind CSS, PostgreSQL, AWS S3
                  </pre>
              </div>
              <div className="p-6 bg-white shadow-md border rounded-lg">
                <h3 className="text-2xl font-semibold">
                    T Planet&nbsp;
                    <a href="https://www.github.com/tmkim/t-planet"
                    className="font-semibold text-blue-500 text-lg italic hover:text-blue-700 transition-colors duration-300"
                    >(Git Repo)</a>
                  </h3>
                  <p className="text-lg">
                    Do you like to study with flash cards? Need a place where you can create and share
                    flash cards with friends? Come check out&nbsp;
                    <a href="/T-Planet" className="font-semibold text-blue-500 underline hover:text-blue-700 transition-colors duration-300">
                    T Planet
                    </a>
                    , a social studying website where you can create your own sets of flash cards,
                    share them with others, and check out what others are studying!
                  </p> 
                  <pre className="text-wrap">
                    Made using Next.js (full stack), Tailwind CSS, PostgreSQL, AWS S3
                  </pre>
              </div>
              <div className="p-6 bg-white shadow-md border rounded-lg">
                <h3 className="text-2xl font-semibold">
                    Rave Map&nbsp;
                    <a href="https://www.github.com/tmkim/RaveMap"
                    className="font-semibold text-blue-500 text-lg italic hover:text-blue-700 transition-colors duration-300"
                    >(Git Repo)</a>
                  </h3>
                  <p className="text-lg">
                    Traveling to a new city and looking for upcoming EDM shows in the area?
                    Take a look at this&nbsp;
                    <a href="/T-Planet" className="font-semibold text-blue-500 underline hover:text-blue-700 transition-colors duration-300">
                    Rave Map
                    </a>
                    &nbsp;to find local events and see their venues on a map to help you 
                    plan your next trip!
                  </p> 
                  <pre className="text-wrap">
                    Python (Django), EDMTrain API, Google Maps API, Bootstrap, JQuery, AJAX<br />
                    Powered by <a href="https://edmtrain.com/"
                    className="font-semibold text-blue-500 underline hover:text-blue-700 transition-colors duration-300"
                    >EDM Train</a> API
                  </pre>
              </div>
              <div className="p-6 bg-white shadow-md border rounded-lg">
                <h3 className="text-2xl font-semibold">
                    TCG Bounty Hunter 
                    <a href="https://www.github.com/tmkim/tcgbh"
                    className="font-semibold text-blue-500 text-lg italic hover:text-blue-700 transition-colors duration-300"
                    >&nbsp;(in development)</a>
                    <span className=""> </span>
                  </h3>
                  <p className="text-lg">
                    If you're looking to build your next deck of trading cards, check out my &nbsp;
                    <a href="/T-Planet" className="font-semibold text-blue-500 underline hover:text-blue-700 transition-colors duration-300">
                    TCG Bounty Hunter
                    </a>
                    &nbsp;to help figure out the estimated total cost of any sized set of cards, 
                    using current market prices found on TCGPlayer
                  </p> 
                  <pre className="text-wrap">
                    Django Rest Framework, Pandas, Next.js, Tailwind CSS, PostgreSQL, AWS S3<br />
                    Powered by <a href="https://tcgcsv.com/"
                    className="font-semibold text-blue-500 underline hover:text-blue-700 transition-colors duration-300"
                    >TCG CSV</a> API
                  </pre>
              </div>
          </div>
      </section>
      
      <section id="contact" className="container mx-auto my-12 p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <div className="mt-6 flex gap-4">
          <button
            className="flex items-center justify-center min-w-[160px] px-4 py-2 text-lg font-semibold bg-green-500 text-white rounded-md hover:bg-green-600"
            onClick={() => setContactModal(true)}
          >
            Send me an Email
          </button>
          <button
            className="flex items-center justify-center min-w-[160px] px-4 py-2 text-lg font-semibold bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            <a href="https://www.linkedin.com/in/tmk13" className="text-white hover:underline">Find me on LinkedIn</a>
          </button>
          </div>
      </section>

      {contactModal && (
        <div>
          <ContactModal 
          onClose={() => setContactModal(false)} 
          />
        </div>
      )}
    </main>
  );
}
