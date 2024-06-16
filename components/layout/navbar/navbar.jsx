import Link from 'next/link';
import * as Dialog from '@radix-ui/react-dialog';
import { Wand, Link2, BarChart, CircleDot, Settings2 } from 'lucide-react';
import { useSession } from 'next-auth/react';
import UserAccountNavDesktop from '@/components/utils/usernavbutton-desktop';
import ShareButton from '@/components/utils/share-button';
import SiteHeader from './main-nav';
import ShareModal from '@/components/shared/modals/share-modal';
import React from 'react';
import Image from 'next/image';

const items = [
  {
    title: 'Links',
    href: '/admin',
    icon: <Link2 color="black" size={18} />,
  },
  {
    title: 'Customize',
    href: 'admin/customize',
    disabled: true, // Adding disabled property
    icon: <CircleDot size={18} />,
  },
  {
    title: 'Analytics',
    href: 'admin/analytics',
    disabled: true, // Adding disabled property
    icon: <BarChart color="black" size={18} />,
  },
  {
    title: 'Settings',
    href: '/admin/settings',
    icon: <Settings2 color="black" size={18} />,
  },
];

const Navbar = ({ showName = false, isHomePage = true }) => {
  const session = useSession();

  return (
    <>
      <header className="z-40 top-0 w-[100vw] border-black py-2 bg-white border-b-2">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 items-center">
            <Image
              src={
                'https://utfs.io/f/c0930d4e-af20-48bf-af90-9170d548c238-7zmgxc.png'
              }
              alt="Onemo Logo"
              width={36}
              height={36}
            />
            <div className="hidden sm:flex sm:items-center sm:space-x-6">
              {!showName ? (
                items.map((item) => (
                  <nav key={item.title} className="rounded-xl">
                    {item.disabled ? ( // Conditionally render disabled style
                      <div className="bg-transparent px-2 py-4 flex space-x-2 items-center opacity-50 cursor-not-allowed">
                        {item.icon}
                        <span className="">{item.title}</span>
                      </div>
                    ) : (
                      <Link href={item.href}>
                        <p className="bg-transparent px-2 py-4 flex space-x-2 items-center hover:bg-slate-100 rounded-sm">
                          {item.icon}
                          <span className="">{item.title}</span>
                        </p>
                      </Link>
                    )}
                  </nav>
                ))
              ) : (
                <SiteHeader />
              )}
            </div>
          </div>

          <div className="flex items-center">
            {session.status === 'authenticated' && (
              <div className="flex items-center gap-2">
                <Dialog.Root>
                  <Dialog.Trigger>
                    <ShareButton />
                  </Dialog.Trigger>
                  <ShareModal />
                </Dialog.Root>
                <UserAccountNavDesktop />
              </div>
            )}
          </div>
        </div>
        {!session.status === 'authenticated' || !isHomePage ? (
          <div className="flex items-center justify-center border-t-2 border-gray-200 lg:hidden md:hidden">
            <div className="flex items-center space-x-6 p-1">
              {items?.map((item) => (
                <React.Fragment key={item.title}>
                  <nav key={item.title} className="rounded-xl">
                    {item.disabled ? ( // Conditionally render disabled style
                      <div className="bg-transparent px-4 py-2 flex flex-col items-center opacity-50 cursor-not-allowed">
                        {item.icon}
                        <span className="text-sm">{item.title}</span>
                      </div>
                    ) : (
                      <Link href={item.href}>
                        <p className="bg-transparent px-4 py-2 flex flex-col items-center hover:bg-slate-100 rounded-sm">
                          {item.icon}
                          <span className="text-sm">{item.title}</span>
                        </p>
                      </Link>
                    )}
                  </nav>
                </React.Fragment>
              ))}
            </div>
          </div>
        ) : (
          ''
        )}
      </header>
    </>
  );
};

export default Navbar;
