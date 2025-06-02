'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SkillsPage() {
  const [expandedSkillIndex, setExpandedSkillIndex] = useState<{ [key: number]: number | null }>({});

  const toggleExpanded = (categoryIndex: number, skillIndex: number) => {
    setExpandedSkillIndex((prev) => ({
      ...prev,
      [categoryIndex]: prev[categoryIndex] === skillIndex ? null : skillIndex,
    }));
  };

          const categories = [
            { title: "Programming Languages", skills: [
              { icon: "/oop.png", 
                title: "Object Oriented Programming", 
                description: "My main programming experience lies in object oriented programming, many of my assignments at university were in some sort of OOP.\n My early data structures and algorithms classes were in Java, my elecrical engineering classes involved programming in C#.\n My later web design and software development classes involved a lot of typescript, as well as this website youre currently on!\n My side projects in unity have given me some practice with C++. Altogether I have a strong understanding of inheritance, abstraction, encapsulation and polymorphism", 
                shortDescription: "Java, C++, C#, Typescript" },
              { icon: "/python.png", 
                title: "Python", 
                description: "I have written a few short scripts in python. Both for university and for personal reasons such as job applications, I enjoy when I get to program in it as it usually for a fun little challenge but haven't found any reason to write with it in larger projects yet.", 
                shortDescription: "Scripting" },
              { icon: "/sql.png", 
                title: "SQL", 
                description: "I have experience with PostgreSQL and MySQL. Writing queries and database construction and management.", 
                shortDescription: "Database Management" },
                { icon: "/viclogo.png",
                  title:"BoS at Victoria university",
                  description: "I completed my Bachelor of science at Victoria university of Wellington. My major was Computer science and I minored in electrical engineering.\n I thoroughly enjoyed my time here and learned many things, not just computer science related.\n I enjoyed very much, learning from talented people who knew exactly what they were talking about.\n For my Major in CS I mainly forcused on data stuctures and algorithms while here, but picked up a lot form my software engineering classes, UX design, cyber security, machine learning and game design classes.\n For my minor in elecrical engineering, I mainly worked with micro-controllers and did a whole lot of math. Honestly it was good though, we had plenty of exciting projects to balance it out. Very early on we had to make a robot (out of a rasberry-pi and other materials) that could solve mazes, it may have been a lure now that I think about it.  I made good friends from study groups while I was here. After 4 years of study and working the whole time, I managed to complete my degree without any student loan owing which is one of my biggest achievements",
                  shortDescription:"Computer science and Electrical engineering"
                }
            ]},
            { title: "Work Experience", skills: [
              { icon: "/painting.png", 
                title: "Painting Contractor", 
                description: "As a painting contractor, I have worked on numerous residential and commercial projects, ensuring high-quality finishes and customer satisfaction.\n The commercial jobs involved a lot of co-ordination with other contractors in order to complete a project on time and under budget, but also required keeping the companies interest and holding my ground where it was needed. While residential requiried me to maintain closer relationships with the clients who's property I am working on, both required an eye for detail.\n This job has taught me how to approach new projects each with different timeframes, safety restrictions, and niche problems that are unique to each project. With a strategy that is flexible but also consistent in its success ", 
                shortDescription: "Professional painting and contracting" },
              { icon: "/resene.png", 
                title: "Resene paint professional", 
                description: "At Resene I worked with clients to create colour schemes catering to their personal tastes and even cultures. I found it very rewarding to work with a client and find their ideal colour scheme, not just the choosing of the colours but the discovery of what the client wanted.\n  You might ask, why?\n As a colour specialist, I have chosen a plain colour scheme of white and grey. It comes with the same mentality of selling a house.\n A white colour scheme is more of a canvas where a client can envision their own colour schemes over top.\n A white or neutral coloured house sells more frequently than a multi-coloured one that reflects an individuals taste or group for this same reason, this does differ with people's culture but as a general rule in New Zealand this is the case. If I was to show this website to a potential client I would want them to be able to envision their own website in place of this one.", 
                shortDescription: "Colour schemes and paint systems." },
              { icon: "/manager.png", 
                title: "Mitre 10 Manager", 
                description: "Managed the paint, electrical, and seasonal departments at Mitre 10, overseeing inventory and dealing with customer escalations.\n I learned here how to delegate work without demanding work from people. How to maintain a level of professionalism between colleagues while also fostering good relationships.\n I also learned to have confidence in the knowledge I had aquired so I could dispute or affirm complaints without needing to escalate the situation higher than my position.", 
                shortDescription: "Managed paint, electrical, and seasonal" },
                { icon: "/assistant.png", 
                  title: "Mitre 10 Assistant", 
                  description: "Managed the paint, electrical, and seasonal departments at Mitre 10, overseeing inventory and dealing with customer escalations.\n I learned here how to delegate work without demanding work from people. How to maintain a level of professionalism between colleagues while also fostering good relationships.\n I also learned to have confidence in the knowledge I had aquired so I could dispute or affirm complaints without needing to escalate the situation higher than my position.", 
                  shortDescription: "Managed paint, electrical, and seasonal" }
            ]},
            { title: "Hobbies", skills: [
              { icon: "/longboard.png", 
                title: "Longboarding", 
                description: "Longboarding in wellington has taught me a few valuable lessons.\n 1)\nKnow your limits!\n If your're unsure about whether or not the downhill you're eye-balling is above your skillset. Start from a place you're comfortable, lower on the slope and work your way up. Progress happens very quickly and experience is the best teacher. So its better to have multiple opportunities to practice than to have one big shot, ending with an injury that puts you out of action for weeks. \n 2)\n Being able to perform under pressure is vital. When you know that if you make one slip, you'll have at minimum a nice road rash and have to buy new clothes, or a broken bone or two.\n Maintaining your composure and not losing focus of what can and should be done, is essential.\n3)\n Falling is okay, but how you fall makes a big difference.\n If you can, make it a running fall.", 
                shortDescription: "Risk assesment and performance under pressure" },
              { icon: "/books.png", 
                title: "Books, ebooks and audiobooks",
                description: "I love reading and listening to audiobooks of science fiction, fantasy, and history. This has given me some understanding of other cultures and their histories, while also improving my vocabulary in the English language.", 
                shortDescription: "Fiction and history" },
              { icon: "/dnd.png", 
                title: "Dnd and tabletop",
                description: "Both playing Dungeons and Dragons and running a DnD campaign requires teamwork, communication and orginization.\n We all work together using our different skillsets and ideas to overcome whatever problems the GM throws at us!\n A DnD campaign is a wide reaching story and world that may touch on many subjects depending on how the players navigate it.\n So its important to discuss with your players, what themes will be in the campaign and whether or not to include it.\n Its important to take into account other players backgrounds, experiences and to respect their opinions. This way you ensure everybody who is taking part in the game can get some value out of the experience.\n Organization is important because you're usually planning around five or more adults with busy lives. When I run a campaign, I want the campaign to be ready by the next window where everybody is free, or risk waiting another month for everybodies schedules to align.", 
                shortDescription: "Teamwork, communication and orginazation" },
                { icon: "/guitar.png", 
                  title: "Guitar",
                  description: "Practice makes perfect.\n Learning an instrument is a very good way to humble yourself. It takes time and dedication to master the fingerings and chords. Let alone to perform the song in one go in front of an audience with near perfect precision. It takes dedication and practice to learn even simple songs from knowing nothing about an instrument and the learning curve only gets steeper. after 15 years of practising I'm happy to still have much more to learn.  ", 
                  shortDescription: "Persistence" }   
            ]}];


          

  return (
    <div style={{ fontFamily: 'Figtree, sans-serif' }}>
      <header className="p-6 bg-white shadow-md w-full">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Francis Whanui Easton Raureti</h1>
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-blue-600">About</Link></li>
            <li><Link href="/skills" className="hover:text-blue-600 font-bold">Skills</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <div className="min-h-screen bg-gray-100 text-gray-900 p-8">
        <main className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, catIndex) => (
            <div key={catIndex} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
              <div className="grid grid-cols-1 gap-4">
                {category.skills.map((skill: any, skillIndex: number) => {
                  const isExpanded = expandedSkillIndex[catIndex] === skillIndex;

                  return (
                    <div key={skillIndex} className="flex flex-col items-center space-y-3 p-3 border rounded-lg shadow-sm text-center bg-gray-100">
                      <Image
                        src={skill.icon}
                        alt={skill.title}
                        width={80}
                        height={80}
                        className="mb-2"
                      />
                      <h3 className="font-medium text-lg">{skill.title}</h3>
                      <p
                        className={`text-sm text-gray-600 ${isExpanded ? 'text-left' : 'text-center'}`}
                        style={{ whiteSpace: 'pre-line' }}
                      >
                        {isExpanded ? skill.description : skill.shortDescription}
                      </p>
                      <button
                        onClick={() => toggleExpanded(catIndex, skillIndex)}
                        className="text-blue-600 text-sm font-semibold hover:underline"
                      >
                        {isExpanded ? 'Show Less' : 'More'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}