'use client'
import { Happy_Monkey } from 'next/font/google';
import Head from 'next/head';
import { useState } from 'react';
import { FaTelegram, FaTwitter } from 'react-icons/fa'; // Import icons

// Load Google Font
const happy_Monkey = Happy_Monkey({ weight: '400', subsets: ['latin'], display: 'swap' });

export default function Home() {
  const [isCopied, setIsCopied] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('6wdBgYfsU5CBUFKJXnZjBx4dSeKdMJjrKejir1pAze3w');
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={happy_Monkey.className}>
      <Head>
        <title>Ticket</title>
        <meta name="Website for the Ticket token" content="The Ticket " />
      </Head>

      {/* Navbar */}
      <nav className="bg-gray-200 p-4 flex justify-between items-center">
        {/* Left: Image with Byline */}
        <div className="flex items-center">
          <img
            src="/ticketlogo.png" // Replace with your image path
            alt="Logo"
            className="h-12 w-14"
          />
          <div className="ml-3">
            <p className="text-lg font-bold">Ticket</p>
            <p className="text-xs text-black italic">Ready to leave the trenches, anon ?</p>
            <p className="text-xs text-black italic"> Get your ticket</p>
          </div>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Right: Clickable Links (Hidden on Small Screens) */}
        <div className="hidden md:flex space-x-6">
          <a href="#section1" className="text-red-800 text-xs hover:text-gray-600 transition-colors">
            Home
          </a>
          <a href="#about" className="text-blue-800 text-xs hover:text-gray-600 transition-colors">
            About
          </a>
          <a href="#private-sale" className="text-green-800 text-xs hover:text-gray-600 transition-colors">
            Private Sale
          </a>
          <a href="#image-section" className="text-yellow-800 text-xs hover:text-gray-600 transition-colors">
            Tokenomics & Roadmap
          </a>
          <a href="#link-section" className="text-blue-800 text-xs hover:text-gray-600 transition-colors">
            Links
          </a>
        </div>
      </nav>

      {/* Mobile Menu (Visible on Small Screens) */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-200 w-full p-4">
          <a href="#section1" className="block text-red-800 text-xs hover:text-gray-600 transition-colors py-2">
            Home
          </a>
          <a href="#about" className="block text-blue-800 text-xs hover:text-gray-600 transition-colors py-2">
            About
          </a>
          <a href="#private-sale" className="block text-green-800 text-xs hover:text-gray-600 transition-colors py-2">
            Private Sale
          </a>
          <a href="#image-section" className="block text-yellow-800 text-xs hover:text-gray-600 transition-colors py-2">
            Tokenomics & Roadmap
          </a>
          <a href="#link-section" className="block text-blue-800 text-xs hover:text-gray-600 transition-colors py-2">
            Links
          </a>
        </div>
      )}

      {/* Rest of your sections */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center bg-white"
        style={{
          backgroundImage: "url('/ticketlogo.png')",
          backgroundSize: '70% 70%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></section>

      <section id="about" className="p-8 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="mb-2">
            <span className="font-bold text-blue-900">TICKET -</span> the memecoin from{' '}
            <span className="font-bold text-red-800">Providence Labs</span>.
          </p>
          <p className="mb-2">Your golden ticket to the moon.</p>
          <p className="mb-2">Reward for being early. For believing. For staying</p>
          <p className="mb-2">The grind is over. Your seat is assured.</p>
          <p className="mb-2">No insiders no nonsense. Just a doxxed dev and community that believes.</p>
          <p>Leave the jeets and fudders, the ruggers on PumpFun in the dust.</p>
          <p className="mb-4 mt-2">
            <span className="font-bold text-blue-900">TICKET</span> is your way out.
          </p>
          <p>
            Get your <span className="font-bold text-red-900">TICKET</span> now. The fun begins at $50 million.
          </p>
        </div>
      </section>

      <section id="private-sale" className="p-8 bg-gray-300">
        <div className="max-w-2xl mx-auto text-center">
          <p className="mb-2 text-blue-800 text-lg">Ticket Private Sale is Live</p>
          <p className="mb-1">Target raise: 20 Sol</p>
          <p className="mb-2">
            To participate send Sol to CA <span className="text-xs">(click to copy)</span>:
          </p>
          <div
            className="mt-4 mb-4 p-2 bg-gray-400 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors"
            onClick={handleCopy}
          >
            <code className="text-xs md:text-sm text-gray-800">
              6wdBgYfsU5CBUFKJXnZjBx4dSeKdMJjrKejir1pAze3w
            </code>
            {isCopied && <span className="ml-2 text-green-600">Copied!</span>}
          </div>
          <div className="max-w-2xl mx-auto text-center text-xs">
            <p>Min 1 Sol Max 3 Sol per wallet</p>
            <p>
              Ticket tokens will be sent to participating wallets before launch on Orca. Excess above 20 target Sol will
              be returned.
            </p>
          </div>
        </div>
      </section>

      <section id="image-section" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <img
              src="/tokenomics.png"
              alt="Image 1"
              className="w-full md:w-[50%] rounded-lg shadow-lg"
            />
            <img
              src="/ticketroadmap.png"
              alt="Image 2"
              className="w-full md:w-[60%] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <footer id="link-section" className="bg-gray-400 p-4 text-center text-xs">
        <p>Made with love at Providence Labs</p>
        <p>The ticker is Ticket. Copyright 2025</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://t.me/+RbUtbxemkU4zY2M0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600 transition-colors"
          >
            <FaTelegram className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/your-twitter-link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600 transition-colors"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
        </div>
      </footer>
    </div>
  );
}