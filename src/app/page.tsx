
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
export default function Home() {


  return (
    <div className="min-h-screen bg-gray-100 text-gray-900"
    style={{ fontFamily: 'Figtree, sans-serif' }}
    >
      <Head>
        <title>Francis Raureti's Personal Website</title>
        <meta name="description" content="Welcome to my personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="p-6 bg-white shadow-md w-full">
        <nav className="container mx-auto flex space-x-8 justify-between items-center">
          <h1 className="text-3xl font-bold ">Francis Whanui Easton Raureti</h1>
          <ul className="flex space-x-6">
            <Link href="/" className="hover:text-blue-600 font-bold">About</Link>
            <Link href="/skills" className="hover:text-blue-600">Skills</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto p-8 space-y-16">
  <section id="about" className="text-center space-y-10">

    {/* Section Heading */}
    <h2 className="text-4xl font-semibold">About Me</h2>

    {/* Image */}
    <div className="p-4">
      <Image 
        className="block mx-auto border-4 border-gray-500 rounded-lg shadow-md"
        src="/paragonteam.jpg" 
        width={600}
        height={500}
        alt="The Boys" 
      />
    </div>

    {/* About Paragraphs */}
    <div className="space-y-6 text-lg max-w-2xl mx-auto text-left">
      <p>
        I'm currently a Painter/Contractor but am looking to change fields into the tech industry. I have a BS in Computer Science, completed at the Victoria University of Wellington in 2021.
      </p>
      <p>
        I have a passion for software design and engineering and would like to make it a focus of my career.
      </p>
      <p>
        I want to improve my skills and would love for my profession to match my hobby. Having the opportunity to develop my craft consistently is important to me.
      </p>
    </div>

    {/* History Section */}
    <div className="space-y-6">
      <h2 className="text-4xl font-semibold">History</h2>
      <p className="text-lg max-w-2xl mx-auto text-left">
        I finished college in 2011 at Horowhenua College in Levin, where I worked part-time at the local Mitre 10.
        After graduating, I moved to full-time work and used my earnings to fund overseas trips to Europe and Australia. During that time, I earned a manager’s position overseeing the paint, electrical, and seasonal departments.
        <br /><br />
        In 2016, I felt I could be doing more and enrolled at Victoria University to study Computer Science. I worked part-time for Resene Paints Ltd in Wellington throughout my studies until shortly after graduating.
        Due to a back injury from sitting for long hours, I transitioned into a more physical role with Paragon Painting Contractors.
      </p>
    </div>

  </section>
</main>
     
      <div className="fixed bottom-4 right-4 flex flex-col space-y-3">
      <a href="http://www.horowhenua.school.nz/" className="bg-lightgray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-900 transition">
        {/* Your first icon */}
        <img src="/nualogo.png" alt="Icon 1" className="w-6 h-6" />
      </a>
      <a href="https://www.victoria.ac.nz/" className="bg-lightgray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-900 transition">
        {/* Your second icon */}
        <img src="/viclogo.png" alt="Icon 2" className="w-6 h-6" />
      </a>
    </div>
    </div>
  );
}
