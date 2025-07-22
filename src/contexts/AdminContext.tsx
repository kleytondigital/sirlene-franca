
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
  checkoutLink: '#inscricoes',
  vslVideoLink: '#',
  testimonialsLink: '#',
  instagramLink: '#',
  linkedinLink: '#',
  emailContact: '#',
  facebookPixel: '',
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
