import React from 'react'

const Certifications = () => {
  return (
    <>
      <section id="certifications" className="bg-white dark:bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Certifications</h2>
            <ul className="mt-8 space-y-4">
              <li className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Certification Title</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Issued by Organization</p>
              </li>
                {/* Repeat for other certifications */}
            </ul>
        </div>
      </section>
    </>
  )
}

export default Certifications


