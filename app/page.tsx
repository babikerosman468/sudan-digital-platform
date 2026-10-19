import { sql } from "../lib/db";

export const dynamic = "force-dynamic";

const modules = [
  ["Sudan Monitor", "Political, institutional, legal, social and national developments."],
  ["Regional Monitor", "Red Sea, Horn of Africa, Egypt, Gulf, AU and neighbouring states."],
  ["Humanitarian & Health", "Health, displacement, food security, disease and humanitarian indicators."],
  ["Economy & Livelihoods", "Agriculture, livestock, trade, markets, employment and resilience."],
  ["Research Hub", "Researchers, publications, datasets, projects and opportunities."],
  ["Digital Sudan", "AI, data infrastructure, digital health and innovation."],
  ["Stakeholder Map", "Institutions, universities, NGOs, research centres and networks."],
  ["Knowledge Library", "Reports, papers, datasets and public institutional sources."],
];

export default async function Home() {
  const db = sql();

  const [stats] = await db`
    SELECT
      (SELECT count(*)::int FROM sources) AS sources,
      (SELECT count(*)::int FROM events) AS events,
      (SELECT count(*)::int FROM institutions) AS institutions,
      (SELECT count(*)::int FROM opportunities) AS opportunities
  `;

  return (
    <div className="app">

      {/* HEADER */}

      <header className="header">

        <div className="brand">

          <div className="logo">
            SD
          </div>

          <div>
            <div className="title">
              Sudan Digital Platform
            </div>

            <div className="subtitle">
              Evidence • Research • Data • Analysis • Cooperation
            </div>
          </div>

        </div>

        <div className="header-right">

          <div className="search">
            Search knowledge, research, data...
          </div>

          <a className="header-button" href="#modules">
            Platform
          </a>

        </div>

      </header>


      {/* SIDEBAR */}

      <aside className="sidebar">

        <div className="sidebar-title">
          Platform
        </div>

        <nav className="menu">

          <a className="active" href="#">
            <span className="icon">⌂</span>
            Home
          </a>

          <a href="#monitor">
            <span className="icon">◉</span>
            Sudan Monitor
          </a>

          <a href="#research">
            <span className="icon">R</span>
            Research
          </a>

          <a href="#health">
            <span className="icon">H</span>
            Health
          </a>

          <a href="#economy">
            <span className="icon">E</span>
            Economy
          </a>

          <a href="#digital">
            <span className="icon">D</span>
            Digital Sudan
          </a>

          <a href="#stakeholders">
            <span className="icon">S</span>
            Stakeholders
          </a>

          <a href="#library">
            <span className="icon">L</span>
            Knowledge Library
          </a>

          <a href="#network">
            <span className="icon">N</span>
            Network
          </a>

        </nav>

      </aside>


      {/* MAIN */}

      <main className="main">

        <div className="page-header">

          <div>
            <h1>
              Sudan Knowledge Dashboard
            </h1>

            <p>
              Evidence-based information, research and analytical infrastructure.
            </p>
          </div>

          <div className="status">
            EVIDENCE FIRST
          </div>

        </div>


        {/* LIVE DATABASE */}

        <section className="cards">

          <div className="card">
            <div className="card-number">LIVE</div>
            <div className="metric">{stats.sources}</div>
            <h3>Sources</h3>
            <p>Registered evidence sources.</p>
          </div>

          <div className="card">
            <div className="card-number">LIVE</div>
            <div className="metric">{stats.events}</div>
            <h3>Events</h3>
            <p>Structured Sudan-related events.</p>
          </div>

          <div className="card">
            <div className="card-number">LIVE</div>
            <div className="metric">{stats.institutions}</div>
            <h3>Institutions</h3>
            <p>Registered institutions.</p>
          </div>

          <div className="card">
            <div className="card-number">LIVE</div>
            <div className="metric">{stats.opportunities}</div>
            <h3>Opportunities</h3>
            <p>Research and cooperation opportunities.</p>
          </div>

        </section>


        {/* CENTRAL PLATFORM */}

        <section className="platform">

          <h2>
            Sudan Digital Platform
          </h2>

          <p>
            An evidence-based digital knowledge, research and analytical
            platform connecting Sudanese people, institutions, data and
            international knowledge networks.
          </p>

          <div className="platform-buttons">

            <a href="#monitor">
              Understand Sudan
            </a>

            <a href="#research">
              Research Sudan
            </a>

            <a href="#digital">
              Build Digital Sudan
            </a>

            <a href="#evidence">
              Explore Evidence
            </a>

          </div>

        </section>


        {/* DASHBOARD */}

        <section id="monitor" className="section">

          <div className="section-heading">
            <h2>Knowledge Dashboard</h2>
          </div>

          <div className="cards dashboard-cards">

            <div className="card">
              <div className="card-number">01</div>
              <h3>Evidence First</h3>
              <p>
                Source, date, location, topic, evidence,
                interpretation and confidence.
              </p>
            </div>

            <div className="card">
              <div className="card-number">04</div>
              <h3>Information Classes</h3>
              <p>
                FACT, ANALYSIS, FORECAST and attributed
                COMMENTARY remain distinct.
              </p>
            </div>

            <div className="card">
              <div className="card-number">12</div>
              <h3>Core Modules</h3>
              <p>
                Monitoring, research, health, economy,
                digital transformation and knowledge infrastructure.
              </p>
            </div>

            <div className="card">
              <div className="card-number">∞</div>
              <h3>Knowledge Network</h3>
              <p>
                People, institutions, researchers and
                international networks.
              </p>
            </div>

          </div>

        </section>


        {/* MODULES */}

        <section id="modules" className="section">

          <h2>Platform Modules</h2>

          <div className="module-grid">

            {modules.map(([title, description], index) => (
              <article
                className={`module-card module-${index + 1}`}
                key={title}
              >

                <div className="module-icon">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3>{title}</h3>

                <p>{description}</p>

              </article>
            ))}

          </div>

        </section>


        {/* SUDAN IMPACT ACT */}

        <section id="sudan-impact-act" className="section">

          <h2>USA–Sudan Impact Act</h2>

          <div className="panel">
            <p>
              Analysis of the proposed United States–Sudan partnership
              in agriculture, minerals, commerce, trade, and economic development.
            </p>

            <a href="/usaimpact.pdf" target="_blank" rel="noopener noreferrer"
               className="header-button">
              Read Full Analysis (PDF)
            </a>
          </div>

        </section>


        {/* RESEARCH */}

        <section id="research" className="section">

          <h2>Multidisciplinary Research</h2>

          <div className="panel">

            <div className="research-tags">

              <span>Politics</span>
              <span>Economy</span>
              <span>Population</span>
              <span>Health</span>
              <span>Food</span>
              <span>Environment</span>
              <span>Technology</span>
              <span>Regional Systems</span>

            </div>

            <p>
              The platform provides a structured environment for
              investigating relationships across these systems without
              turning analytical hypotheses into unsupported facts.
            </p>

          </div>

        </section>


        {/* EVIDENCE */}

        <section id="evidence" className="section">

          <h2>Evidence Architecture</h2>

          <div className="panel">

            <div className="evidence">

              <span>Source</span>
              <b>→</b>
              <span>Date</span>
              <b>→</b>
              <span>Location</span>
              <b>→</b>
              <span>Topic</span>
              <b>→</b>
              <span>Evidence</span>
              <b>→</b>
              <span>Interpretation</span>
              <b>→</b>
              <span>Confidence</span>

            </div>

            <p>
              AI-assisted research will remain traceable to source
              material and subject to human review before formal
              publication.
            </p>

          </div>

        </section>


        {/* EXTRA MODULE ANCHORS */}

        <section id="health" className="section compact-section">
          <h2>Humanitarian &amp; Health</h2>
          <div className="panel">
            <p>
              Health, displacement, food security, disease and
              humanitarian indicators.
            </p>
          </div>
        </section>


        <section id="economy" className="section compact-section">
          <h2>Economy &amp; Livelihoods</h2>
          <div className="panel">
            <p>
              Agriculture, livestock, trade, markets, employment
              and resilience.
            </p>
          </div>
        </section>


        <section id="digital" className="section compact-section">
          <h2>Digital Sudan</h2>
          <div className="panel">
            <p>
              AI, data infrastructure, digital health and innovation.
            </p>
          </div>
        </section>


        <section id="stakeholders" className="section compact-section">
          <h2>Stakeholder Map</h2>
          <div className="panel">
            <p>
              Institutions, universities, NGOs, research centres
              and networks.
            </p>
          </div>
        </section>


        <section id="library" className="section compact-section">
          <h2>Knowledge Library</h2>
          <div className="panel">
            <p>
              Reports, papers, datasets and public institutional sources.
            </p>
          </div>
        </section>


        <section id="network" className="section compact-section">
          <h2>Sudan Knowledge Network</h2>
          <div className="panel">
            <p>
              Connecting people, institutions, research and
              international knowledge networks.
            </p>
          </div>
        </section>


        {/* ROADMAP */}

        <section id="roadmap" className="section">

          <h2>Development Roadmap</h2>

          <div className="roadmap-grid">

            {[
              "MVP",
              "Knowledge Platform",
              "Analytical Platform",
              "Digital Intelligence",
              "Sudan Knowledge Network"
            ].map((item, index) => (

              <div
                className={`roadmap-card roadmap-${index + 1}`}
                key={item}
              >

                <div className="roadmap-number">
                  0{index + 1}
                </div>

                <h3>{item}</h3>

                <p>
                  Progressive expansion without compromising
                  the evidence architecture.
                </p>

              </div>

            ))}

          </div>

        </section>

      </main>


      {/* FOOTER */}

      <footer className="footer">

        <div>
          <strong>Sudan Digital Platform</strong>
          &nbsp;•&nbsp;
          Cairo, Egypt
        </div>

        <div className="footer-links">

          <a href="#evidence">Evidence</a>
          <a href="#research">Research</a>
          <a href="#modules">Data</a>
          <a href="#monitor">Analysis</a>
          <a href="#network">Cooperation</a>

        </div>

      </footer>

    </div>
  );
}
