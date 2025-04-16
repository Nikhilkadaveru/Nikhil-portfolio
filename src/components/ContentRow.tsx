import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  image: string;
  description: string;
  link?: string;
}

interface ContentRowProps {
  title: string;
  items: ContentItem[];
  onCardClick?: (project: ContentItem) => void; // ✅ This line is required
}

const ContentRow: React.FC<ContentRowProps> = ({ title, items, onCardClick }) => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-12 relative group">
      <h2 className="text-2xl font-bold mb-6 text-white pl-4 md:pl-8">
        <span className="bg-gradient-to-r from-[#E50914] to-red-700 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      <div className="relative">
        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#E50914]"
          >
            <ChevronLeft size={24} />
          </button>
        )}
        {showRightArrow && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#E50914]"
          >
            <ChevronRight size={24} />
          </button>
        )}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex space-x-4 overflow-x-auto pb-4 px-4 md:px-8 scroll-smooth hide-scrollbar"
        >
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => onCardClick?.(item)}// ✅ Add this to trigger modal
              className="flex-none w-72 group/item cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover/item:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-200 text-sm line-clamp-2">{item.description}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 text-[#E50914] hover:text-red-700 transition-colors duration-300"
                    >
                      Learn More →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentRow;