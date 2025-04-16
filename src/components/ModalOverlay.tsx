import React from 'react';
import { X } from 'lucide-react';

interface ModalOverlayProps {
  project: {
    title: string;
    image: string;
    description: string;
    bullets?: string[]; // ✅ NEW: array of details
    link?: string;       // ✅ Optional GitHub/Live link
  };
  onClose: () => void;
}

const ModalOverlay: React.FC<ModalOverlayProps> = ({ project, onClose }) => {
    const [expanded, setExpanded] = React.useState(false);

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 rounded-lg overflow-hidden max-w-2xl w-full relative shadow-2xl"
        onClick={(e) => e.stopPropagation()} // prevent click propagation
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-red-500"
        >
          <X size={28} />
        </button>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <p className="text-gray-300">{project.description}</p>

          {/* ✅ Show bullets if expanded */}
          {project.bullets && expanded && (
            <ul className="mt-4 list-disc list-inside text-gray-400 text-sm space-y-1">
              {project.bullets.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}

          {/* ✅ Read More toggle */}
          {project.bullets && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-4 text-sm text-blue-400 hover:underline"
            >
              {expanded ? 'Read Less ▲' : 'Read More ▼'}
            </button>
          )}

          {/* ✅ Optional link button */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-[#E50914] text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition"
            >
              View Project ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalOverlay;
