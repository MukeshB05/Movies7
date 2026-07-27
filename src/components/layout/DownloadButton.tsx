'use client';

import { useState, useEffect } from 'react';
import { IconDownload } from '@tabler/icons-react';

export function DownloadButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Register Service Worker for PWA
    if ('serviceWorker' in navigator) {
      const handleRegister = () => {
        navigator.serviceWorker.register('/sw.js').then(
          (registration) => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
          },
          (err) => {
            console.log('ServiceWorker registration failed: ', err);
          }
        );
      };

      if (document.readyState === 'complete') {
        handleRegister();
      } else {
        window.addEventListener('load', handleRegister);
        return () => window.removeEventListener('load', handleRegister);
      }
    }
  }, []);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      setIsReady(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Check if app is already installed/running in standalone mode
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsReady(false);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response to the install prompt: ${outcome}`);
      setDeferredPrompt(null);
      setIsReady(false);
    } else {
      // Fallback/Notice for iOS or unsupported browsers
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
      if (isIOS) {
        alert("To install YorWatch on iOS, tap the Share button in Safari and select 'Add to Home Screen'.");
      } else {
        alert("PWA installation is supported in Chrome, Edge, and mobile browsers. Please open this site in a compatible browser.");
      }
    }
  };

  return (
    <button
      onClick={handleInstallClick}
      className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-primary/20 hover:text-white rounded-xl text-white/70 text-sm transition-all border border-white/10 hover:border-primary/30"
    >
      <IconDownload className="w-4 h-4" />
      <span>Download App</span>
    </button>
  );
}
