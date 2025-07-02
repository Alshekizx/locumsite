// components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" flex flex-col items-center  bg-[var(--primary-color)] text-white pt-12 pb-8 px-4"
      style={{
    backgroundImage: `url('/images/Patterns1.png'), url('/images/Patterns2.png')`,
      backgroundPosition: 'left bottom, right top',
      backgroundRepeat: 'no-repeat, no-repeat',
      backgroundSize: 'auto 100%, auto 70%',
    }}
    >
      <div className='containerDiv'>

     <div className="flex lg:flex-row flex-col justify-between item-center gap-4 mb-10">
     <div className="w-60 h-20 relative">
    <Image
      src="/logos/WhiteMployusRecruitmentLogo2.png"
      alt="MployUs Logo"
      fill
      className="object-contain"
    />
  </div>
          
          <div className="">
            <p className="mb-2" style={{color:'white' }}>Subscribe to our new letters</p>
            <div className="flex gap-1">
              <input
                type="email"
                placeholder="Your email address"
                className="rounded-md px-5 py-3 w-full text-black bg-white"
              />
              <button className="bg-[var(--primary-400)] border border-white hover:bg-white hover:text-[var(--primary-color)] px-4 rounded-md transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

      <div className=" flex flex-wrap justify-between gap-8 w-full pb-8">
        {/* Logo + Subscription */}
       

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/views/" className="footerLinks">Home</Link></li>
            <li><Link href="/views/ourHrServices" className="footerLinks">Our HR Services</Link></li>
            <li><Link href="/views/ourHrExperties" className="footerLinks">Our HR Expertise</Link></li>
            <li><Link href="/views/blog" className="footerLinks">Prices</Link></li>
            <li><Link href="/views/blog" className="footerLinks">Blog</Link></li>
            <li><Link href="/views/contactUs" className="footerLinks">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li>MployUs HR Advice</li>
            <li>Recruitment Support</li>
            <li>Locums Provision</li>
            <li>HR Software & Mobile App</li>
            <li>Locum Software & Mobile App</li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-semibold mb-4">Our Products</h4>
          <ul className="space-y-2 text-sm">
            <li>MployUs HR Software</li>
            <li>Recruitment Software</li>
            <li>MployUs Locums</li>
            <li>HR Software & Mobile App</li>
            <li>Locum Software & Mobile App</li>
            <li>Finance Management Software</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
           <li>
    <Link href="/views/privacyPolicy" className="hover:underline">
      Privacy Statement
    </Link>
  </li>
  <li>
    <Link href="/views/termsAndConditions" className="hover:underline">
      Terms and Conditions
    </Link>
  </li>
  <li>
    <Link href="/views/cookiesPolicy" className="hover:underline">
      Cookies Policy
    </Link>
  </li>
          </ul>
        </div>
      </div>

      {/* Contact + Locations + Social */}
      <div className=" flex flex-wrap justify-between gap-8 w-full pb-8 mt-8 text-sm text-[var(--secondary-100)] border-b border-[var(--primary-300)] ">
        <div>
          <h4 className="font-semibold flex flex-col mb-2">Contact Us:</h4>
          <div style={{color:'white' }}>📞 0818 900 300</div>
          <div style={{color:'white' }}>✉️ info@mployushr.com</div>

          <div className='flex  mt-4 flex-row items-center gap-2'>
      <h4 className="font-semibold ">Connect with us on:</h4>
      <div className="flex items-center space-x-4 ">
      <Link href="#" className="text-white hover:text-gray-300 transition">
        <FaLinkedin size={20} />
      </Link>
      <Link href="#" className="text-white hover:text-gray-300 transition">
        <FaTwitter size={20} />
      </Link>
    </div>
    </div>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Our Locations:</h4>
          <span style={{color:'white' }}><strong>Mployus Ireland</strong><br />7 Station Hill, Clongriffin, Dublin, IRL</span>
        </div>

        <div>
          <h4 className="font-semibold mb-2"> </h4>
          <span style={{color:'white' }}><strong>Mployus UK</strong><br />82 Gorton Road, Stockport, Manchester, UK</span>
        </div>

    <div >
      

      <div className="mt-4">
        <div className="bg-[#ffffff55] border border-white text-black px-10 py-2 rounded-md inline-flex items-center gap-2">
          <span className="text-xl">🇮🇪</span>
          <span>Ireland</span>
          <ChevronDownIcon className="w-4 h-4 ml-1 text-black" />
        </div>

        <p className='mt-2'>Download our HR Mobile App</p>
        <div className='flex items-center gap-4 mt-2'>
          <Link href="#" className="text-white hover:text-gray-300 transition">
          <Image
            src="/images/GooglePlay.png"
            alt="Google Play"
            width={120}
            height={40}
            className=""
          />
          </Link>
          <Link href="#" className="text-white hover:text-gray-300 transition">
            <Image
              src="/images/Apple.png"
              alt="Apple Store"
              width={120}
              height={40}
              className=""
            />
          </Link>
        </div>
      </div>
    </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 text-start text-xs text-[var(--secondary-200)]">
        <span style={{color:'white' }}>
          © 2025 Mployus, All Rights Reserved. Mployus Personnel Services t/a Mployus Recruitment.
          Registered in the Republic of Ireland. Registration Number: 734222. United Kingdom:
          Mployus Personnel Services Limited. Registration number: 15628375
        </span>
      </div>
      </div>
    </footer>
  );
};

export default Footer;