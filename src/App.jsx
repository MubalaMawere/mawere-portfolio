import './App.css'

const projects = [
  {
    number: '01',
    title: 'Solar-Powered Smart Walking Stick',
    category: 'Energy harvesting · Assistive technology',
    description:
      'A prototype exploring how solar energy can help assistive devices operate without frequent charging. It combines battery storage with obstacle detection, alerts, and an emergency feature.',
    visual: 'walking-stick',
    shortName: 'ENERGY FOR INDEPENDENCE',
    image: '/images/walking-stick.png',
    imageAlt: 'Solar-powered smart walking stick prototype',
  },
  {
    number: '02',
    title: 'Colour-Coded Parcel Sorting Conveyor',
    category: 'Automation · Embedded systems',
    description:
      'A small-scale warehouse conveyor prototype that sorts parcels by colour. For the demonstration, each colour acts as a quality control code used to identify a parcel’s category.',
    visual: 'conveyor',
    shortName: 'SORTING IN MOTION',
    image: '/images/conveyor.jpg',
    imageAlt: 'Colour-coded parcel sorting conveyor prototype',
  },
  {
    number: '03',
    title: 'Chinese Wall Loan System',
    category: 'Web development · Information security',
    description:
      'A web application demonstrating the Chinese Wall security model. It controls which student records each bank can access and logs allowed and blocked access attempts.',
    visual: 'security',
    shortName: 'ACCESS WITH BOUNDARIES',
    image: '/images/chinese-wall.png',
    imageAlt: 'Screenshot of the Chinese Wall loan system',
  },
]

function App() {
  // Change to true after adding your PDF at public/cv/Mawere-Mubala-CV.pdf.
  const cvReady = true

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Mawere Mubala, back to top">
          MM<span className="wordmark-dot">.</span>
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-contact" href="#contact">
          Let’s talk <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main>
        <section className="hero page-section" id="home">
          <div className="hero-content">
            <p className="eyebrow">
              COMPUTER ENGINEERING <span className="eyebrow-divider" /> ZAMBIA
            </p>

            <h1>
              Building ideas
              <br />
              into <span className="accent-word">working things.</span>
            </h1>

            <p className="hero-description">
              I’m Mawere Mubala, a Computer Engineering student building practical
              software, connected devices, and small-scale automation.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <span aria-hidden="true">↗</span>
              </a>

              {cvReady && (
                <a
                  className="button button-text"
                  href="/cv/Mubala Mawere CV.pdf"
                  download="Mubala Mawere CV.pdf"
                >
                  Download CV <span aria-hidden="true">↓</span>
                </a>
              )}
            </div>
          </div>

          <div className="hero-bottom">
            <span>Software / Hardware / Problem-solving</span>
            <a href="#work">
              Scroll to explore <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        <section className="work page-section" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / PORTFOLIO</p>
              <h2>Selected work<span className="heading-period">.</span></h2>
            </div>
            <p>
              A collection of projects where engineering meets everyday
              challenges.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.number}>
                <div className={`project-visual ${project.visual}`}>
                    <img
                      className="project-image"
                      src={project.image}
                      alt={project.imageAlt}
                      loading="lazy"
                    />
                    <span className="visual-index">{project.number} / 03</span>
                    <span className="visual-title">{project.shortName}</span>
                  </div>

                <div className="project-info">
                  <span className="project-number">{project.number}</span>
                  <div>
                    <p className="project-category">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about page-section" id="about">
              <img
                className="profile-image"
                src="/images/profile.jpg"
                alt="Portrait of Mawere Mubala"
                loading="lazy"
              />

          <div className="about-content">
            <p className="about-lead">
              I enjoy building technology that has a clear purpose beyond the
              screen.
            </p>
            <p>
              Am a Motivated Computer Engineering student at The Copperbelt University with a passion for modern AI, 
              software development, prompt engineering, IoT, Hardware and Automation. 
              Gaining hands-on experience through academic solutions and personal projects. 
              I thrive in both team-based and personal environments, I value collaboration, and enjoy learning from others as well as contributing my knowledge where needed. 
              I am Eager to explore and master new technologies to solve real-world problems with creativity and purpose-driven innovation.
            </p>
            <p>
              I also explore technology ideas through BILLION24, bringing an
              entrepreneurial perspective to the way I approach projects.
            </p>

            <div className="focus-areas">
              <span>Web applications</span>
              <span>Embedded systems</span>
              <span>Automation</span>
              <span>Information security</span>
            </div>
          </div>
        </section>

        <section className="contact page-section" id="contact">
          <p className="eyebrow">03 / CONTACT</p>
          <h2>
            Have something
            <br />
            in mind<span className="heading-period">?</span>
          </h2>
          <p>
            I’m open to opportunities, collaborations, and projects where I can
            put my skills to work.
          </p>

          <div className="contact-actions">
  <a
    className="button button-light"
    href="mailto:maweremubala2@.com"
  >
    Email me <span aria-hidden="true">↗</span>
  </a>

  <a
    className="button button-outline-light"
    href="YOUR_LINKEDIN_URL"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn <span aria-hidden="true">↗</span>
  </a>

  <a
    className="button button-outline-light"
    href="https://github.com/MubalaMawere"
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub <span aria-hidden="true">↗</span>
  </a>

  {cvReady && (
    <a
      className="button button-outline-light"
      href="/cv/Mubala Mawere CV.pdf"
      download="Mubala Mawere CV.pdf"
    >
      Download CV <span aria-hidden="true">↓</span>
    </a>
  )}
</div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark" href="#home">
          MM<span className="wordmark-dot">.</span>
        </a>
        <span>© {new Date().getFullYear()} Mawere Mubala</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  )
}

export default App