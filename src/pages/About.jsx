function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">GitHub Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details, including user repositories. Styled using 
        <a href="https://tailwindcss.com/" className="hover:text-info">
          {' '}
          TailwindCSS
          {' '}
        </a>
         and 
         <a href="https://daisyui.com/" className="hover:text-info">
          {' '}
          DaisyUI
          {' '}
         </a>
         , this project is part of the 
        <a href="https://www.traversymedia.com/Modern-React-Front-To-Back-Course" className="hover:text-secondary" >
          {' '}
          React Front to Back
        </a>{' '}
        course by
        <strong>
          <a href="https://traversymedia.com" className="hover:text-secondary hover:font-semibold" > Brad Traversy</a>
        </strong>
        .
      </p>
      <p className="text-lg text-gray-400">
        Layout By: 
        <a href="https://twitter.com/hassibmoddasser" className="text-white"> {' '}
          Hassib Moddasser
        </a>
      </p>
    </div>
  )
}

export default About
