import { createGlobalStyle } from "styled-components";
import Bg from "../images/background.png";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #root {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  /* Modern Design System Variables */
  :root {
    /* Typography */
    --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 1.875rem;
    --font-size-4xl: 2.25rem;
    
    /* Colors - Modern Blue Palette */
    --primary-50: #eff6ff;
    --primary-100: #dbeafe;
    --primary-200: #bfdbfe;
    --primary-300: #93c5fd;
    --primary-400: #60a5fa;
    --primary-500: #3b82f6;
    --primary-600: #2563eb;
    --primary-700: #1d4ed8;
    --primary-800: #1e40af;
    --primary-900: #1e3a8a;
    
    /* Neutral Colors */
    --gray-50: #f9fafb;
    --gray-100: #f3f4f6;
    --gray-200: #e5e7eb;
    --gray-300: #d1d5db;
    --gray-400: #9ca3af;
    --gray-500: #6b7280;
    --gray-600: #4b5563;
    --gray-700: #374151;
    --gray-800: #1f2937;
    --gray-900: #111827;
    
    /* Semantic Colors */
    --success: #10b981;
    --warning: #f59e0b;
    --error: #ef4444;
    --info: #3b82f6;
    
    /* Spacing */
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    --space-5: 1.25rem;
    --space-6: 1.5rem;
    --space-8: 2rem;
    --space-10: 2.5rem;
    --space-12: 3rem;
    --space-16: 4rem;
    
    /* Border Radius */
    --radius-sm: 0.375rem;
    --radius-md: 0.5rem;
    --radius-lg: 0.75rem;
    --radius-xl: 1rem;
    --radius-2xl: 1.5rem;
    
    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    
    /* Layout */
    --max-width-sm: 640px;
    --max-width-md: 768px;
    --max-width-lg: 1024px;
    --max-width-xl: 1280px;
    --max-width-2xl: 1536px;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    :root {
      --font-size-3xl: 1.5rem;
      --font-size-4xl: 1.875rem;
    }
  }

  body {
    font-family: var(--font-family);
    font-size: var(--font-size-base);
    line-height: 1.6;
    color: var(--gray-800);
    background: linear-gradient(135deg, #e0f2fe 0%, #b3e5fc 25%, #81d4fa 50%, #4fc3f7 75%, #29b6f6 100%);
    background-attachment: fixed;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    
    /* Add subtle pattern overlay */
    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: 
        radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
      pointer-events: none;
      z-index: -1;
    }
  }

  /* Enhanced Typography */
  h1 {
    font-size: var(--font-size-4xl);
    font-weight: 700;
    color: var(--gray-900);
    line-height: 1.2;
    letter-spacing: -0.025em;
  }

  h2 {
    font-size: var(--font-size-3xl);
    font-weight: 600;
    color: var(--gray-800);
    line-height: 1.3;
  }

  h3 {
    font-size: var(--font-size-2xl);
    font-weight: 600;
    color: var(--gray-800);
    line-height: 1.4;
  }

  p {
    font-size: var(--font-size-base);
    color: var(--gray-600);
    line-height: 1.6;
  }

  /* Layout Components */
  header {
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--gray-200);
    box-shadow: var(--shadow-sm);
    position: sticky;
    top: 0;
    z-index: 50;
  }

  main {
    width: 100%;
    max-width: var(--max-width-2xl);
    margin: 0 auto;
    padding: var(--space-8) var(--space-4);
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  footer {
    width: 100%;
    background: var(--gray-50);
    border-top: 1px solid var(--gray-200);
    padding: var(--space-6) var(--space-4);
    margin-top: auto;
    
    p {
      font-size: var(--font-size-sm);
      color: var(--gray-500);
      text-align: center;
    }
  }

  /* Utility Classes */
  .container {
    width: 100%;
    max-width: var(--max-width-xl);
    margin: 0 auto;
    padding: 0 var(--space-4);
  }

  .card {
    background: white;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    border: 1px solid var(--gray-200);
    overflow: hidden;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-3) var(--space-6);
    font-size: var(--font-size-base);
    font-weight: 500;
    border-radius: var(--radius-md);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    border: none;
    text-decoration: none;
    line-height: 1;
  }

  .btn-primary {
    background: var(--primary-600);
    color: white;
    
    &:hover {
      background: var(--primary-700);
      transform: translateY(-1px);
      box-shadow: var(--shadow-lg);
    }
    
    &:active {
      transform: translateY(0);
    }
  }

  .btn-secondary {
    background: white;
    color: var(--primary-600);
    border: 1px solid var(--primary-200);
    
    &:hover {
      background: var(--primary-50);
      border-color: var(--primary-300);
    }
  }

  /* Smooth transitions for interactive elements */
  a, button, input, select, textarea {
    transition: all 0.2s ease-in-out;
  }

  /* Focus styles for accessibility */
  *:focus {
    outline: 2px solid var(--primary-500);
    outline-offset: 2px;
  }
`

export default GlobalStyle