"use client";

import Link from "next/link";
import { Briefcase, GraduationCap, Code, Download, Linkedin, Github } from "lucide-react";

export default function ResumePage() {
  const resumeUrl = "/TaeMinKim_Resume_Software_Engineer.pdf"; // Ensure the file is in /public

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
            <li>
              Developed interactive full-stack educational tools using Django and Next.js, increasing student engagement and contributing to measurable improvements in class performance
            </li>
            <li>
              Designed, built, and deployed full-stack web applications for personal projects and freelance clients, leveraging Django, Next.js, PostgreSQL, AWS S3, and RESTful APIs to deliver high-performance solutions
            </li>
            <li>
              Revamped and modernized legacy applications, migrating outdated systems to a Django backend with a Next.js frontend, significantly improving performance, maintainability, and user experience
            </li>
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
            <li>
              Engineered high-performance Python applications to process and transform large data files into customer documents, streamlining both physical and digital customer communications for enterprise clients
            </li>  
            <li>
              Led a six-month development project for a large-scale application, collaborating closely with the client using Agile methodology, delivering the solution ahead of schedule and providing hands-on training in best practices for long-term maintenance
            </li>  
            <li>
              Boosted team productivity by mentoring junior developers and spearheading refactors of legacy services, reducing technical debt and accelerating the delivery of 100+ applications by an average of 20%
            </li>  
            <li>
              Automated regression testing for PDF processing, significantly improving testing speed and reducing bug reports, leading to faster issue resolution and a more stable product
            </li>  
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
            <li>
              Developed back-end services using SQL Server and VB.NET to successfully replace a legacy system and support services for millions of customers, delivering on-time and under budget
            </li>
            <li>
              Spearheaded database optimization, improving query performance by 30% through advanced normalization and index strategies, resulting in faster API response times and enhanced data integrity
            </li>
            <li>
              Engineered secure RESTful APIs in VB.NET, streamlining data access and improving integration capabilities
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Junior Developer (June 2016 - September 2017)</h2>
            <h2 className="text-lg font-semibold">Centennial, CO</h2>
          </div>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              Led maintenance and enhancement efforts on multiple software versions using VB.NET, delivering critical bug fixes and feature upgrades in a live production environment while ensuring minimal downtime
            </li>
            <li>
              Developed and deployed a full-stack web application with SQL Server and VB.NET, improving internal communication and workflow efficiency across multiple client sites
            </li>
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
