import React from 'react'

function Navbar() {
  return (
    <>
        <nav className="bg-white dark:bg-gray-800 shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="/" className="text-2xl font-bold text-gray-800 dark:text-white">YourName</a>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#hero" className="text-gray-800 dark:text-white">Home</a>
                        <a href="#projects" className="text-gray-800 dark:text-white">Projects</a>
                        <a href="#skills" className="text-gray-800 dark:text-white">Skills</a>
                        <a href="#certifications" className="text-gray-800 dark:text-white">Certifications</a>
                        <a href="#contact" className="text-gray-800 dark:text-white">Contact</a>
                    </div>
                    <div className="flex items-center">
                        {/* <button className="focus:outline-none" onClick={toggleDarkMode}>
                            {darkMode ? "🌙" : "☀️"}
                        </button> */}
                    </div>
                </div>
            </div>
        </nav>
    </>
  );
}

export default Navbar