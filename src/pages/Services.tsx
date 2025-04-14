import  { useEffect, useRef } from 'react';
import { Code, Layout, Smartphone, Zap } from 'lucide-react';
import { gsap } from 'gsap';

function Services() {
  const headref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (headref.current) {
      const tl = gsap.timeline();
  
      tl.fromTo(
        headref.current,
        { opacity: 0,  },
        { opacity: 1, duration: 3, ease: 'power2.out' }
      )
    } 
  }, []);
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building responsive and dynamic web applications using modern frameworks and best practices.',
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Ensuring your website looks and functions perfectly across all devices and screen sizes.',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimizing web applications for maximum speed and efficiency.',
    }, {
      icon: Layout,
      title: 'UI/UX Design',
      description: 'Bulid intuitive and beautiful user interfaces that provide exceptional user experiences.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 ">
      <div className=" mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Services
          </h1>
          <div className="h-1 w-20 bg-primary-600 rounded mx-auto"></div>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300  mx-auto">
            I offer a comprehensive range of web development services to help bring your digital vision to life.
          </p>
        </div>

        <div ref={headref}className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <service.icon className="w-12 h-12 text-primary-600 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;