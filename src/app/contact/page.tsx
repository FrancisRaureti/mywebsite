"use client"
import { useState, FormEvent } from 'react';
import Link from "next/link";

export default function Contact() {
  
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, message }),
    });

    if (response.ok) {
      alert('Message sent successfully!');
      setEmail('');
      setMessage('');
    } else {
      alert('Error sending message.');
    }
  };

      return  (
      <div className="min-h-screen bg-gray-100 text-gray-900 scrollbar-gutter"
        style={{ fontFamily: 'Figtree, sans-serif',
        overflowY: 'scroll',
        scrollbarGutter: 'stable'
       }}
       >
        <header className="p-6 bg-white shadow-md w-full">
          <nav className="container mx-auto flex space-x-8 justify-between items-center">
          <h1 className="text-3xl font-bold ">Francis Whanui Easton Raureti</h1>
            <ul className="flex space-x-6">
              <Link href="/" className="hover:text-blue-600">About</Link>
              <Link href="/skills" className="hover:text-blue-600">Skills</Link>
              <Link href="/contact" className="hover:text-blue-600 font-bold">Contact</Link>
           </ul>
          </nav>
        </header>
        <div className="min-h-[calc(100vh-10rem)] flex items-center">
          <main className="container mx-auto p-8 items-center">
          <section id="contact" className="text-center">
          <h2 className="text-4xl font-semibold mb-4">Contact Me</h2>
          <div className="space-y-6">
          <p>I would love to get in touch with you! Please feel free to leave your email and a message so I can get in touch.</p>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 border rounded-lg bg-white"
              />
              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full p-3 border rounded-lg bg-white"
              />
              <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Send Message
              </button>
            </form>
            </div>
          </section>
          </main>
        </div>
      </div>
    )
}