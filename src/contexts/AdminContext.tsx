
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AdminSettings {
  fontFamily: 'Montserrat' | 'Inter' | 'Playfair Display';
  checkoutLink: string;
  vslVideoLink: string;
  testimonialsLink: string;
  instagramLink: string;
  linkedinLink: string;
  emailContact: string;
  facebookPixel: string;
}

interface AdminContextType {
  settings: AdminSettings;
  updateSettings: (newSettings: Partial<AdminSettings>) => void;
}

const defaultSettings: AdminSettings = {
  fontFamily: 'Montserrat',
  checkoutLink: 'https://pay.kirvano.com/84d6ae17-c188-4c0c-a707-46ed0e92a7f9',
  vslVideoLink: 'https://www.youtube.com/embed/jNVKwHV72kU?si=Yg76ngCXqUkO4eGq',
  testimonialsLink: '#',
  instagramLink: 'https://www.instagram.com/sirlenefrancamakeup/',
  linkedinLink: '#',
  emailContact: '#',
  facebookPixel: '735233479440974',
};

const AdminContext = createContext<AdminContextType>({
  settings: defaultSettings,
  updateSettings: () => {},
});

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
};

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AdminSettings>(defaultSettings);

  useEffect(() => {
    const savedSettings = localStorage.getItem('adminSettings');
    if (savedSettings) {
      setSettings({ ...defaultSettings, ...JSON.parse(savedSettings) });
    }
  }, []);

  const updateSettings = (newSettings: Partial<AdminSettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);
    localStorage.setItem('adminSettings', JSON.stringify(updatedSettings));
  };

  return (
    <AdminContext.Provider value={{ settings, updateSettings }}>
      {children}
    </AdminContext.Provider>
  );
};
