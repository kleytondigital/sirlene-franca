import { useEffect } from 'react';
import { useAdmin } from '../contexts/AdminContext';

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

const FacebookPixel = () => {
  const { settings } = useAdmin();
  const pixelId = settings.facebookPixel;

  useEffect(() => {
    if (!pixelId) return;

    // Verifica se o pixel já foi carregado
    if (window.fbq) return;

    // Adiciona o script de forma segura
    (function (f: any, b: Document, e: string, v: string) {
      let n: any, t: HTMLScriptElement, s: Element | null;
      
      if (f.fbq) return;
      
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];
      
      t = b.createElement(e) as HTMLScriptElement;
      t.async = true;
      t.src = v;
      
      s = b.getElementsByTagName(e)[0];
      if (s && s.parentNode) {
        s.parentNode.insertBefore(t, s);
      }
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    // Inicializa o pixel
    window.fbq('init', pixelId);
    window.fbq('track', 'PageView');
  }, [pixelId]);

  // noscript para fallback
  return (
    <>
      {pixelId && (
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      )}
    </>
  );
};

export default FacebookPixel;