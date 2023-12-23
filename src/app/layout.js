import React from 'react';
import './globals.css'
import "bootstrap/dist/css/bootstrap.min.css";

import Header from '../app/Component/Header';
import Footer from '../app/Component/Footer';

export const metadata = {
  title: 'Stage Pass',
  description: 'StagePass',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
