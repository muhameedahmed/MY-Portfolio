//import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/muhameedahmed', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammed-ahmmed/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:muhameedahmed4472@gmail.com', label: 'Mail' },
    { icon: Twitter, href: 'https://x.com/Muhameedahmed6?t=GYl4k51YWDeCCCNpEdXYRg&s=09', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/muhammeddahmmed_/', label: 'Instagram' },
  ];

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2025 - Muhammed Ahmed
          </p>
          <div className="flex space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;