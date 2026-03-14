import { startTransition, useEffect, useRef, useState } from 'react'
import './App.css'
import { portfolioData } from './portfolioData'

const routes = {
  '/': 'home',
  '/about': 'about',
  '/experience': 'experience',
  '/projects': 'projects',
  '/skills': 'skills',
  '/certifications': 'certifications',
  '/contact': 'contact',
}

function App() {
  const [pathname, setPathname] = useState(() => normalizePath(window.location.pathname))

  useEffect(() => {
    const handlePopState = () => {
      setPathname(normalizePath(window.location.pathname))
      window.scrollTo({ top: 0, behavior: 'auto' })
    }

    window.addEventListener('popstate', handlePopState)

    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = (path) => (event) => {
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return
    }

    event.preventDefault()

    const nextPath = normalizePath(path)

    if (nextPath !== pathname) {
      window.history.pushState({}, '', nextPath)
      startTransition(() => {
        setPathname(nextPath)
      })
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentPage = routes[pathname] || 'home'

  return (
    <div className="portfolio-shell">
      <div className="background-orb background-orb--pink" />
      <div className="background-orb background-orb--blue" />
      <div className="background-grid" />

      <aside className="side-nav" aria-label="Primary">
        {portfolioData.navigation.map((item) => (
          <a
            key={item.id}
            className={`side-nav__item ${pathname === item.path ? 'side-nav__item--active' : ''}`}
            href={item.path}
            aria-current={pathname === item.path ? 'page' : undefined}
            aria-label={item.label}
            title={item.label}
            onClick={navigate(item.path)}
          >
            <Icon name={item.icon} />
          </a>
        ))}
      </aside>

      <main className="portfolio-main portfolio-main--page">
        {currentPage === 'home' && <HomePage onNavigate={navigate} />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'experience' && <ExperiencePage />}
        {currentPage === 'projects' && <ProjectsPage />}
        {currentPage === 'skills' && <SkillsPage />}
        {currentPage === 'certifications' && <CertificationsPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      <footer className="site-footer">
        <div className="site-footer__brand">
          <span className="brand__mark brand__mark--small">{portfolioData.profile.initials}</span>
          <div>
            <strong>{portfolioData.profile.name}</strong>
            <span>{portfolioData.footerNote}</span>
          </div>
        </div>

        <div className="site-footer__socials">
          {portfolioData.profile.socials.map((social) => (
            <a
              key={social.label}
              className="icon-button"
              href={getProfileLinkHref(social)}
              {...getLinkProps(getProfileLinkHref(social))}
              aria-label={social.label}
            >
              <Icon name={social.icon} />
            </a>
          ))}
        </div>
      </footer>
    </div>
  )
}

function HomePage({ onNavigate }) {
  return (
    <section className="section hero hero--page">
      <div className="hero__copy">
        <p className="eyebrow">{portfolioData.profile.eyebrow}</p>
        <h1 className="hero__title">
          <span className="hero__title-lead">HEY, I AM</span>
          <span className="hero__title-name">{portfolioData.profile.name}</span>
        </h1>
        <p className="hero__role">{portfolioData.profile.role}</p>
        <p className="hero__summary">{portfolioData.profile.summary}</p>

        <div className="hero__actions">
          <a className="button button--primary" href="/projects" onClick={onNavigate('/projects')}>
            See My Projects
            <Icon name="arrow" />
          </a>
          <a className="button button--secondary" href="/about" onClick={onNavigate('/about')}>
            More About Me
          </a>
        </div>

        <div className="social-row">
          {portfolioData.profile.socials.map((social) => (
            <a
              key={social.label}
              className="social-row__link"
              href={getProfileLinkHref(social)}
              {...getLinkProps(getProfileLinkHref(social))}
              aria-label={social.label}
            >
              <Icon name={social.icon} />
            </a>
          ))}
        </div>

        <div className="stats-grid">
          {portfolioData.profile.stats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </div>

      <div className="hero__panel">
        <MediaFrame
          key={portfolioData.profile.heroImage.src}
          src={portfolioData.profile.heroImage.src}
          alt={portfolioData.profile.heroImage.alt}
          label={portfolioData.profile.heroImage.label}
          ratio={portfolioData.profile.heroImage.ratio || 'portrait'}
          position={portfolioData.profile.heroImage.position}
          fit={portfolioData.profile.heroImage.fit}
        />

        <div className="hero__details">
          <div className="hero__availability">
            <span className="hero__availability-dot" />
            {portfolioData.profile.availability}
          </div>

          <ul className="detail-list">
            {portfolioData.profile.quickFacts.map((fact) => (
              <li className="detail-list__item" key={fact.label}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function AboutPage() {
  return (
    <section className="section page-section">
      <SectionHeading
        eyebrow={portfolioData.about.eyebrow}
        title={portfolioData.about.title}
        description={portfolioData.about.description}
      />

      <div className="about-grid">
        {portfolioData.about.cards.map((card) => (
          <article className="glass-card about-card" key={card.title}>
            <div className="about-card__icon">
              <Icon name={card.icon} />
            </div>
            <div>
              <h3>{card.title}</h3>
              <ul className="card-list">
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="gallery-grid">
        {portfolioData.profile.galleryImages.slice(0, 2).map((image) => (
          <MediaFrame
            key={image.label}
            src={image.src}
            alt={image.alt}
            label={image.label}
            ratio={image.ratio || 'landscape'}
            position={image.position}
            fit={image.fit}
            frameClassName={image.frameClassName}
          />
        ))}
      </div>
    </section>
  )
}

function ExperiencePage() {
  return (
    <section className="section page-section">
      <SectionHeading
        eyebrow={portfolioData.experience.eyebrow}
        title={portfolioData.experience.title}
        description={portfolioData.experience.description}
      />

      <div className="experience-stack">
        {portfolioData.experience.items.map((item) => (
          <article className="glass-card experience-card" key={`${item.role}-${item.company}`}>
            <div className="experience-card__content">
              <div className="experience-card__header">
                <div>
                  <p className="experience-card__company">{item.company}</p>
                  <h3>{item.role}</h3>
                </div>
                <span className="experience-card__duration">{item.duration}</span>
              </div>

              <p className="experience-card__summary">{item.summary}</p>

              <ul className="bullet-list">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <div className="chip-row">
                {item.stack.map((tech) => (
                  <span className="chip" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="link-row">
                {item.links.map((link) => (
                  <a key={link.label} className="text-link" href={link.href} {...getLinkProps(link.href)}>
                    {link.label}
                    <Icon name="external" />
                  </a>
                ))}
              </div>
            </div>

            <MediaFrame
              key={item.image.src}
              src={item.image.src}
              alt={item.image.alt}
              label={item.image.label}
              ratio={item.image.ratio || 'landscape'}
              position={item.image.position}
              fit={item.image.fit}
            />
          </article>
        ))}
      </div>
    </section>
  )
}

function ProjectsPage() {
  return (
    <section className="section page-section">
      <SectionHeading
        eyebrow={portfolioData.projects.eyebrow}
        title={portfolioData.projects.title}
        description={portfolioData.projects.description}
      />

      <ProjectsCarousel items={portfolioData.projects.items} />
    </section>
  )
}

function SkillsPage() {
  return (
    <section className="section page-section">
      <SectionHeading
        eyebrow={portfolioData.skills.eyebrow}
        title={portfolioData.skills.title}
        description={portfolioData.skills.description}
      />

      <div className="skills-layout">
        <div className="skills-layout__main">
          {portfolioData.skills.groups.map((group) => (
            <article className="glass-card skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="chip-row chip-row--wide">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="skills-layout__side">
          <article className="glass-card concept-card">
            <h3>{portfolioData.skills.conceptsTitle}</h3>
            <div className="chip-cloud">
              {portfolioData.skills.concepts.map((concept) => (
                <span className="chip chip--muted" key={concept}>
                  {concept}
                </span>
              ))}
            </div>
          </article>

          <article className="glass-card toolbox-card">
            <h3>{portfolioData.skills.toolboxTitle}</h3>
            <div className="toolbox-grid">
              {portfolioData.skills.toolbox.map((tool) => (
                <article className="toolbox-item" key={tool.name}>
                  <strong>{tool.name}</strong>
                  <span>{tool.description}</span>
                </article>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

function CertificationsPage() {
  return (
    <section className="section page-section">
      <SectionHeading
        eyebrow={portfolioData.certificates.eyebrow}
        title={portfolioData.certificates.title}
        description={portfolioData.certificates.description}
      />

      <div className="certificate-grid">
        {portfolioData.certificates.items.map((item) => (
          <article className="glass-card certificate-card" key={item.title}>
            <MediaFrame
              key={item.image.src}
              src={item.image.src}
              alt={item.image.alt}
              label={item.image.label}
              ratio={item.image.ratio || 'landscape'}
              position={item.image.position}
              fit={item.image.fit}
            />

            <div className="certificate-card__body">
              <div>
                <p className="project-card__eyebrow">{item.issuer}</p>
                <h3>{item.title}</h3>
              </div>

              <p>{item.description}</p>

              <div className="certificate-card__meta">
                <span>{item.year}</span>
                <span>{item.credential}</span>
              </div>

              <a className="text-link" href={item.image.src} {...getLinkProps(item.image.src)}>
                View Credential
                <Icon name="external" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function ContactPage() {
  return (
    <section className="section page-section">
      <div className="glass-card contact-card">
        <SectionHeading
          eyebrow={portfolioData.contact.eyebrow}
          title={portfolioData.contact.title}
          description={portfolioData.contact.description}
          align="left"
        />

        <div className="contact-layout">
          <div className="contact-layout__copy">
            <div className="contact-points">
              {portfolioData.contact.points.map((point) => (
                <article className="contact-point" key={point.label}>
                  <span>{point.label}</span>
                  <strong>{point.value}</strong>
                </article>
              ))}
            </div>

            <div className="hero__actions">
              <a
                className="button button--primary"
                href={getEmailDraftHref(portfolioData.profile)}
                {...getLinkProps(getEmailDraftHref(portfolioData.profile))}
              >
                Email Me
                <Icon name="mail" />
              </a>
              <a className="button button--secondary" href={portfolioData.profile.socials[0].href} {...getLinkProps(portfolioData.profile.socials[0].href)}>
                Visit GitHub
              </a>
            </div>
          </div>

          <div className="glass-card contact-note">
            <h3>How to personalize this template</h3>
            <ol className="number-list">
              {portfolioData.contact.setupSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectsCarousel({ items }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(getItemsPerView())
  const hasMultipleProjects = items.length > 1

  useEffect(() => {
    const handleResize = () => setItemsPerView(getItemsPerView())

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!hasMultipleProjects) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % items.length)
    }, 6000)

    return () => window.clearInterval(intervalId)
  }, [hasMultipleProjects, items.length])

  const visibleItems = Array.from(
    { length: Math.min(itemsPerView, items.length) },
    (_, offset) => items[(activeIndex + offset) % items.length],
  )

  const goToPrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + items.length) % items.length)
  }

  const goToNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % items.length)
  }

  return (
    <div className="projects-carousel">
      <button
        className="carousel-button carousel-button--desktop"
        type="button"
        onClick={goToPrevious}
        aria-label="Show previous projects"
        disabled={!hasMultipleProjects}
      >
        <Icon name="chevron-left" />
      </button>

      <div className="carousel-stage">
        <div className={`carousel-track carousel-track--${visibleItems.length}`} key={`${activeIndex}-${itemsPerView}`}>
          {visibleItems.map((project) => (
            <ProjectCarouselCard key={project.title} project={project} />
          ))}
        </div>

        <div className="carousel-progress" aria-hidden="true">
          <span
            className="carousel-progress__bar"
            style={{
              width: `${100 / items.length}%`,
              transform: `translateX(${activeIndex * 100}%)`,
            }}
          />
        </div>

        {hasMultipleProjects ? (
          <div className="carousel-mobile-controls">
            <button
              className="carousel-button carousel-button--mobile"
              type="button"
              onClick={goToPrevious}
              aria-label="Show previous projects"
            >
              <Icon name="chevron-left" />
              <span>Previous</span>
            </button>

            <button
              className="carousel-button carousel-button--mobile"
              type="button"
              onClick={goToNext}
              aria-label="Show next projects"
            >
              <span>Next</span>
              <Icon name="chevron-right" />
            </button>
          </div>
        ) : null}
      </div>

      <button
        className="carousel-button carousel-button--desktop"
        type="button"
        onClick={goToNext}
        aria-label="Show next projects"
        disabled={!hasMultipleProjects}
      >
        <Icon name="chevron-right" />
      </button>
    </div>
  )
}

function ProjectCarouselCard({ project }) {
  const cardRef = useRef(null)

  const updateCardTilt = (clientX, clientY) => {
    const card = cardRef.current

    if (!card) {
      return
    }

    const bounds = card.getBoundingClientRect()
    const percentX = (clientX - bounds.left) / bounds.width
    const percentY = (clientY - bounds.top) / bounds.height
    const rotateY = (percentX - 0.5) * 14
    const rotateX = (0.5 - percentY) * 12

    card.style.setProperty('--card-rotate-x', `${rotateX.toFixed(2)}deg`)
    card.style.setProperty('--card-rotate-y', `${rotateY.toFixed(2)}deg`)
    card.style.setProperty('--card-shift-x', `${((percentX - 0.5) * -22).toFixed(2)}px`)
    card.style.setProperty('--card-shift-y', `${((percentY - 0.5) * -18).toFixed(2)}px`)
    card.style.setProperty('--card-glow-x', `${(percentX * 100).toFixed(2)}%`)
    card.style.setProperty('--card-glow-y', `${(percentY * 100).toFixed(2)}%`)
    card.style.setProperty('--card-glow-opacity', '1')
  }

  const resetCardTilt = () => {
    const card = cardRef.current

    if (!card) {
      return
    }

    card.style.setProperty('--card-rotate-x', '0deg')
    card.style.setProperty('--card-rotate-y', '0deg')
    card.style.setProperty('--card-shift-x', '0px')
    card.style.setProperty('--card-shift-y', '0px')
    card.style.setProperty('--card-glow-x', '50%')
    card.style.setProperty('--card-glow-y', '18%')
    card.style.setProperty('--card-glow-opacity', '0')
    card.style.setProperty('--card-press-depth', '0')
  }

  const handlePointerEnter = (event) => {
    if (event.pointerType === 'touch') {
      return
    }

    updateCardTilt(event.clientX, event.clientY)
  }

  const handlePointerMove = (event) => {
    if (event.pointerType === 'touch') {
      return
    }

    updateCardTilt(event.clientX, event.clientY)
  }

  const handlePointerDown = () => {
    const card = cardRef.current

    if (!card) {
      return
    }

    card.style.setProperty('--card-press-depth', '1')
  }

  const handlePointerUp = () => {
    const card = cardRef.current

    if (!card) {
      return
    }

    card.style.setProperty('--card-press-depth', '0')
  }

  return (
    <article
      ref={cardRef}
      className="glass-card carousel-card"
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetCardTilt}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={resetCardTilt}
    >
      <MediaFrame
        src={project.image.src}
        alt={project.image.alt}
        label={project.image.label}
        ratio={project.image.ratio || 'landscape'}
        position={project.image.position}
        fit={project.image.fit}
        frameClassName="carousel-card__media"
      />

      <div className="carousel-card__body">
        <div>
          <p className="project-card__eyebrow">{project.category}</p>
          <h3>{project.title}</h3>
        </div>

        <p className="carousel-card__summary">{project.summary}</p>

        <div className="chip-row carousel-card__chips">
          {project.stack.map((tech) => (
            <span className="chip" key={tech}>
              {tech}
            </span>
          ))}
        </div>

        <div className="carousel-card__links">
          {project.links.map((link) => (
            <a
              key={link.label}
              className="text-link"
              href={link.href}
              {...getLinkProps(link.href)}
            >
              <Icon name={link.icon} />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}

function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

function MediaFrame({
  src,
  alt,
  label,
  ratio = 'landscape',
  position = 'center',
  fit = 'cover',
  frameClassName = '',
}) {
  const [hasError, setHasError] = useState(false)

  return (
    <div
      className={`media-frame media-frame--${ratio} ${frameClassName}`.trim()}
      style={{
        '--media-fit': fit,
        '--media-position': position,
      }}
    >
      {src && !hasError ? (
        <img loading="lazy" src={src} alt={alt} onError={() => setHasError(true)} />
      ) : (
        <div className="media-frame__placeholder">
          <Icon name="camera" />
          <strong>{label}</strong>
          <span>Replace this with your own image path in `src/portfolioData.js`.</span>
        </div>
      )}
    </div>
  )
}

function Icon({ name }) {
  switch (name) {
    case 'github':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3a9 9 0 0 0-3 17.5v-3.2c-2.4.6-3-1.1-3-1.1-.4-1-.9-1.4-.9-1.4-.7-.5 0-.5 0-.5.8.1 1.3.8 1.3.8.7 1.2 1.9.9 2.4.7.1-.5.3-.9.6-1.2-1.9-.2-4-.9-4-4.2 0-.9.3-1.7.8-2.3-.1-.2-.4-1.1.1-2.3 0 0 .7-.2 2.4.9a8.2 8.2 0 0 1 4.4 0c1.7-1.1 2.4-.9 2.4-.9.5 1.2.2 2.1.1 2.3.5.6.8 1.4.8 2.3 0 3.3-2.1 4-4 4.2.3.3.6.8.6 1.6v3.2A9 9 0 0 0 12 3Z" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 9v11" />
          <path d="M7 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
          <path d="M12 20V9" />
          <path d="M12 13a4 4 0 0 1 8 0v7" />
        </svg>
      )
    case 'link':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M10 14 7.5 16.5a3 3 0 0 1-4.2-4.2L5.8 9.8A3 3 0 0 1 10 14Z" />
          <path d="M14 10 16.5 7.5a3 3 0 0 1 4.2 4.2L18.2 14.2A3 3 0 0 1 14 10Z" />
          <path d="m8.5 15.5 7-7" />
        </svg>
      )
    case 'external':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 5h5v5" />
          <path d="M10 14 19 5" />
          <path d="M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4" />
        </svg>
      )
    case 'home':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5.5 9.5V21h13V9.5" />
          <path d="M10 21v-6h4v6" />
        </svg>
      )
    case 'user':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
          <path d="M4 21a8 8 0 0 1 16 0" />
        </svg>
      )
    case 'briefcase':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
          <path d="M3 12h18" />
        </svg>
      )
    case 'folder':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
        </svg>
      )
    case 'spark':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z" />
          <path d="m18.5 15 1 2.3 2.5 1-2.5 1-1 2.2-1-2.2-2.5-1 2.5-1 1-2.3Z" />
        </svg>
      )
    case 'award':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="8" r="5" />
          <path d="m9 13-1 8 4-2 4 2-1-8" />
        </svg>
      )
    case 'mail':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      )
    case 'education':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m3 9 9-4 9 4-9 4-9-4Z" />
          <path d="M7 11v4.5c0 1.9 2.2 3.5 5 3.5s5-1.6 5-3.5V11" />
        </svg>
      )
    case 'heart':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />
        </svg>
      )
    case 'compass':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="8" />
          <path d="m14.5 9.5-2 5-5 2 2-5 5-2Z" />
        </svg>
      )
    case 'camera':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 7h3l1.5-2h5L16 7h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      )
    case 'arrow':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      )
    case 'chevron-left':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m15 5-7 7 7 7" />
        </svg>
      )
    case 'chevron-right':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m9 5 7 7-7 7" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="8" />
        </svg>
      )
  }
}

function normalizePath(pathname) {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  return routes[path] ? path : '/'
}

function getItemsPerView() {
  if (window.innerWidth < 840) {
    return 1
  }

  if (window.innerWidth < 1440) {
    return 2
  }

  return 3
}

function getProfileLinkHref(social) {
  if (social.icon === 'mail') {
    return getEmailDraftHref(portfolioData.profile)
  }

  return social.href
}

function getEmailDraftHref(profile) {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: profile.email,
  })

  if (profile.emailDraft?.subject) {
    params.set('su', profile.emailDraft.subject)
  }

  if (profile.emailDraft?.body) {
    params.set('body', profile.emailDraft.body)
  }

  return `https://mail.google.com/mail/?${params.toString()}`
}

function getLinkProps(href) {
  if (href.startsWith('http') || href.startsWith('mailto:')) {
    return {
      rel: 'noreferrer',
      target: href.startsWith('mailto:') ? undefined : '_blank',
    }
  }

  if (href.startsWith('/images/')) {
    return {
      rel: 'noreferrer',
      target: '_blank',
    }
  }

  return {}
}

export default App
