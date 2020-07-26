import React from 'react';
import '@scss/reset.scss';
import { HomePage } from './pages/home/HomePage';

interface AppProps {}

export const App: React.FC<AppProps> = () => {
  return (
    <div>
      <HomePage />
    </div>
  );
};
