import { useEffect, useRef, useState } from "react";
import { BadgeCheck, Crosshair, Download, ExternalLink, Eye, FileText, Github, GraduationCap, Image, Layers, Linkedin, Mail, MapPin, Menu, Network, PlayCircle, Radar, Shield, ShieldCheck, Siren, Workflow, X } from "lucide-react";
const Icons = { BadgeCheck, Crosshair, Download, ExternalLink, Eye, FileText, Github, GraduationCap, Image, Layers, Linkedin, Mail, MapPin, Menu, Network, PlayCircle, Radar, Shield, ShieldCheck, Siren, Workflow, X };
import { site, roles, summary, skills, training, exposure, apex, certs, education, learning } from "./data.js";

const NAV = [["about", "About"], ["skills", "Skills"], ["experience", "Training"], ["projects", "Projects"], ["certifications", "Certifications"], ["learning", "Learning"], ["contact", "Contact"]];
const Icon = ({ name, ...p }) => { const C = Icons[name] || Icons.Shield; return <C aria-hidden="true" size={20} {...p} />; };

const Section = ({ id, kicker, title, children }) => (
  <section id={id} className="section" aria-labelledby={`${id}-t`}>
    <div className="wrap">
      <p className="kicker">{`// ${kicker}`}</p>
      <h2 id={`${id}-t`}>{title}</h2>
      {children}
    </div>
  </section>
);
const Chip = ({ children }) => <span className="chip">{children}</span>;
const Btn = ({ href, primary, icon, children, ...p }) => (
  <a className={`btn ${primary ? "primary" : ""}`} href={href} {...p}><Icon name={icon} size={18} />{children}</a>
);

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a href="#top" className="logo" aria-label="Home"><Icons.ShieldCheck aria-hidden="true" size={22} /> safaa<span>@soc</span>:~$</a>
        <button className="burger" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <Icons.X /> : <Icons.Menu />}</button>
        <nav className={open ? "links open" : "links"} aria-label="Primary">
          {NAV.map(([id, l]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{l}</a>)}
        </nav>
      </div>
    </header>
  );
}

function Photo() {
  const [ok, setOk] = useState(true);
  return ok
    ? <img className="photo" src={site.photo} alt={`Portrait of ${site.name}`} onError={() => setOk(false)} />
    : <div className="photo fallback" aria-hidden="true">SE</div>;
}


function CvModal({ onClose }) {
  const closeRef = useRef(null);
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    const prev = document.body.style.overflow;
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [onClose]);
  const fileName = site.cv.split("/").pop();
  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label="CV preview" onClick={onClose}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        <div className="bar">
          <span className="dots" aria-hidden="true"><i /><i /><i /></span>
          <strong><Icons.FileText size={15} aria-hidden="true" /> {fileName}</strong>
          <div className="acts">
            <a className="mini" href={site.cv} download><Icons.Download size={15} aria-hidden="true" /><span>Download</span></a>
            <a className="mini" href={site.cv} target="_blank" rel="noopener noreferrer"><Icons.ExternalLink size={15} aria-hidden="true" /><span>New tab</span></a>
            <button className="mini" ref={closeRef} onClick={onClose} aria-label="Close preview"><Icons.X size={16} aria-hidden="true" /></button>
          </div>
        </div>
        <iframe className="pdf" title={`CV of ${site.name}`} src={`${site.cv}#view=FitH&navpanes=0`} />
      </div>
    </div>
  );
}

function Hero({ onCv }) {
  return (
    <section id="top" className="hero">
      <div className="wrap hero-in">
        <div>
          <p className="prompt"><span>$</span> whoami</p>
          <h1>{site.name}</h1>
          <p className="role">Junior SOC Analyst <i className="cursor" /></p>
          <p className="subtitle">{site.title}</p>
          <p className="lead">Entry-level cybersecurity professional focused on SIEM monitoring, incident investigation, threat detection and automated response. Open to junior SOC and blue-team roles.</p>
          <div className="cta">
            <Btn primary icon="Download" href={site.cv} download>Download CV</Btn>
            <button type="button" className="btn" onClick={onCv}><Icon name="Eye" size={18} />View CV</button>
            <Btn icon="Linkedin" href={site.linkedin} target="_blank" rel="noopener noreferrer">View LinkedIn</Btn>
            <Btn icon="Mail" href="#contact">Contact Me</Btn>
          </div>
          <p className="loc"><Icons.MapPin size={16} aria-hidden="true" /> {site.location}</p>
        </div>
        <Photo />
      </div>
    </section>
  );
}

const About = () => (
  <Section id="about" kicker="about" title="About Me">
    <div className="two">
      <div>{summary.map((t) => <p key={t} className="body">{t}</p>)}</div>
      <div className="card">
        <h3>Target roles</h3>
        <div className="chips">{roles.map((r) => <Chip key={r}>{r}</Chip>)}</div>
        <h3 style={{ marginTop: 20 }}>Practical exposure</h3>
        <ul className="ticks">{exposure.map((e) => <li key={e}>{e}</li>)}</ul>
      </div>
    </div>
  </Section>
);

const Skills = () => (
  <Section id="skills" kicker="skills" title="Technical Skills">
    <div className="grid">
      {skills.map((s) => (
        <article className="card hover" key={s.title}>
          <div className="ico"><Icon name={s.icon} /></div>
          <h3>{s.title}</h3>
          <div className="chips">{s.items.map((i) => <Chip key={i}>{i}</Chip>)}</div>
        </article>
      ))}
    </div>
    <p className="note">Skills reflect lab, project and training experience, not production employment.</p>
  </Section>
);

const Experience = () => (
  <Section id="experience" kicker="experience" title="Experience & Training">
    <div className="timeline">
      {training.map((t) => (
        <article className="card hover" key={t.org}>
          <span className="tag">{t.tag}</span>
          <h3>{t.org}</h3>
          <p className="sub">{t.sub}{t.dates && ` · ${t.dates}`}</p>
          <p className="body">{t.text}</p>
          {t.topics.length > 0 && <ul className="ticks cols">{t.topics.map((x) => <li key={x}>{x}</li>)}</ul>}
        </article>
      ))}
    </div>
  </Section>
);

function Asset({ kind }) {
  const [bad, setBad] = useState(false);
  const isVideo = kind === "video";
  const src = isVideo ? site.video : site.infographic;
  const label = isVideo ? "Project demonstration video" : "Project infographic";
  const hint = isVideo ? "Set `video` in src/data.js" : "Add public/assets/apex-infographic.png";
  if (!src || bad) return <div className="slot"><Icon name={isVideo ? "PlayCircle" : "Image"} size={32} /><strong>{label}</strong><span>Coming soon · {hint}</span></div>;
  if (!isVideo) return <a href={src} target="_blank" rel="noopener noreferrer" aria-label="Open APEX infographic in full size"><img className="media" src={src} alt="APEX project infographic: identity, team, problem, architecture, results" onError={() => setBad(true)} /></a>;
  return src.includes("embed")
    ? <iframe className="media" src={src} title="APEX demonstration video" allowFullScreen />
    : <video className="media" src={src} poster={site.videoPoster} controls preload="none" playsInline onError={() => setBad(true)} />;
}

const Projects = () => (
  <Section id="projects" kicker="featured project" title={`${apex.name}: ${apex.full}`}>
    <p className="sub">{apex.kind}</p>
    <p className="body wide">{apex.text}</p>
    <div className="card role"><span className="tag">My role</span><h3>{apex.role}</h3><ul className="ticks">{apex.myWork.map((x) => <li key={x}>{x}</li>)}</ul></div>
    <h3 className="h3 gap">System architecture</h3>
    <div className="arch" role="list" aria-label="APEX architecture components">
      {apex.layers.map((l, i) => (
        <div className="node" role="listitem" key={l.label}>
          <span className="step">{String(i + 1).padStart(2, "0")}</span>
          <h3>{l.label}</h3>
          <ul>{l.items.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
      ))}
    </div>
    <h3 className="h3 gap">Lab results</h3>
    <div className="stats">{apex.results.map(([v, l]) => <div className="stat" key={l}><strong>{v}</strong><span>{l}</span></div>)}</div>
    <p className="note">{apex.resultsNote}</p>
    <div className="two media-row"><Asset kind="infographic" /><Asset kind="video" /></div>
    <div className="cta">
      {site.apexRepo
        ? <Btn icon="Github" href={site.apexRepo} target="_blank" rel="noopener noreferrer">View on GitHub</Btn>
        : <span className="chip dim">GitHub repository: link to be added</span>}
    </div>
  </Section>
);

const Certs = () => (
  <Section id="certifications" kicker="credentials" title="Certifications & Education">
    <div className="two">
      <div>
        <h3 className="h3">Certifications & training</h3>
        <div className="list">{certs.map((c) => <div className="row" key={c.name}><Icons.BadgeCheck aria-hidden="true" size={20} /><div><strong>{c.name}</strong><span>{c.type}</span></div></div>)}</div>
      </div>
      <div>
        <h3 className="h3">Education</h3>
        <div className="list">{education.map((c) => <div className="row" key={c.name}><Icons.GraduationCap aria-hidden="true" size={20} /><div><strong>{c.name}</strong><span>{c.sub}</span></div></div>)}</div>
      </div>
    </div>
  </Section>
);

const Learning = () => (
  <Section id="learning" kicker="learning" title="Continuous Learning">
    <p className="body wide">I keep building practical skills through structured courses and hands-on labs, with a focus on SOC workflows, Linux and network security.</p>
    <div className="chips big">{learning.map((l) => <Chip key={l}>{l}</Chip>)}</div>
  </Section>
);

const Contact = ({ onCv }) => (
  <Section id="contact" kicker="contact" title="Contact Me">
    <p className="body wide">Open to Junior SOC Analyst and related opportunities. Let's talk.</p>
    <div className="grid">
      <a className="card hover link" href={`mailto:${site.email}`}><Icons.Mail aria-hidden="true" /><strong>Email</strong><span>{site.email}</span></a>
      <a className="card hover link" href={site.linkedin} target="_blank" rel="noopener noreferrer"><Icons.Linkedin aria-hidden="true" /><strong>LinkedIn</strong><span>safaa-elmhalawy</span></a>
      <button type="button" className="card hover link" onClick={onCv}><Icons.FileText aria-hidden="true" /><strong>Resume</strong><span>View CV online</span></button>
      {site.github
        ? <a className="card hover link" href={site.github} target="_blank" rel="noopener noreferrer"><Icons.Github aria-hidden="true" /><strong>GitHub</strong><span>{site.github.replace("https://", "")}</span></a>
        : <div className="card link dimcard"><Icons.Github aria-hidden="true" /><strong>GitHub</strong><span>Link to be added</span></div>}
    </div>
  </Section>
);

export default function App() {
  const [cvOpen, setCvOpen] = useState(false);
  const openCv = () => {
    // Phones/tablets render PDFs poorly inside iframes, so open the file in a new tab there.
    if (window.matchMedia("(max-width: 820px), (pointer: coarse)").matches) window.open(site.cv, "_blank", "noopener");
    else setCvOpen(true);
  };
  return (
    <>
      <a className="skip" href="#about">Skip to content</a>
      <div className="bg" aria-hidden="true" />
      <Header />
      <main><Hero onCv={openCv} /><About /><Skills /><Experience /><Projects /><Certs /><Learning /><Contact onCv={openCv} /></main>
      {cvOpen && <CvModal onClose={() => setCvOpen(false)} />}
      <footer className="foot"><div className="wrap">© {new Date().getFullYear()} {site.name} · {site.location}</div></footer>
    </>
  );
}
