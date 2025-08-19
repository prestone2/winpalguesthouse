import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Insert Google Analytics (gtag)
if (typeof window !== 'undefined') {
  const GA_ID = 'G-8N7DBB2DJ8'
  const s1 = document.createElement('script')
  s1.async = true
  s1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(s1)

  const s2 = document.createElement('script')
  s2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = window.gtag || gtag;
    gtag('js', new Date());
    gtag('config', '${GA_ID}');
  `
  document.head.appendChild(s2)
}

createRoot(document.getElementById("root")!).render(<App />);
