import { useEffect, useState } from 'react'
import './App.css'

const assetPath = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

const cvPath = assetPath('cv/Mubala Mawere CV.pdf')
const contactEmail = 'maweremubala2@gmail.com' 

const projects = [
  {
    number: '01',
    title: 'Solar-Powered Smart Walking Stick',
    category: 'Energy harvesting · Assistive technology',
    description:
      'A prototype exploring how solar energy can help assistive devices operate without frequent charging. It combines battery storage with obstacle detection, alerts, and an emergency feature.',
    shortName: 'ENERGY FOR INDEPENDENCE',
    image: assetPath('images/walking-stick.png'),
    imageAlt: 'Solar-powered smart walking stick prototype',
    detailLink: '#project/walking-stick',
  },
  {
    number: '02',
    title: 'Colour-Coded Parcel Sorting Conveyor',
    category: 'Automation · Embedded systems',
    description:
      'An individually built, two-conveyor prototype that spaces parcels, reads colour-coded quality control labels, and routes red, green, and blue parcels with servo diverters.',
    shortName: 'SORTING IN MOTION',
    image: assetPath('images/conveyor.jpg'),
    imageAlt: 'Colour-coded parcel sorting conveyor prototype',
    detailLink: '#project/conveyor',
  },
  {
    number: '03',
    title: 'Chinese Wall Loan System',
    category: 'Web development · Information security',
    description:
      'An individual web project demonstrating how the Chinese Wall security model restricts competing banks from accessing each other’s student records and logs blocked attempts.',
    shortName: 'ACCESS WITH BOUNDARIES',
    image: assetPath('images/chinese-wall.png'),
    imageAlt: 'Screenshot of the Chinese Wall loan system',
    detailLink: '#project/chinese-wall',
  },
]

const certificates = [
  { title: 'ICTAZ-Leadership', image: assetPath('certificates/certificate-1.jpeg') },
  { title: 'TME Education', image: assetPath('certificates/certificate-2.jpeg') },
  { title: 'YouthTeamUp', image: assetPath('certificates/certificate-3.png') },
  { title: 'FNB Academy', image: assetPath('certificates/certificate-4.png') },
  { title: '4th-DVE YouthTeamUp',image: assetPath('certificates/certificate-5.png')  },
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
              src={assetPath('images/profile.jpg')}
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
          src={assetPath('images/walking-stick.png')}
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
                emergency button supported by GPS and GSM and a mobile application was built for the care giver to track the user.
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

function ConveyorDetail() {
  const steps = [
    {
      number: '01',
      title: 'Space the parcels',
      description:
        'IR1 detects a parcel transferring to Conveyor 2 and stops Conveyor 1, preventing the next parcel from entering the sorting section too soon.',
    },
    {
      number: '02',
      title: 'Measure the colour',
      description:
        'IR2 detects the parcel beneath the TCS3200. Conveyor 2 pauses while the sensor measures its red, green, and blue channels.',
    },
    {
      number: '03',
      title: 'Track the classification',
      description:
        'The Arduino compares the measurements with calibrated thresholds, stores the classification, and restarts Conveyor 2.',
    },
    {
      number: '04',
      title: 'Sort or reject',
      description:
        'At the matching IR station, a servo moves its diverter to route a blue, green, or red parcel. White or unrecognised parcels continue to the reject area.',
    },
  ]

  return (
    <>
      <Header detail />

      <main className="case-study page-section">
        <a className="back-link" href="#work">
          ← Back to projects
        </a>

        <p className="eyebrow case-eyebrow">
          PROJECT 02 / WAREHOUSE AUTOMATION
        </p>

        <h1>
          Colour-Coded
          <br />
          Parcel Sorting Conveyor
          <span className="heading-period">.</span>
        </h1>

        <p className="case-intro">
          I designed and built a low-cost, small-scale prototype that spaces,
          detects, classifies, and physically sorts colour-coded parcels.
        </p>

        <img
          className="case-hero-image"
          src={assetPath('images/conveyor.jpg')}
          alt="Two-section colour-coded parcel sorting conveyor prototype"
        />

        <div className="case-grid">
          <aside className="case-facts" aria-label="Project facts">
            <div>
              <strong>Project type</strong>
              <span>Individual automation project</span>
            </div>
            <div>
              <strong>Controller</strong>
              <span>Arduino Uno R3</span>
            </div>
            <div>
              <strong>Detection</strong>
              <span>TCS3200 colour sensor and five IR sensors</span>
            </div>
            <div>
              <strong>Movement</strong>
              <span>
                Two independently controlled conveyors and three servo
                diverters
              </span>
            </div>
            <div>
              <strong>Scale</strong>
              <span>Approximately 1 metre total conveyor length</span>
            </div>
          </aside>

          <div className="case-content">
            <section>
              <h2>The problem</h2>
              <p>
                Small-scale warehouses may sort parcels manually, a process
                that can be repetitive and prone to mistakes. Industrial
                sorting systems can be costly. I built a smaller prototype
                to demonstrate automated sorting with affordable components.
              </p>
              <p>
                Parcel spacing was also essential. If parcels entered the
                sensing and sorting section too close together, the system
                could associate a colour reading or diverter action with
                the wrong parcel.
              </p>
            </section>

            <section>
              <h2>My approach</h2>
              <p>
                I built two conveyor sections that could be controlled
                independently. Conveyor 1 feeds parcels into the system.
                When IR1 detects a parcel transferring onto Conveyor 2,
                the Arduino stops Conveyor 1. It remains stopped while
                that parcel is detected and processed on Conveyor 2,
                creating space before the next parcel enters.
              </p>
              <p>
                Conveyor 1 was approximately 40 cm long and Conveyor 2
                approximately 60 cm. I built the structure using a wooden
                frame, PVC rollers, bearings, threaded shafts, and geared
                DC motors.
              </p>
            </section>

            <section>
              <h2>How a parcel moves through the system</h2>
              <div className="process-steps">
                {steps.map((step) => (
                  <div className="process-step" key={step.number}>
                    <span className="process-number">{step.number}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2>Colour detection and sorting</h2>
              <p>
                At the sensing station, IR2 pauses Conveyor 2 with the
                parcel positioned beneath the TCS3200. The Arduino reads
                the sensor’s red, green, and blue channels and compares
                them with experimentally calibrated pulse-width thresholds.
                It classifies the parcel as red, green, blue, or
                invalid/unknown.
              </p>
              <p>
                The Arduino retains the classification as the parcel moves
                onward. IR3 marks the blue sorting station, IR4 the green
                station, and IR5 the red/final station. When a parcel reaches
                the station matching its stored classification, the relevant
                servo moves an L-shaped diverter into its path and then
                returns to its home position. White or unrecognised parcels
                continue to the reject area.
              </p>
              <p>
                Colour represented a quality control code for this
                demonstration. I used that visible code to show how parcels
                could be routed by category.
              </p>
            </section>

            <section>
              <h2>Control and safety</h2>
              <p>
                Two 12 V geared DC motors drove the conveyors. An L298N
                driver controlled Conveyor 1, while a BTS7960 controlled
                Conveyor 2. A potentiometer adjusted conveyor speed through
                PWM control. A START/STOP button handled normal operation,
                and an emergency-stop switch stopped the conveyors when
                activated. Green and red LEDs indicated the running and
                emergency states.
              </p>
              <p>
                I powered the Arduino through USB, the motors through an
                external supply, and the servos through a separate regulated
                5.3 V supply. The supplies shared a common ground.
              </p>
            </section>

            <section>
              <h2>What the prototype demonstrates</h2>
              <p>
                I brought parcel spacing, colour measurement, classification,
                conveyor control, parcel tracking, servo actuation, and
                emergency stopping into one coordinated system. A useful
                next step would be to measure sorting accuracy and throughput
                across repeated trials with different parcel spacing and
                lighting conditions.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

function ChineseWallDetail() {
  return (
    <>
      <Header detail />

      <main className="case-study page-section">
        <a className="back-link" href="#work">
          ← Back to projects
        </a>

        <p className="eyebrow case-eyebrow">
          PROJECT 03 / INFORMATION SECURITY
        </p>

        <h1>
          Chinese Wall Loan
          <br />
          & Allowance System
          <span className="heading-period">.</span>
        </h1>

        <p className="case-intro">
          An individual web project demonstrating how the Chinese Wall
          security model can protect confidential student information
          between competing banks.
        </p>

        <img
          className="case-hero-image"
          src={assetPath('images/chinese-wall.png')}
          alt="Screenshot of the Chinese Wall Loan and Allowance Management System"
        />

        <div className="case-grid">
          <aside className="case-facts" aria-label="Project facts">
            <div>
              <strong>Project type</strong>
              <span>Individual security project</span>
            </div>
            <div>
              <strong>Security model</strong>
              <span>Chinese Wall (Brewer–Nash)</span>
            </div>
            <div>
              <strong>Backend</strong>
              <span>Flask and SQLite</span>
            </div>
            <div>
              <strong>Frontend</strong>
              <span>HTML, CSS, and JavaScript</span>
            </div>
            <div>
              <strong>Roles</strong>
              <span>Student, bank administrator, system administrator</span>
            </div>
          </aside>

          <div className="case-content">
            <section>
              <h2>The problem</h2>
              <p>
                A system used by competing banks may contain confidential
                information about students, loans, allowances, and
                transactions. If one bank can access another bank’s records,
                it creates a conflict of interest and exposes information
                to an unauthorized party.
              </p>
            </section>

            <section>
              <h2>My solution</h2>
              <p>
                I designed and developed a web-based Loan and Allowance
                Management System that applies the Chinese Wall
                (Brewer–Nash) security model. Each bank is restricted to
                viewing and managing students associated with that bank.
              </p>
              <p>
                When a bank attempts to access another bank’s student
                information, the system blocks the request and records
                the attempted violation in an audit log. This makes the
                access boundary visible and reviewable.
              </p>
            </section>

            <section>
              <h2>How access is controlled</h2>
              <div className="process-steps">
                <div className="process-step">
                  <span className="process-number">01</span>
                  <div>
                    <h3>Identify the user’s role</h3>
                    <p>
                      The system distinguishes students, bank
                      administrators, and system administrators.
                    </p>
                  </div>
                </div>

                <div className="process-step">
                  <span className="process-number">02</span>
                  <div>
                    <h3>Check the bank association</h3>
                    <p>
                      A bank administrator’s access is limited to
                      students associated with their bank.
                    </p>
                  </div>
                </div>

                <div className="process-step">
                  <span className="process-number">03</span>
                  <div>
                    <h3>Allow or block the request</h3>
                    <p>
                      An authorized request can proceed. A request
                      for another bank’s confidential records is blocked.
                    </p>
                  </div>
                </div>

                <div className="process-step">
                  <span className="process-number">04</span>
                  <div>
                    <h3>Record the attempted violation</h3>
                    <p>
                      Blocked access attempts are captured in security
                      logs for administrative review.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2>What each role can do</h2>
              <p>
                Students can apply for loans and select a bank. Bank
                administrators can manage students assigned to their bank
                and process loan requests. The system administrator can
                oversee students, transactions, loan activities, and
                security logs.
              </p>
            </section>

            <section>
              <h2>What I built</h2>
              <p>
                I developed the application independently using Flask
                and SQLite for the backend and HTML, CSS, and JavaScript
                for the interface. The system brings together student
                and bank records, loan applications, allowances,
                transactions, role-based access, and audit logging to
                demonstrate the security model in a financial setting.
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
  const isDetailPage = hash.startsWith('#project/')

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash)

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    if (isDetailPage) {
      window.scrollTo(0, 0)
      return
    }

    const sectionId = hash.slice(1)
    if (!sectionId) return

    const frame = requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView()
    })

    return () => cancelAnimationFrame(frame)
  }, [hash, isDetailPage])

  if (hash === '#project/walking-stick') {
    return <WalkingStickDetail />
  }

  if (hash === '#project/conveyor') {
    return <ConveyorDetail />
  }

  if (hash === '#project/chinese-wall') {
  return <ChineseWallDetail />
}

  return <Home />
}

export default App