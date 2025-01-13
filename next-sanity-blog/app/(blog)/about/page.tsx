import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  return (
    <div className="about flex flex-col md:flex-row items-center bg-white p-8 md:p-16">
      {/* Left Section for Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image width={1000} height={1000}
          src="/nahyan.jpeg" // Replace this with your image path
          alt="Nahyan KHan"
          className="rounded-md h-3/4 w-3/4"
        />
      </div>
      {/* Right Section for Content */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">ABOUT ME</h1>
        <h2 className="text-xl text-purple-600 font-semibold mb-4">Nahyan Khan - Developer</h2>
        <p className="text-gray-600 mb-6">
        I am a skilled front-end developer with expertise in Next.js and using Sanity for content management. As a senior student of GIAIC, you are deeply engaged in the world of web development and have a strong understanding of modern tools and frameworks. Your technical knowledge and hands-on experience set you up for success in creating dynamic and responsive web applications. You continue to build on your expertise, aiming to further enhance your skills and contribute to the field of development.







        </p>
        {/* Social Media Links */}
        <div className="flex space-x-4">
          <Link href="https://behance.net">
            <div className="text-gray-500 hover:text-purple-600 text-2xl">
              <i className="fab fa-behance"></i>
            </div>
          </Link>
          <Link href="https://dribbble.com">
            <div className="text-gray-500 hover:text-purple-600 text-2xl">
              <i className="fab fa-dribbble"></i>
            </div>
          </Link>
          <Link href="https://twitter.com">
            <div className="text-gray-500 hover:text-purple-600 text-2xl">
              <i className="fab fa-twitter"></i>
            </div>
          </Link>
          <Link href="https://instagram.com">
            <div className="text-gray-500 hover:text-purple-600 text-2xl">
              <i className="fab fa-instagram"></i>
            </div>
          </Link>
          <Link href="https://linkedin.com">
            <div className="text-gray-500 hover:text-purple-600 text-2xl">
              <i className="fab fa-linkedin"></i>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;