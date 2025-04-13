
import { FileDown, Mail, MapPin, Phone } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
function About() {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const Contentref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (imageRef.current) {
      const tl = gsap.timeline();
  
      tl.fromTo(
        imageRef.current,
        { opacity: 0, x: -200 },
        { opacity: 1, x: 0, duration: 2, ease: 'power4.out' },
        0 // start at time 0
      );
    } 
    if (Contentref.current) {
      const tl = gsap.timeline();

  
      tl.fromTo(
        Contentref.current,
        { opacity: 0, x: 200 },
        { opacity: 1, x: 0, duration: 2, ease: 'power4.out' },
        0 // start at time 0 (same as image)
      );
    } 
  }, []);
  return (
    <div  className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Profile Image Section */}
          <div  ref={imageRef} className="relative">
            <img
              src="/Myimage.png"
              alt="Profile"
              className="rounded-2xl shadow-xl w-full object-cover aspect-[3/4]"
            />
            <div className="absolute inset-0 bg-primary-600/10 rounded-2xl"></div>
          </div>

          {/* Content Section */}
          <div ref={Contentref} className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                About Me
              </h1>
              <div className="h-1 w-20 bg-primary-600 rounded"></div>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                I'm a passionate Frontend Developer with experience crafting beautiful and functional web experiences. My expertise lies in creating responsive, user-friendly interfaces that deliver exceptional user experiences.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                <Mail className="w-5 h-5 text-primary-600" />
                <span>muhameedahmed4472@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                <Phone className="w-5 h-5 text-primary-600" />
                <span>+201222934568</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                <MapPin className="w-5 h-5 text-primary-600" />
                <span>Egypt,Cairo</span>
              </div>
            </div>

            {/* Skills Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {['Reactjs', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Nextjs','Git/Github'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Download CV Button */}
            <a
              href="https://drive.google.com/uc?export=download&id=1PE1Jr0sgATV91JomHi2GmYwlMAD3jkhb"
              download
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <FileDown className="w-5 h-5 mr-2" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;