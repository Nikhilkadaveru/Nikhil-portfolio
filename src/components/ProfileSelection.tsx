import React from 'react';

interface Profile {
  id: string;
  name: string;
  image: string; // ✅ replaced icon with image URL
  description: string;
}

const profiles: Profile[] = [
  {
    id: 'recruiter',
    name: 'Recruiter',
    image: 'src/static/users/Recruiter.jpg',
    description: 'View my professional experience and achievements'
  },
  {
    id: 'developer',
    name: 'Developer',
    image: 'src/static/users/Developer.jpg',
    description: 'Check out my technical projects and contributions'
  },
  {
    id: 'friends',
    name: 'Friends',
    image: 'src/static/users/peanut.png',
    description: 'A more personal look at who I am'
  },
  {
    id: 'stalker',
    name: 'Stalker',
    image: 'src/static/users/Stalker.jpg',
    description: 'Just browsing? Start here'
  },
];

interface ProfileSelectionProps {
  onProfileSelect: (profile: string) => void;
}

const ProfileSelection: React.FC<ProfileSelectionProps> = ({ onProfileSelect }) => {
  const [hoveredProfile, setHoveredProfile] = React.useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl md:text-6xl mb-4 font-bold bg-gradient-to-r from-[#E50914] to-red-700 bg-clip-text text-transparent">
        Who's Watching?
      </h1>
      <p className="text-gray-400 mb-12 text-center max-w-lg">
        {hoveredProfile
          ? profiles.find(p => p.id === hoveredProfile)?.description
          : "Select a profile to continue"}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {profiles.map((profile) => (
          <button
            key={profile.id}
            onClick={() => onProfileSelect(profile.id)}
            onMouseEnter={() => setHoveredProfile(profile.id)}
            onMouseLeave={() => setHoveredProfile(null)}
            className="group flex flex-col items-center transition-all duration-300 hover:scale-110"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-md overflow-hidden border-2 border-transparent group-hover:border-white shadow-lg group-hover:shadow-red-900/50 transition-all duration-300">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="mt-4 text-gray-400 group-hover:text-white transition-colors duration-300 text-lg">
              {profile.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileSelection;
