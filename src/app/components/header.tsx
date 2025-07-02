'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import {
  Bars3Icon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { useAuth } from '../context/authContext';

import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const [, setIsHrDropdownOpen] = useState(false);
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
              href="/views/myApplications"
              className="block px-4 py-2 hover:text-[var(--primary-color)] text-[var(--text-dark)]"
            >
              My Applications
            </Link>
            <Link
              href="/views/myProfile"
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
     <p className='.pll'>Register</p>  
        </div>
      </Link>
        <Link href="/auth/login" >
        <div className=" button" style={{ borderRadius:"5px", borderWidth:' 1.5px',padding: '5px 10px'}}>
          <p className='.pll'>Login</p>
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
      <Link href="/views/" className={linkClass('/')} onClick={closeMenu}>
        <p className='.pll'>Home</p>
      </Link>

    <Link
        href="/views/locumShifts"
        className={linkClass('/locumShifts')}
        onClick={closeMenu}
      >
       <p className='.pll'>Locum Shifts</p> 
      </Link>

      <Link
        href="/views/permanentJobs"
        className={linkClass('/views/permanentJobs')}
        onClick={closeMenu}
      >
       <p className='.pll'>Permanent Jobs</p>
      </Link>
      <Link
        href="/views/employersTabs"
        className={linkClass('/views/employersTabs')}
        onClick={closeMenu}
      >
       <p className='.pll'> Employers</p>
      </Link>

    <Link
      href="/views/training"
      className={linkClass('/views/training')}
      onClick={closeMenu}
    >
      <p className='.pll'>Training</p>
    </Link>

      <Link
        href="/views/blog"
        className={linkClass('/views/blog')}
        onClick={closeMenu}
      >
        <p className='.pll'>Blog</p>
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
      <div className="px-[2rem] lg:px-[5rem] py-4 flex justify-between items-center">
        {/* Logo and Icons */}
        <div className="flex items-center space-x-2">
          <div className='hidden md:flex flex-row gap-2 items-center'>
          <Image
              src="/images/home3.png"
              alt="Logo"
              width={31}
              height={34}
              className="h-full"
            />
          <ChevronRightIcon className="h-10 w-10  text-[var(--text-muted)]" />
         </div>
           <Link href="/views/" className="flex items-center ">
            <Image
              src="/logos/MployusLocumsLogo1.png"
              alt="Logo"
              width={186}
              height={56}
              className="h-[56px]"
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