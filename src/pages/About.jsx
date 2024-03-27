function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">GitHub Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details, including user repositories. This project is part of the 
        <a href="https://www.udemy.com/course/modern-react-front-t-back">
          {' '}
          React Front to Back
        </a>{' '}
        Udemy course by
        <strong>
          <a href="https://traversymedia.com"> Brad Traversy</a>
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
