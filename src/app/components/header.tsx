'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import {
  Bars3Icon,
  HomeIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { useAuth } from '../context/authContext';

import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const [isHrDropdownOpen, setIsHrDropdownOpen] = useState(false);
  const hrDropdownRef = useRef<HTMLDivElement | null>(null);
  const mobileToggleButtonRef = useRef<HTMLButtonElement | null>(null);

 const { isLoggedIn, logout } = useAuth();

 


  // Close dropdown on outside click
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Node;

        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(target)
        ) {
          setIsDropdownOpen(false);
        }

        if (
          mobileMenuRef.current &&
          !mobileMenuRef.current.contains(target) &&
          mobileToggleButtonRef.current &&
          !mobileToggleButtonRef.current.contains(target)
        ) {
          setIsMobileMenuOpen(false);
        }

        if (
          hrDropdownRef.current &&
          !hrDropdownRef.current.contains(target)
        ) {
          setIsHrDropdownOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

  const UserIcon = () =>
    isLoggedIn ? (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          className="rounded-full bg-[var(--primary-color)] overflow-hidden w-10 h-10 flex items-center justify-center"
        >
          <Image
            src="/images/default.jpg"
            alt="User Icon"
            width={100}
            height={100}
            className="object-cover w-full h-full"
          />
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-[var(--header-color)] border rounded shadow-lg z-50 text-sm">
            <Link
              href="/myApplications"
              className="block px-4 py-2 hover:text-[var(--primary-color)] text-[var(--text-dark)]"
            >
              My Applications
            </Link>
            <Link
              href="/myProfile"
              className="block px-4 py-2 hover:text-[var(--primary-color)] text-[var(--text-dark)]"
            >
              My Profile
            </Link>

          <button onClick={logout} className="block px-4 py-2 hover:text-[var(--primary-color)] text-[var(--text-dark)]">
            Logout
          </button>

          </div>
        )}
      </div>
    ) : (
      <div className='flex flex-row items-center gap-1'>
        <Link href="/auth/signup" >
        <div className=" inverseButton" style={{borderRadius:"5px", borderWidth:' 1.5px',padding: '5px 10px', borderColor: 'var(--secondary-200),', color: 'var(--secondary-400)'}}>
        Register
        </div>
      </Link>
        <Link href="/auth/login" >
        <div className=" button" style={{ borderRadius:"5px", borderWidth:' 1.5px',padding: '5px 10px'}}>
          Login
          </div>
        </Link>
      </div>
    );

const NavLinks = ({ closeMenu }: { closeMenu?: () => void }) => {
  const pathname = usePathname();
  

  const isActive = (path: string) => pathname === path;

  const linkClass = (path: string) =>
    `  transition pb-1 ${isActive(path) ? 'text-[var(--primary-color)]  border-b-2 border-[var(--primary-color)] ' : ''}`;

  return (
    <>
      <Link href="/" className={linkClass('/')} onClick={closeMenu}>
        Home
      </Link>

    <Link
        href="/locumShifts"
        className={linkClass('/locumShifts')}
        onClick={closeMenu}
      >
        Locum Shifts
      </Link>

      <Link
        href="/permanentJobs"
        className={linkClass('/permanentJobs')}
        onClick={closeMenu}
      >
       Permanent Jobs
      </Link>
      <Link
        href="/employersTabs"
        className={linkClass('/employersTabs')}
        onClick={closeMenu}
      >
        Employers
      </Link>

    <Link
      href="/training"
      className={linkClass('/training')}
      onClick={closeMenu}
    >
      Training
    </Link>

      <Link
        href="/blog"
        className={linkClass('/blog')}
        onClick={closeMenu}
      >
        Blog
      </Link>
      <div className="lg:hidden md:hidden sm:flex text-[var(--text-muted)] text-lg">
            <UserIcon />
        </div>
    </>
  );
};


  return (
    <header className="bg-[var(--header-color)] text-[var(--text-dark)] fixed top-0 w-full z-50 flex flex-col items-center">
      <div className='max-w-[1400px] w-full'>
      <div className="px-4 py-4 flex justify-between items-center">
        {/* Logo and Icons */}
        <div className="flex items-center gap-2 ">
          <div className='hidden lg:flex items-center gap-1'>
            <HomeIcon className="h-8 w-8 text-[var(--primary-color)]" />
            <ChevronRightIcon className="h-8 w-6 text-[var(--text-muted)]" />
          </div>
          <Link href="/" className="flex items-center w-30">
            <Image
              src="/logos/MployusLocumsLogo1.png"
              alt="Logo"
              width={120}
              height={120}
              className="w-full"
            />
          </Link>
        </div>

        {/* User Icon & Mobile Menu Toggle */}
        <div className="flex items-center space-x-1 z-50 relative">
          <button
            ref={mobileToggleButtonRef}
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
            className="md:hidden text-[var(--text-muted)]"
            aria-label="Toggle Menu"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop Nav */}
       <nav className="hidden md:flex overflow-x-auto scrollbar-hide">
          <div className="flex space-x-6 text-[var(--text-muted)] text-base whitespace-nowrap px-2">
            <NavLinks />
          </div>
        </nav>

        {/* Desktop User Icon */}
        <div className="hidden md:flex items-center text-[var(--text-muted)] text-lg">
          <UserIcon />
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden flex flex-col bg-[var(--header-color)] px-4 pb-4 space-y-2 text-[var(--text-muted)]"
        >
          <NavLinks closeMenu={() => setIsMobileMenuOpen(false)} />
        </div>
      )}
      </div>
    </header>
   
  );
}