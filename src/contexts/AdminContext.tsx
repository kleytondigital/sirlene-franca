
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
  vslVideoLink: '#',
  testimonialsLink: '#',
  instagramLink: 'https://www.instagram.com/sirlenefrancamakeup/',
  linkedinLink: '#',
  emailContact: '#',
  facebookPixel: '<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '735233479440974');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=735233479440974&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->',
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
