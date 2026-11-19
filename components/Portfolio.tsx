import { experience, profile, projects, skills } from "@/data/portfolio";

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Portfolio() {
  return <>
    <section className="hero section-shell" id="home">
      <div className="hero-orb orb-one"/><div className="hero-orb orb-two"/>
      <div className="hero-copy">
        <div className="eyebrow"><span className="status-dot"/> OPEN TO THE RIGHT OPPORTUNITY</div>
        <p className="hero-kicker">HELLO, I&apos;M</p>
        <h1>Harshit<br/><span>Kumar.</span></h1>
        <h2>Frontend Developer <i>—</i> React &amp; Next.js</h2>
        <p className="hero-description">{profile.summary}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">Explore My Work <Arrow/></a>
          <a className="button button-ghost" href="/Harshit-Kumar-Resume.pdf" target="_blank" rel="noreferrer">View Resume ↓</a>
        </div>
        <div className="hero-meta"><span>BASED IN {profile.location.toUpperCase()}</span><span>3+ YEARS EXPERIENCE</span><span>REACT · NEXT · TS</span></div>
      </div>
      <div className="hero-visual" aria-label="Decorative developer graphic">
        <div className="visual-grid"/>
        <div className="code-card">
          <div className="code-top"><span/><span/><span/><small>developer.tsx</small></div>
          <div className="code-lines">
            <p><b>const</b> developer = {"{"}</p>
            <p className="indent"><em>name</em>: <strong>&quot;Harshit&quot;</strong>,</p>
            <p className="indent"><em>role</em>: <strong>&quot;Frontend Dev&quot;</strong>,</p>
            <p className="indent"><em>stack</em>: [</p>
            <p className="indent more"><strong>&quot;React&quot;</strong>, <strong>&quot;Next.js&quot;</strong>,</p>
            <p className="indent more"><strong>&quot;TypeScript&quot;</strong></p>
            <p className="indent">],</p>
            <p className="indent"><em>focus</em>: <strong>&quot;Great UX&quot;</strong></p>
            <p>{"};"}</p>
            <p className="code-cursor">▍</p>
          </div>
          <div className="code-footer"><span className="status-dot"/> AVAILABLE FOR NEW CHALLENGES</div>
        </div>
        <div className="floating-chip chip-top">{"<"} pixel perfect /{">"}</div>
        <div className="floating-chip chip-bottom">✳ Built with curiosity</div>
        <div className="hero-index">01 <span/> 07</div>
      </div>
      <a href="#about" className="scroll-cue">SCROLL TO EXPLORE <span>↓</span></a>
    </section>

    <section className="intro-strip"><p>DESIGN MINDED <span>✳</span> CODE DRIVEN <span>✳</span> DETAIL OBSESSED <span>✳</span> ALWAYS LEARNING</p></section>

    <section className="section section-shell" id="about">
      <div className="section-heading"><p className="eyebrow">01 / ABOUT ME</p><h2>Turning ideas into<br/><span>digital reality.</span></h2></div>
      <div className="about-grid">
        <div className="about-copy"><p className="large-copy">I&apos;m a frontend developer who cares about how things look, feel and work.</p><p>With 3+ years of experience, I&apos;ve worked on travel websites, CRM platforms, ERP interfaces and company websites. I enjoy collaborating with teams, solving UI challenges and building reusable experiences that work beautifully across devices.</p><a className="text-link" href="#contact">Have a project in mind? Let&apos;s talk <Arrow/></a></div>
        <div className="stats-grid"><div className="stat-card"><strong>3<span>+</span></strong><small>YEARS EXPERIENCE</small></div><div className="stat-card"><strong>8<span>+</span></strong><small>WEBSITES &amp; APPS</small></div><div className="stat-card"><strong>4</strong><small>CORE FRONTEND AREAS</small></div><div className="stat-card stat-note"><span>✳</span><small>ALWAYS BUILDING.<br/>ALWAYS LEARNING.</small></div></div>
      </div>
    </section>

    <section className="section section-shell" id="skills">
      <div className="section-heading row-heading"><div><p className="eyebrow">02 / MY TOOLKIT</p><h2>Good tools.<br/><span>Better experiences.</span></h2></div><p className="heading-note">The technologies I use to turn complex ideas into clean, reliable interfaces.</p></div>
      <div className="skills-grid">{skills.map((group, i) => <article className="skill-card" key={group.group}><div className="skill-card-top"><span>0{i+1}</span><span>✳</span></div><h3>{group.group}</h3><div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div>
    </section>

    <section className="section section-shell" id="work">
      <div className="section-heading row-heading"><div><p className="eyebrow">03 / SELECTED WORK</p><h2>Some things I&apos;ve<br/><span>helped bring to life.</span></h2></div><p className="heading-note">A selection of websites and applications across travel, business and education.</p></div>
      <div className="project-grid">{projects.map((project, i) => <article className={`project-card ${i < 2 ? "project-featured" : ""}`} key={project.name}>
        <div className={`project-art art-${i+1}`}><span className="project-number">{project.number} / 07</span><div className="art-window"><div className="art-window-bar"><i/><i/><i/></div><div className="art-window-content"><span>{project.type.toUpperCase()}</span><strong>{project.name}</strong><small>Thoughtful digital experiences.</small><b>EXPLORE ↗</b></div></div><span className="art-orbit"/></div>
        <div className="project-info"><div><p className="project-type">{project.type}</p><h3>{project.name}</h3></div><span className="project-arrow"><Arrow/></span></div>
        <p className="project-description">{project.description}</p>
        <div className="project-bottom"><div className="project-stack">{project.stack.map(s => <span key={s}>{s}</span>)}</div><div className="project-links">{project.live && <a href={project.live} target="_blank" rel="noreferrer">LIVE <Arrow/></a>}{project.code && <a href={project.code} target="_blank" rel="noreferrer">CODE <Arrow/></a>}</div></div>
      </article>)}</div>
      <p className="project-footnote">Some project links and source repositories are being updated. Ask me for additional work samples.</p>
    </section>

    <section className="section section-shell" id="experience">
      <div className="section-heading"><p className="eyebrow">04 / EXPERIENCE</p><h2>The journey<br/><span>so far.</span></h2></div>
      <div className="timeline">{experience.map((job, i) => <article className="timeline-item" key={job.company}><div className="timeline-marker">0{i+1}</div><div className="timeline-content"><div className="timeline-title"><div><h3>{job.role}</h3><p>{job.company}</p></div><span>{job.period}</span></div><ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul></div></article>)}</div>
    </section>

    <section className="services-band"><div className="section-shell services-inner"><p className="eyebrow">05 / WHAT I BRING</p><h2>From first sketch<br/>to <span>final interaction.</span></h2><div className="service-list"><span>Frontend Development</span><span>Responsive Web Design</span><span>Figma to Code</span><span>API Integration</span><span>UI Optimization</span><span>SEO-friendly Interfaces</span></div></div></section>

    <section className="section section-shell contact-section" id="contact">
      <p className="eyebrow">06 / GET IN TOUCH</p><h2>Have a good idea?<br/><span>Let&apos;s build it.</span></h2><p className="contact-copy">I&apos;m always interested in meaningful projects, new opportunities and conversations about the web.</p>
      <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <Arrow/></a>
      <div className="contact-bottom"><div><small>BASED IN</small><p>{profile.location}</p></div><div className="social-links"><a href={profile.linkedin} target="_blank" rel="noreferrer">LINKEDIN <Arrow/></a><a href={profile.github} target="_blank" rel="noreferrer">GITHUB <Arrow/></a><a href={`mailto:${profile.email}`}>EMAIL <Arrow/></a></div></div>
    </section>
    <footer className="footer"><div className="section-shell"><a className="brand" href="#home">HK<span>.</span></a><p>Designed &amp; developed by Harshit Kumar © {new Date().getFullYear()}</p><a href="#home">BACK TO TOP ↑</a></div></footer>
  </>;
}