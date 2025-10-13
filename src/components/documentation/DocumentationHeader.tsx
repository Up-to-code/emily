// components/documentation/DocumentationHeader.tsx
import { FiBook } from 'react-icons/fi';
import { ReactNode } from 'react';

interface DocumentationHeaderProps {
  title: string;
  description: string;
  breadcrumb?: { name: string; href: string }[];
  icon?: ReactNode;
}

export default function DocumentationHeader({ 
  title, 
  description, 
  breadcrumb = [],
  icon 
}: DocumentationHeaderProps) {
  return (
    <div className="border-b border-[#F5CB9B] bg-white sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        {breadcrumb.length > 0 && (
          <nav className="flex items-center gap-2 text-sm text-[#4A5568] mb-4">
            <FiBook className="text-[#62BCBA]" />
            {breadcrumb.map((item, index) => (
              <span key={index} className="flex items-center gap-2">
                <a 
                  href={item.href}
                  className="hover:text-[#62BCBA] transition-colors duration-300"
                >
                  {item.name}
                </a>
                {index < breadcrumb.length - 1 && (
                  <span className="text-[#F5CB9B]">/</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Title & Description */}
        <div className="flex items-center gap-4">
          {icon && <div className="text-3xl">{icon}</div>}
          <div>
            <h1 className="text-4xl font-bold text-[#2D3748] mb-2">
              {title}
            </h1>
            <p className="text-xl text-[#4A5568] max-w-3xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}