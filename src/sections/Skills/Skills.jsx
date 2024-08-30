import React from 'react'

const Skills = () => {
  return (
    <>
        <section id="skills" className="bg-gray-100 dark:bg-gray-900 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Skills</h2>
                <div className="mt-8 flex flex-wrap justify-center">
                <span className="m-2 p-2 bg-blue-500 text-white rounded">JavaScript</span>
                <span className="m-2 p-2 bg-green-500 text-white rounded">React</span>
                {/* Add more skills */}
                </div>
            </div>
        </section>
    </>
  )
}

export default Skills


