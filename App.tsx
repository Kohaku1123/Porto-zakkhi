import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Cpu,
  Gauge,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MonitorCog,
  PanelTop,
  Settings2,
  ShieldCheck,
  Wrench,
  X,
  Zap,
} from 'lucide-react';
import { useState } from 'react';

const skills = [
  { icon: Zap, title: 'Electrical', text: 'Sistem kelistrikan, elektronika, sensor, dan instrumentasi.' },
  { icon: Settings2, title: 'Mechanical', text: 'Analisis, perawatan, dan observasi sistem mekanik industri.' },
  { icon: Gauge, title: 'Pneumatic', text: 'Perawatan sistem pneumatic dan udara bertekanan di area pabrik.' },
  { icon: MonitorCog, title: 'Automation', text: 'PLC Siemens, PLC Zelio, mikrokontroler, dan otomasi industri.' },
  { icon: Cpu, title: 'Embedded System', text: 'ESP32, Arduino, shift register, dan integrasi rangkaian.' },
  { icon: Wrench, title: 'Troubleshooting', text: 'Identifikasi masalah, analisis sistem, dan tindakan perbaikan.' },
];

const tools = ['TIA Portal', 'Autodesk Fusion 360', 'Proteus', 'Zelio Soft', 'Microsoft Office'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <nav className="container nav-wrap" aria-label="Navigasi utama">
          <a className="brand" href="#top" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark"><Wrench size={18} strokeWidth={2.3} /></span>
            <span>AM<span className="brand-dot">.</span></span>
          </a>
          <button className="menu-toggle" aria-label="Buka menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            <a href="#keahlian" onClick={() => setMenuOpen(false)}>Keahlian</a>
            <a href="#proyek" onClick={() => setMenuOpen(false)}>Proyek</a>
            <a href="#pengalaman" onClick={() => setMenuOpen(false)}>Pengalaman</a>
            <a href="#kontak" onClick={() => setMenuOpen(false)} className="nav-cta">Mari terhubung <ArrowUpRight size={15} /></a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> MAINTENANCE & AUTOMATION</div>
            <h1>Menjaga sistem tetap <em>bergerak.</em></h1>
            <p className="hero-lead">Saya Ahmad Muzakkhi, teknisi maintenance dengan ketertarikan pada sistem elektrik, mekanik, dan otomasi industri.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#kontak">Mari berdiskusi <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href="#proyek">Lihat proyek <ChevronRight size={17} /></a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={15} /> Yogyakarta, Indonesia</span>
              <span className="meta-divider" />
              <span><ShieldCheck size={15} /> Open to work</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-grid" />
            <div className="portrait-frame">
              <img src="/images/gallery/IMG_9481+DJ.jpg.jpeg" alt="Ahmad Muzakkhi" />
            </div>
            <div className="visual-tag tag-top"><span className="status-dot" /> Available for opportunities</div>
            <div className="visual-tag tag-bottom"><span>06+</span><small>AREA KEAHLIAN</small></div>
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
          </div>
        </section>

        <section className="stats-strip">
          <div className="container stats-grid">
            <div><strong>03<span>+</span></strong><p>Tahun pendidikan teknik</p></div>
            <div><strong>06<span>+</span></strong><p>Area keahlian teknis</p></div>
            <div><strong>01</strong><p>Pengalaman industri</p></div>
            <div><strong>∞</strong><p>Semangat belajar</p></div>
          </div>
        </section>

        <section id="keahlian" className="section container">
          <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> KOMPETENSI</div><h2>Keahlian yang <em>siap diandalkan.</em></h2></div><p>Perpaduan antara pemahaman teori, pengalaman praktik, dan rasa ingin tahu untuk menyelesaikan tantangan teknis.</p></div>
          <div className="skills-grid">{skills.map(({ icon: Icon, title, text }, index) => <article className="skill-card" key={title}><div className="skill-number">0{index + 1}</div><div className="skill-icon"><Icon size={22} /></div><h3>{title}</h3><p>{text}</p><a href="#kontak">Selengkapnya <ArrowUpRight size={14} /></a></article>)}</div>
        </section>

        <section id="proyek" className="section projects-section">
          <div className="container">
            <div className="section-heading project-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> SELECTED WORK</div><h2>Proyek yang <em>pernah dikerjakan.</em></h2></div><p>Beberapa pengalaman praktik yang membentuk cara saya berpikir, merancang, dan bekerja.</p></div>
            <div className="project-feature">
              <div className="project-image"><img src="/images/WhatsApp_Image_2026-08-22_at_13.52.18.jpeg" alt="Proyek display waktu digital berbasis ESP32" /><span className="image-label">HARDWARE & ELECTRONICS</span></div>
              <div className="project-content"><span className="project-index">01 / 02</span><h3>Digital Prayer Time Display</h3><p>Merancang rangkaian elektronik dengan mikrokontroler ESP32, shift register 74HC595, dan driver ULN2803A untuk mengendalikan multiplexed seven-segment display pada jam digital penanda waktu sholat.</p><div className="project-tools">{['ESP32', '74HC595', 'ULN2803A', 'Seven Segment'].map(tool => <span key={tool}>{tool}</span>)}</div><a className="text-link" href="#kontak">Diskusikan proyek <ArrowUpRight size={16} /></a></div>
            </div>
            <div className="project-gallery">
              <article className="gallery-card">
                <div className="gallery-image"><img src="/images/pneumatics_lab/WhatsApp_Image_2026-09-16_at_18.50.59.jpeg" alt="Praktik sistem pneumatic di laboratorium" /><span className="gallery-index">02</span></div>
                <div className="gallery-copy"><span className="gallery-type">PNEUMATIC SYSTEM</span><h3>Praktik Sistem Pneumatic</h3><p>Eksplorasi rangkaian aktuator, selang udara, dan kontrol pneumatic pada training lab.</p></div>
              </article>
              <article className="gallery-card">
                <div className="gallery-image"><img src="/images/sugar_factory_internship/WhatsApp_Image_2026-09-16_at_18.49.09_(1).jpeg" alt="Kegiatan praktik industri di PG Madukismo" /><span className="gallery-index">03</span></div>
                <div className="gallery-copy"><span className="gallery-type">INDUSTRIAL MAINTENANCE</span><h3>Praktik Industri</h3><p>Pengalaman observasi dan pemeliharaan peralatan di lingkungan pabrik gula PG Madukismo.</p></div>
              </article>
              <article className="gallery-card">
                <div className="gallery-image"><img src="/images/sugar_factory_internship/WhatsApp_Image_2026-09-16_at_18.49.09.jpeg" alt="Tim praktik industri di PG Madukismo" /><span className="gallery-index">04</span></div>
                <div className="gallery-copy"><span className="gallery-type">FIELD EXPERIENCE</span><h3>Belajar di Lapangan</h3><p>Berinteraksi langsung dengan tim dan memahami ritme kerja maintenance di industri.</p></div>
              </article>
            </div>
            <div className="project-note"><PanelTop size={18} /><span>Terbuka untuk kolaborasi proyek otomasi, perawatan, dan sistem kontrol.</span><a href="#kontak">Hubungi saya <ArrowUpRight size={15} /></a></div>
          </div>
        </section>

        <section id="pengalaman" className="section container experience-section">
          <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> LATAR BELAKANG</div><h2>Belajar dari <em>lapangan.</em></h2></div><p>Fondasi teknis yang dibangun melalui pendidikan, praktik industri, dan proyek mandiri.</p></div>
          <div className="experience-layout">
            <div className="timeline">
              <article className="timeline-item"><span className="timeline-dot" /><div className="timeline-date">JAN 2026 — MAR 2026</div><h3>Praktik Industri <span>PT Madubaru</span></h3><p>Melakukan pemeliharaan, observasi, dan analisis komprehensif pada sistem pneumatic dan udara kering pneumatic yang digunakan dalam operasional pabrik.</p></article>
              <article className="timeline-item"><span className="timeline-dot" /><div className="timeline-date">SEP 2022 — AGU 2026</div><h3>S1 Pendidikan Teknik Mekatronika <span>Universitas Negeri Yogyakarta</span></h3><p>Fokus pada sistem kelistrikan, elektronika, sensor dan instrumentasi, sistem kontrol, pemrograman, serta otomasi industri.</p></article>
            </div>
            <div className="side-info"><div className="info-card"><GraduationCap size={23} /><h3>Pelatihan & organisasi</h3><ul><li><Check size={16} /> Finalis Ideation Competition Technofest (2024)</li><li><Check size={16} /> Peserta UNY National Information Technology Competition (2025)</li><li><Check size={16} /> Peserta Pelatihan PLC Siemens dan Pemrograman Dasar dengan TIA Portal (2023)</li><li><Check size={16} /> Staff (2024) & Anggota (2023) UKMF Matriks</li></ul></div><div className="tools-card"><span className="mini-label">TOOLS I USE</span><div className="tool-list">{tools.map(tool => <span key={tool}>{tool}</span>)}</div></div></div>
          </div>
        </section>

        <section id="kontak" className="contact-section"><div className="container contact-inner"><div><div className="eyebrow light"><span className="eyebrow-line" /> LET'S CONNECT</div><h2>Punya tantangan teknis?<br /><em>Mari bicarakan.</em></h2><p>Saya siap berdiskusi tentang maintenance, otomasi, maupun peluang kolaborasi baru.</p></div><div className="contact-actions"><a href="https://wa.me/62895359020730" className="contact-item"><span className="contact-icon"><MessageCircle size={20} /></span><span><small>WHATSAPP</small><strong>+62 895-3590-20730</strong></span><ArrowUpRight size={17} /></a><a href="mailto:amuzakki067@gmail.com" className="contact-item"><span className="contact-icon"><Mail size={20} /></span><span><small>EMAIL</small><strong>amuzakki067@gmail.com</strong></span><ArrowUpRight size={17} /></a></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><span>© 2026 Ahmad Muzakkhi</span><span>Maintenance • Automation • Engineering</span><a href="#top">Kembali ke atas <ChevronRight size={15} /></a></div></footer>
    </div>
  );
}

export default App;
