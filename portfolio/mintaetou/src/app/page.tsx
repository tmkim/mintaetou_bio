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
              <p className="text-lg mt-2">Web Developer | Software Engineer | Tech Enthusiast</p>
          </div>
      </section>
        
      <section id="about" className="container mx-auto my-12 p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700">Brief introduction about yourself, your skills, and what you do.</p>
      </section>
      
      <section id="projects" className="container mx-auto my-12 p-6">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white shadow-md rounded-lg">
                  <h3 className="text-xl font-semibold">Project 1</h3>
                  <p className="text-gray-700">Short description of the project.</p>
              </div>
              <div className="p-6 bg-white shadow-md rounded-lg">
                  <h3 className="text-xl font-semibold">Project 2</h3>
                  <p className="text-gray-700">Short description of the project.</p>
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
