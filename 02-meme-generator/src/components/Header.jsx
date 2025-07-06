import React from "react";
import logo from '../assets/logo.jpg'

export default function Header(){
    return (
        <header className="bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="w-8 h-8 rounded-lg" />
                        <span className="ml-2 text-xl font-semibold text-gray-900">Meme Generator</span>
                    </div>
                    
                    {/* Theme Toggle Checkbox */}
                    <div className="flex items-center">
                        <label className="theme-toggle relative inline-flex items-center h-8 w-14 bg-yellow-400 rounded-full transition-colors duration-200 ease-in-out focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-yellow-500 shadow-lg cursor-pointer">
                            <input type="checkbox" className="sr-only" />
                            <span className="sr-only">Toggle theme</span>
                            {/* Toggle circle */}
                            <span className="toggle-circle inline-block h-6 w-6 bg-white rounded-full shadow-md transform ring-0 transition-transform duration-200 ease-in-out translate-x-1 border-2 border-gray-200">
                                {/* Sun icon for light mode */}
                                <svg className="toggle-icon h-4 w-4 text-yellow-600 absolute top-0.5 left-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </header>
    );
}