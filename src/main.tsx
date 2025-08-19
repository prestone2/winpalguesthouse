import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Insert Google Analytics (gtag)
// guard to avoid injecting twice in HMR/dev
if (typeof window !== 'undefined' && !(window as any).__GA_LOADED__) {
  const GA_ID = 'G-8N7DBB2DJ8'

  // external gtag script
  const s1 = document.createElement('script')
  s1.async = true
  s1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(s1)

  // inline init script (matches snippet you provided)
  const s2 = document.createElement('script')
  s2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = window.gtag || gtag;
    gtag('js', new Date());
    gtag('config', '${GA_ID}');
  `
  document.head.appendChild(s2)

  ;(window as any).__GA_LOADED__ = true
}

createRoot(document.getElementById("root")!).render(<App />);
