'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbarBlur}>
      <div className={styles.navbarContainer}>
        <div className={styles.logoContainer}>
          <Image src="/logo.ico" alt="Logo" width={50} height={50} />
        </div>
        <button className={styles.menuButton} onClick={toggleMenu}>
          &#9776; {/* Menu icon */}
        </button>
        <div className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          <Link href="/" className={styles.navbuttonBlur}>Home</Link>
          <Link href="/about" className={styles.navbuttonBlur}>About</Link>
          <Link href="/gallery" className={styles.navbuttonBlur}>Gallery</Link>
          <Link href="/contact" className={styles.navbuttonBlur}>Contact</Link>
          <Link href="/certification" className={styles.navbuttonBlur}>Certification</Link>
          <Link href="/product" className={styles.navbuttonBlur}>Product</Link>
          <Link href="/sustainability" className={styles.navbuttonBlur}>Sustainability</Link>
        </div>
      </div>
    </nav>
  );
}
