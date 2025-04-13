import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';

function Home() {
  const nameRef = useRef<HTMLSpanElement | null>(null);
  const Frontend = useRef<HTMLSpanElement | null>(null);
  const Developer = useRef<HTMLSpanElement | null>(null);
  const headref = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (nameRef.current) {
      const tl = gsap.timeline();
  
      tl.fromTo(
        nameRef.current,
        { opacity: 0,  y: -500 },
        { opacity: 0.5,  y: -200, duration: 0, ease: 'power2.out' }
      ).to(
        nameRef.current,
        { opacity: 1,  y: 0, duration: 3, ease: 'power4.out' }
      );
    } 
    if (Frontend.current) {
      const tl = gsap.timeline();
  
      tl.fromTo(
        Frontend.current,
        { opacity: 0,  x: -500 },
        { opacity: 0.5,  x: -200, duration: 0, ease: 'power2.out' }
      ).to(
        Frontend.current,
        { opacity: 1,  x: 0, duration: 3, ease: 'power4.out' }
      );
    } 
    if (Developer.current) {
      const tl = gsap.timeline();
  
      tl.fromTo(
        Developer.current,
        { opacity: 0,  x: 500 },
        { opacity: 0.5,  x: 200, duration: 0, ease: 'power2.out' }
      ).to(
        Developer.current,
        { opacity: 1,  x: 0, duration: 3, ease: 'power4.out' }
      );
    } 
  }, []);
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1   ref={headref} className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-8">
            Hi, I'm{' '}
            <span  ref={nameRef} className=" font-bold bg-gradient-to-r from-blue-900 via-teal-400 to-primary-500 bg-clip-text text-transparent inline-block">
              Muhammed Ahmed
            </span>{' '}
            <br /> <span  ref={Frontend} className=" font-bold  inline-block">
            Frontend </span>
            {' '}
            <span  ref={Developer} className=" font-bold  inline-block">
             Developer</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            I create beautiful, responsive, and user-friendly web applications using modern technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-600 border-primary-600 text-white hover:bg-primary-800 transition-colors"
            >
              View Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:text-primary-400 dark:border-primary-400 dark:hover:bg-primary-900/50 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default Home;