import React, { useState } from 'react';
import NetflixIntro from './components/NetflixIntro';
import ProfileSelection from './components/ProfileSelection';
import ProfileContent from './components/ProfileContent';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleProfileSelect = (profileId: string) => {
    setSelectedProfile(profileId);
  };

  if (showIntro) {
    return <NetflixIntro />;
  }

  if (!selectedProfile) {
    return <ProfileSelection onProfileSelect={handleProfileSelect} />;
  }

  return <ProfileContent profileId={selectedProfile} />;
}

export default App;