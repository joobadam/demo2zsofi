"use client";

import { useEffect } from 'react';
import { initToolbar } from '@21st-extension/toolbar';

export function TwentyFirstToolbar() {
  useEffect(() => {
    // Only initialize in development mode
    if (process.env.NODE_ENV === 'development') {
      const stagewiseConfig = {
        plugins: [],
        // Custom configuration options
        theme: 'light', // or 'dark'
        position: 'bottom-right', // toolbar position
        autoHide: false, // always visible
      };

      try {
        initToolbar(stagewiseConfig);
        console.log('21st Extension Toolbar initialized successfully');
      } catch (error) {
        console.error('Failed to initialize 21st Extension Toolbar:', error);
      }
    }
  }, []);

  // This component doesn't render anything visible
  // It just initializes the toolbar
  return null;
}
