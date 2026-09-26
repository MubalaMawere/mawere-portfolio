import { useEffect, useState } from 'react'
import './App.css'

const cvPath = '/cv/Mubala Mawere CV.pdf'
const contactEmail = 'maweremubala2@gmail.com' 

const projects = [
  {
    number: '01',
    title: 'Solar-Powered Smart Walking Stick',
    category: 'Energy harvesting · Assistive technology',
    description:
      'A prototype exploring how solar energy can help assistive devices operate without frequent charging. It combines battery storage with obstacle detection, alerts, and an emergency feature.',
    shortName: 'ENERGY FOR INDEPENDENCE',
    image: '/images/walking-stick.png',
    imageAlt: 'Solar-powered smart walking stick prototype',
    detailLink: '#project/walking-stick',
  },
  {
    number: '02',
    title: 'Colour-Coded Parcel Sorting Conveyor',
    category: 'Automation · Embedded systems',
    description:
      'A small-scale warehouse conveyor prototype that sorts parcels by colour. For the demonstration, each colour acts as a quality control code used to identify a parcel’s category.',
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
    shortName: 'ACCESS WITH BOUNDARIES',
    image: '/images/chinese-wall.png',
    imageAlt: 'Screenshot of the Chinese Wall loan system',
  },
]

const certificates = [
  { title: 'Certificate 1', image: '/certificates/certificate-1.jpg' },
  { title: 'Certificate 2', image: '/certificates/certificate-2.jpg' },
  { title: 'Certificate 3', image: '/certificates/certificate-3.jpg' },
  { title: 'Certificate 4', image: '/certificates/certificate-4.jpg' },
  { title: 'Certificate 5', image: '/certificates/certificate-5.jpg' },
]

function Header({ detail = false }) {
  return (
    <header className="site-header">
      <a
        className="wordmark"
        href="#home"
        aria-label="Mawere Mubala, back to homepage"
      >
        MM<span className="wordmark-dot">.</span>
      </a>

      {detail ? (
        <a className="header-contact" href="#work">
          ← Back to projects
        </a>
      ) : (
        <>
          <nav className="site-nav" aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#certificates">Certificates</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="header-contact" href="#contact">
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
        </>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <a className="wordmark" href="#home" aria-label="Back to homepage">
        MM<span className="wordmark-dot">.</span>
      </a>
      <span>© {new Date().getFullYear()} Mawere Mubala</span>
      <a href="#home">Back to top ↑</a>
    </footer>
  )
}

function Certificates() {
  return (
    <section className="certificates page-section" id="certificates">
      <div className="section-heading">
        <div>
          <p className="eyebrow">03 / LEARNING</p>
          <h2>
            Certificates<span className="heading-period">.</span>
          </h2>
        </div>
        <p>Courses and training that support the work I do.</p>
      </div>

      <div className="certificate-window" aria-label="My certificates">
        <div className="certificate-track">
          {[...certificates, ...certificates].map((certificate, index) => {
            const duplicate = index >= certificates.length

            return (
              <a
                className="certificate-card"
                href={certificate.image}
                target="_blank"
                rel="noopener noreferrer"
                key={`${certificate.image}-${index}`}
                aria-hidden={duplicate ? 'true' : undefined}
                tabIndex={duplicate ? -1 : undefined}
              >
                <img
                  src={certificate.image}
                  alt={duplicate ? '' : certificate.title}
                  loading="lazy"
                />
                <span>
                  {certificate.title}
                  <span aria-hidden="true">↗</span>
                </span>
              </a>
            )
          })}
        </div>
      </div>

      <p className="certificate-hint">
        Hover to pause. Select a certificate to view it.
      </p>
    </section>
  )
}

function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="hero page-section" id="home">
          <div className="hero-content">
            <p className="eyebrow">
              COMPUTER ENGINEERING
              <span className="eyebrow-divider" />
              ZAMBIA
            </p>

            <h1>
              Building ideas
              <br />
              into <span className="accent-word">working things.</span>
            </h1>

            <p className="hero-description">
              I’m Mawere Mubala, a Computer Engineering student building
              practical software, connected devices, and small-scale automation.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <span aria-hidden="true">↗</span>
              </a>

              <a
                className="button button-text"
                href={cvPath}
                download="Mubala Mawere CV.pdf"
              >
                Download CV <span aria-hidden="true">↓</span>
              </a>
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
              <h2>
                Selected work<span className="heading-period">.</span>
              </h2>
            </div>
            <p>
              A collection of projects where engineering meets everyday
              challenges.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.number}>
                <div className="project-visual">
                  <img
                    className="project-image"
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                  />
                  <span className="visual-index">
                    {project.number} / 03
                  </span>
                  <span className="visual-title">
                    {project.shortName}
                  </span>
                </div>

                <div className="project-info">
                  <span className="project-number">
                    {project.number}
                  </span>
                  <div>
                    <p className="project-category">
                      {project.category}
                    </p>
                    <h3>{project.title}</h3>
                    <p className="project-description">
                      {project.description}
                    </p>

                    {project.detailLink && (
                      <a className="project-link" href={project.detailLink}>
                        View project details
                        <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about page-section" id="about">
          <div className="about-label">
            <p className="eyebrow">02 / ABOUT</p>
            <h2>
              A little about me<span className="heading-period">.</span>
            </h2>
            <img
              className="profile-image"
              src="/images/profile.jpg"
              alt="Portrait of Mawere Mubala"
              loading="lazy"
            />
          </div>

          <div className="about-content">
            <p className="about-lead">
              I enjoy building technology that has a clear purpose beyond the
              screen.
            </p>

            <p>
              I’m a Computer Engineering student at Copperbelt University with
              interests in AI, software development, prompt engineering, IoT,
              hardware, and automation. Academic and personal projects have
              given me hands-on experience turning ideas into working
              prototypes.
            </p>

            <p>
              I enjoy collaborating, learning from others, and contributing
              what I know. I’m eager to explore new technologies and apply them
              to practical problems.
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

        <Certificates />

        <section className="contact page-section" id="contact">
          <p className="eyebrow">04 / CONTACT</p>
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
            {contactEmail && (
              <a
                className="button button-light"
                href={`mailto:${contactEmail}`}
              >
                Email me <span aria-hidden="true">↗</span>
              </a>
            )}

            <a
              className="button button-outline-light"
              href="https://www.linkedin.com/in/mubala-mawere-2a600b253/"
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

            <a
              className="button button-outline-light"
              href={cvPath}
              download="Mubala Mawere CV.pdf"
            >
              Download CV <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

function WalkingStickDetail() {
  return (
    <>
      <Header detail />

      <main className="case-study page-section">
        <a className="back-link" href="#work">
          ← Back to projects
        </a>

        <p className="eyebrow case-eyebrow">
          PROJECT 01 / ASSISTIVE TECHNOLOGY
        </p>

        <h1>
          Solar-Powered
          <br />
          Smart Walking Stick
          <span className="heading-period">.</span>
        </h1>

        <p className="case-intro">
          A prototype exploring how solar energy harvesting can help assistive
          devices operate without frequent charging.
        </p>

        <img
          className="case-hero-image"
          src="/images/walking-stick.png"
          alt="Solar-powered smart walking stick prototype"
        />

        <div className="case-grid">
          <aside className="case-facts" aria-label="Project facts">
            <div>
              <strong>Type</strong>
              <span>Hardware prototype</span>
            </div>
            <div>
              <strong>Focus</strong>
              <span>Solar energy harvesting</span>
            </div>
            <div>
              <strong>Components</strong>
              <span>
                ESP32, solar panel, battery, ultrasonic sensors, buzzer, GPS,
                and GSM
              </span>
            </div>
          </aside>

          <div className="case-content">
            <section>
              <h2>The challenge</h2>
              <p>
                Electronic assistive devices need a dependable power source.
                Frequent charging can limit convenience when access to
                electricity is limited. This project explored how a solar
                panel could help sustain the operation of a smart walking
                stick.
              </p>
            </section>

            <section>
              <h2>The prototype</h2>
              <p>
                The solar panel harvests energy for storage in a rechargeable
                battery. Ultrasonic sensors detect nearby obstacles, while a
                buzzer provides alerts. The prototype also includes an
                emergency button supported by GPS and GSM.
              </p>
            </section>

            <section>
              <h2>My focus</h2>
              <p>
                I focused on energy harvesting and power management while
                integrating the sensing and emergency functions. The goal was
                to reduce the need for frequent charging and keep the device
                usable when sunlight is limited.
              </p>
            </section>

            <section>
              <h2>What could improve</h2>
              <p>
                Further testing could measure performance across longer
                periods and guide improvements to the power system and
                physical design.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

function App() {
  const [hash, setHash] = useState(window.location.hash)
  const isWalkingStickPage = hash === '#project/walking-stick'

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash)

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    if (isWalkingStickPage) {
      window.scrollTo(0, 0)
      return
    }

    const sectionId = hash.slice(1)
    if (!sectionId) return

    const frame = requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView()
    })

    return () => cancelAnimationFrame(frame)
  }, [hash, isWalkingStickPage])

  return isWalkingStickPage ? <WalkingStickDetail /> : <Home />
}

export default App