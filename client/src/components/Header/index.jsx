// The header component that contains href's to the website's different routes
import React from 'react';
import Auth from '../../utils/auth';
const Header = () => {
  return (
    <header className="fixed top-0 z-20 w-full">
    <nav className="2lg:px-12 mx-auto max-w-7xl px-6 py-12 lg:px-12 xl:px-6 2xl:px-0">
        <div className="flex items-center justify-end">
            <div className="flex">
                <a href="/home" className="ml-4 relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10">
                    <span className="relative">Home</span>
                </a>
                <a href="/profile" className="ml-4 relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10">
                    <span className="relative">Profile</span>
                </a>
                <a href="/donate" className="ml-4 relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10">
                    <span className="relative">Donate</span>
                </a>
                <button onClick={() => {
                    Auth.logout()
                }} className="ml-4 relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10">
                    <span className="relative">Sign Out</span>
                </button>
            </div>
        </div>
    </nav>
</header>
  );
};

export default Header;
