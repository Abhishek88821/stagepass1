import React from 'react';
import "../app/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../app/Component/Header';
import Footer from '../app/Component/Footer';

export const metadata = {
  title: 'Stage Pass',
  description: 'StagePass',
}

// const MainLayout = ({ children }) => {
//     return (
//       <div>
//         <header>Header for Main Layout</header>
//         {children}
//         <footer>Footer for Main Layout</footer>
//       </div>
//     );
//   };

// const MainLayout = ({ children }) => {

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
};

export default MainLayout;
