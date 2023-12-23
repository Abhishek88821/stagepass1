import React from 'react';
import './globals.css'
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: 'Stage Pass',
  description: 'StagePass',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning >
        {children}
      </body>
    </html>
  )
}
