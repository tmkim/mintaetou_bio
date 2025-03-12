"use client";

import Link from "next/link";
import { Briefcase, GraduationCap, Code, Download, Linkedin, Github } from "lucide-react";

export default function ResumePage() {
  const resumeUrl = "/TaeMinKim_Resume_Fullstack_Developer.pdf"; // Ensure the file is in /public

  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Tae-Min Kim</h1>
        <p className="text-gray-600">US Citizen | taeminkim13@gmail.com | 732-496-4591</p>
        <div className="flex justify-center gap-4 mt-3">
          <Link href="https://linkedin.com/in/tmk13" target="_blank">
            <Linkedin className="w-6 h-6 text-blue-700 hover:text-blue-900 transition" />
          </Link>
          <Link href="https://github.com/tmkim" target="_blank">
            <Github className="w-6 h-6 text-gray-700 hover:text-gray-900 transition" />
          </Link>
          <Link href={resumeUrl} download>
            <Download className="w-6 h-6 text-green-600 hover:text-green-800 transition" />
          </Link>
        </div>
      </div>

      {/* Skills Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3"><Code className="inline w-5 h-5 mr-2" /> Skills</h2>
        <p><strong>Proficient:</strong> Python, VB .NET, SQL (SQL Server, PostgreSQL), XML</p>
        <p><strong>Experienced:</strong> Django, DRF, Next.js, Java, TypeScript, REST APIs, PyTest, React, Tailwind CSS, Vercel</p>
        <p><strong>Familiar:</strong> Docker, Kubernetes, Jira, Git, NoSQL (MongoDB), AWS S3</p>
      </section>

      {/* Experience Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3"><Briefcase className="inline w-5 h-5 mr-2" /> Experience</h2>

        <div className="mb-4">
          <div className="text-center">
            <h3 className="text-xl font-semibold">Independent Web Developer (July 2023 - Present)</h3>
          </div>
          <p className="text-gray-600"></p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Developed a blog web app for users to share and review experiences, leveraging Django Rest Framework, Next.js, Tailwind CSS, PostgreSQL, and AWS S3 for dynamic content management</li>
            <li>Built a social studying web app with interactive practice tests and flashcards using Next.js, RESTful APIs, TypeScript, Tailwind CSS, and PostgreSQL, enhancing student engagement</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="text-center">
            <h3 className="text-xl font-semibold">Sefas Innovation (April 2019 – October 2022)</h3>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Software Engineer (Professional Services)</h2>
            <h2 className="text-lg font-semibold">Burlington, MA</h2>
          </div>
          <h2 className="text-lg font-semibold"></h2>
          <p className="text-gray-600"></p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Developed Python applications which manage customer communications by transforming large data files into customer documents and coordinating both physical and digital communications</li>
            <li>Led a six-month project to develop a large-scale application, using agile methodology to work closely with the client, delivering the project early and training the client on best practices for maintenance</li>
            <li>Increased team productivity by mentoring junior developers in refactoring legacy applications, accelerating the delivery time of over 100 applications an average of 20%</li>
            <li>Improved testing speed and integrity by automating regression testing for PDF files, resulting in fewer bug reports and improved troubleshooting</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="text-center">
            <h3 className="text-xl font-semibold">FAST Enterprises (June 2016 – October 2018)</h3>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Software Consultant (September 2017 - October 2018)</h2>
            <h2 className="text-lg font-semibold">Lansing, MI</h2>
          </div>
          <ul className="list-disc list-inside text-gray-700">
            <li>Developed a full-stack application using SQL Server and VB.NET to handle services for millions of customers, replacing the client’s legacy system, finishing the project on time and under budget</li>
            <li>Improved database performance by optimizing large queries and normalizing the database, reducing API response times by up to 30% and increasing data integrity for third-party sales</li>
            <li>Built RESTful APIs using VB.NET, enabling third-party vendors to securely query sensitive data.</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Junior Developer (June 2016 - September 2017)</h2>
            <h2 className="text-lg font-semibold">Centennial, CO</h2>
          </div>
          <ul className="list-disc list-inside text-gray-700">
            <li>Maintained multiple versions of the company’s software using VB.NET and proprietary software to develop new features and fix bug reports in a production environment</li>
            <li>Improved internal communications across several client sites by developing a full-stack web application using SQL Server and VB.NET, receiving very positive feedback from users</li>
            <li>Accelerated the process of updating annual forms by building Python scripts to parse XML files and produce mapping files, saving over $200,000 annually</li>
          </ul>
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-3"><GraduationCap className="inline w-5 h-5 mr-2" /> Education</h2>
        <div className="flex justify-between items-center">
          <p className="font-semibold">Rutgers University – New Brunswick</p>
          <p className="text-gray-600">Bachelor of Science in Computer Science</p>
        </div>
      </section>
    </div>
  );
}
