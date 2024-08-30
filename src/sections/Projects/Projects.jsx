import React from 'react'

const Projects = () => {
  return (
    <>  
        <section id="projects" className="bg-white dark:bg-gray-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Projects</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">Project Title</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Short description of the project.</p>
                </div>
                {/* Repeat for other projects */}
                </div>
            </div>
        </section>
    </>
  )
}

export default Projects

