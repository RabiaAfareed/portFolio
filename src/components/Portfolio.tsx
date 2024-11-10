import React from "react";
import { caveat } from "@/font";
import Image from "next/image";

function Portfolio() {
  return (
    <>
      <section id="portfolio" className="w-full py-36 px-8 text-center bg-[#0a0908]">
        <h4 className={`${caveat.className} text-white text-4xl lg:text-5xl`}>
          <span className="text-[#A9927D]">M</span>y{" "}
          <span className="text-[#A9927D]">L</span>ast{" "}
          <span className="text-[#A9927D]">W</span>ork
        </h4>

        <p className="w-[90%] lg:w-[80%] mt-6 mx-auto text-sm lg:text-lg leading-6">
        Project Portfolio

1. Simple Calculator
I developed a user-friendly calculator application using HTML and CSS, designed to handle essential mathematical functions with a clean interface
. This project demonstrates my skills in frontend development and showcases my focus on creating visually
 appealing and interactive user experiences. <br />

2. Panacloud Website
As part of a web development team, I contributed to building the Panacloud website. I worked on enhancing
 the website's layout, improving navigation, and optimizing content organization. This project
  strengthened my ability to collaborate with others and improve website structure and design
   for an educational tech-focused platform. <br />

3. Currency Converter
In this TypeScript project, I created a currency converter that provides real-time currency conversions. 
This project allowed me to refine my skills in TypeScript, handling API integrations, and building 
intuitive, dynamic interfaces. <br />

4. Dynamic Resume Builder
This HTML, CSS, and TypeScript project was focused on creating a resume builder tool that is both
 responsive and customizable. By emphasizing clean code and accessibility, I built a tool that helps
  users create professional resumes that display well on various devices. <br />

These projects reflect my dedication to learning, improving technical skills,
 and developing tools that make a real-world impact.







        </p>

        <div className="w-full mt-24 grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-28">
            {[...Array(6)].map((_, index) => (
              <div className="flex flex-col" key={index}>
                <div className="w-full rounded-3xl overflow-hidden transition-all duration-[0.9s]">
                  <Image
                    src="/myImage/profile.png"
                    alt="Laptop, Phone and Camera"
                    width={500}
                    height={500}
                    className="w-full rounded-3xl transition-all duration-[0.9s] hover:scale-110 hover:-rotate-[5deg]"
                  ></Image>
                </div>

                <p className="mt-6 text-xl">Lorem, ipsum dolor.</p>
            </div>
            ))}
          </div>
      </section> 
    </>
  );
}

export default Portfolio;
