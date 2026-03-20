import Ticker from "./components/Ticker";
import WaitlistForm from "./components/WaitlistForm";
import WaitlistProvider from "./components/WaitlistProvider";
import RevealOnScroll from "./components/RevealOnScroll";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <WaitlistProvider>
      <ScrollReveal />
      {/* ═══ NAV ═══ */}
      <nav>
        <a href="#" className="logo">
          Usury
        </a>
        <div className="nav-links">
          <a href="#truth" className="nav-link">
            The truth
          </a>
          <a href="#how" className="nav-link">
            How it works
          </a>
          <a href="#history" className="nav-link">
            History
          </a>
          <a href="#waitlist" className="nav-cta-btn">
            Join waitlist
          </a>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <div className="hero">
        <div className="hero-provocation">Your bank is robbing you</div>
        <h1>
          See what your lenders are <em>really</em> charging&nbsp;you
        </h1>
        <p className="hero-sub">
          Your credit card&apos;s APR was legal in{" "}
          <strong>zero countries</strong> before 1978. Usury shows you exactly
          what it&apos;s costing you — and how to <strong>fight back.</strong>
        </p>
        <div className="hero-form-wrapper">
          <WaitlistForm id="hero-form" />
        </div>
        <div className="hero-meta">
          <span>Free to join</span>
          <span>No spam, ever</span>
          <span>Launching 2026</span>
        </div>
      </div>

      {/* ═══ TICKER ═══ */}
      <Ticker />

      {/* ═══ BOLD STATEMENT ═══ */}
      <RevealOnScroll className="bold-statement">
        <h2>
          For most of human history, charging excessive interest was a{" "}
          <em>crime.</em> In 2026 America, it&apos;s called a credit card.
        </h2>
        <p className="subtext">
          Every major moral tradition condemned it. Every major civilization
          banned it. Then in 1978, one Supreme Court decision changed everything.
        </p>
      </RevealOnScroll>

      {/* ═══ STAT BAR ═══ */}
      <div className="stat-bar">
        <div className="stat-bar-inner">
          <RevealOnScroll className="stat">
            <h3>$1.28T</h3>
            <p>Total US card debt</p>
          </RevealOnScroll>
          <RevealOnScroll className="stat">
            <h3>24.8%</h3>
            <p>Average APR in 2026</p>
          </RevealOnScroll>
          <RevealOnScroll className="stat">
            <h3>$120B</h3>
            <p>Interest charged yearly</p>
          </RevealOnScroll>
          <RevealOnScroll className="stat">
            <h3>0</h3>
            <p>Apps that help before you&apos;re behind</p>
          </RevealOnScroll>
        </div>
      </div>

      {/* ═══ HOW IT WORKS ═══ */}
      <section id="how">
        <div className="section-kicker">How it works</div>
        <h2 className="section-heading">
          Three steps to see what they <em>don&apos;t</em> want you to see
        </h2>
        <p className="section-body">
          Most debt apps wait until you&apos;re drowning. Usury works while
          you&apos;re still swimming — catching the leaks before they sink you.{" "}
          <strong>
            No 90-day waiting period. No minimum debt. No judgment.
          </strong>
        </p>

        <div className="steps">
          <RevealOnScroll className="step">
            <div className="step-num">Step 01</div>
            <h4>Connect your accounts</h4>
            <p>
              One tap. No passwords shared. We pull your balances, APRs, and
              hidden fees in seconds using bank-level encryption across 15,000+
              institutions.
            </p>
          </RevealOnScroll>
          <RevealOnScroll className="step">
            <div className="step-num">Step 02</div>
            <h4>See the truth</h4>
            <p>
              Your personalized exposé shows exactly how much you&apos;re
              overpaying in interest, fees, and penalties — the numbers your
              lender buries in page 47 of the fine print.
            </p>
          </RevealOnScroll>
          <RevealOnScroll className="step">
            <div className="step-num">Step 03</div>
            <h4>Fight back</h4>
            <p>
              Optimize your payments, eliminate waste, and take control of your
              debt on your terms. Not your bank&apos;s terms. Yours.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══ EXPOSE CARDS ═══ */}
      <div className="expose-section" id="truth">
        <div className="expose-inner">
          <div className="section-kicker">What they&apos;re hiding</div>
          <h2 className="section-heading">
            They&apos;re counting on you <em>not looking</em>
          </h2>
          <p className="section-body">
            The average American pays $1,380/year in credit card interest alone.
            Your lender&apos;s entire business model depends on you{" "}
            <strong>never doing this math.</strong> Usury does it for you.
          </p>

          <div className="expose-grid">
            <RevealOnScroll className="expose-card">
              <div className="card-stat">27 years</div>
              <h4>The minimum payment trap</h4>
              <p>
                Pay only minimums on $5,000 at 22% APR and you&apos;ll be in
                debt for nearly three decades. The minimum payment isn&apos;t
                designed to help you pay off debt. It&apos;s designed to maximize
                the interest you pay.
              </p>
            </RevealOnScroll>
            <RevealOnScroll className="expose-card">
              <div className="card-stat">500%</div>
              <h4>The markup on your money</h4>
              <p>
                Banks borrow from the Federal Reserve at ~4%. They turn around
                and charge you 24%. That 500% markup is the most profitable
                spread in the history of financial services. You&apos;re the
                product.
              </p>
            </RevealOnScroll>
            <RevealOnScroll className="expose-card">
              <div className="card-stat">$7,800</div>
              <h4>The true cost of $5,000</h4>
              <p>
                A $5,000 balance at 22% with minimum payments costs $7,800
                total. You pay more in interest than the original debt. Your bank
                knows this number. You don&apos;t. That&apos;s the point.
              </p>
            </RevealOnScroll>
            <RevealOnScroll className="expose-card">
              <div className="card-stat">29.99%</div>
              <h4>The penalty you never saw coming</h4>
              <p>
                One late payment — even by a day — can trigger a penalty APR of
                29.99% that applies to your entire balance. Indefinitely.
                It&apos;s in the agreement you signed but never read.
                They&apos;re counting on that too.
              </p>
            </RevealOnScroll>
            <RevealOnScroll className="expose-card">
              <div className="card-stat">$0</div>
              <h4>
                What your grace period is worth (if you carry a balance)
              </h4>
              <p>
                Carry even $1 in revolving debt and your grace period vanishes.
                Every new purchase starts accruing interest immediately. The 0%
                window was never meant for people who need it most.
              </p>
            </RevealOnScroll>
            <RevealOnScroll className="expose-card">
              <div className="card-stat">South Dakota</div>
              <h4>
                Why your card agreement says a state you&apos;ve never visited
              </h4>
              <p>
                In 1980, South Dakota eliminated its usury cap to attract
                Citibank&apos;s credit card operations. Your card agreement is
                governed by that state&apos;s laws — specifically because your
                state&apos;s consumer protections don&apos;t apply.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </div>

      {/* ═══ POWER IMBALANCE ═══ */}
      <div className="power-section">
        <div className="section-kicker">The imbalance</div>
        <h2 className="section-heading">
          The banks have lobbyists. <em>Now you have Usury.</em>
        </h2>
        <p className="section-body">
          The financial system was designed by the people who profit from it.
          Every rule, every default setting, every piece of fine print exists to
          tilt the table in their favor. Usury tilts it back.
        </p>

        <div className="power-grid">
          <RevealOnScroll className="power-them">
            <div className="power-label">What they have</div>
            <div className="power-item">
              <span>Lobbyists in Washington</span>
              <strong>2,800+</strong>
            </div>
            <div className="power-item">
              <span>Annual lobbying spend</span>
              <strong>$950M</strong>
            </div>
            <div className="power-item">
              <span>Full-time lawyers</span>
              <strong>Thousands</strong>
            </div>
            <div className="power-item">
              <span>Data scientists modeling your behavior</span>
              <strong>Entire teams</strong>
            </div>
            <div className="power-item">
              <span>Pages in your card agreement</span>
              <strong>30+</strong>
            </div>
            <div className="power-item">
              <span>Years of regulatory capture</span>
              <strong>Since 1978</strong>
            </div>
          </RevealOnScroll>
          <RevealOnScroll className="power-you">
            <div className="power-label">What you have now</div>
            <div className="power-item">
              <span>Real-time visibility into every charge</span>
              <strong>Usury</strong>
            </div>
            <div className="power-item">
              <span>Your true interest cost calculated</span>
              <strong>Usury</strong>
            </div>
            <div className="power-item">
              <span>Optimized payoff strategy</span>
              <strong>Usury</strong>
            </div>
            <div className="power-item">
              <span>Early warning before you fall behind</span>
              <strong>Usury</strong>
            </div>
            <div className="power-item">
              <span>The math they hoped you&apos;d never do</span>
              <strong>Usury</strong>
            </div>
            <div className="power-item">
              <span>A name for what they&apos;re doing to you</span>
              <strong>Usury</strong>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* ═══ HISTORY TIMELINE ═══ */}
      <div className="history-section" id="history">
        <div className="history-inner">
          <div className="section-kicker">A history of usury</div>
          <h2 className="section-heading">
            Banned for 4,000 years. <em>Legal since 1978.</em>
          </h2>
          <p className="section-body">
            What your credit card company does to you has a name. Every major
            civilization in history knew it — and outlawed it.
          </p>

          <div className="timeline">
            <RevealOnScroll className="timeline-item">
              <div className="timeline-year">1754 BC</div>
              <h4>Code of Hammurabi</h4>
              <p>
                One of the earliest legal codes in human history capped interest
                rates on grain loans at 33% and silver at 20%. Violations were
                punishable by law.
              </p>
            </RevealOnScroll>
            <RevealOnScroll className="timeline-item">
              <div className="timeline-year">325 AD</div>
              <h4>Council of Nicaea</h4>
              <p>
                The Christian church formally banned clergy from charging
                interest. By the medieval period, usury was classified as a
                mortal sin — worse than theft, because it exploited time itself.
              </p>
            </RevealOnScroll>
            <RevealOnScroll className="timeline-item">
              <div className="timeline-year">~600 AD</div>
              <h4>The Quran</h4>
              <p>
                Islam prohibited riba (usury) in absolute terms. The Quran
                equates those who charge excessive interest with those who have
                been &ldquo;touched by Satan.&rdquo; Islamic finance still
                operates on this principle today.
              </p>
            </RevealOnScroll>
            <RevealOnScroll className="timeline-item">
              <div className="timeline-year">1545</div>
              <h4>English Usury Act</h4>
              <p>
                England legalized interest but capped it at 10%. The cap
                gradually lowered over centuries. The principle: lending is
                acceptable, exploitation is not.
              </p>
            </RevealOnScroll>
            <RevealOnScroll className="timeline-item">
              <div className="timeline-year">1978</div>
              <h4>Marquette v. First Omaha — Everything changes</h4>
              <p>
                The Supreme Court ruled that banks could charge the interest rate
                of the state where they&apos;re headquartered, regardless of
                where the borrower lives. Banks immediately relocated to states
                with no caps. Your 24.8% APR became legal overnight.
              </p>
            </RevealOnScroll>
            <RevealOnScroll className="timeline-item">
              <div className="timeline-year">2026</div>
              <h4>Usury launches</h4>
              <p>
                For the first time, consumers have a tool that shows them exactly
                what the system is extracting — and how to fight back. The
                practice that every civilization banned now has an adversary.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </div>

      {/* ═══ WHO IT'S FOR ═══ */}
      <div className="for-section">
        <div className="section-kicker">Built for the 111 million</div>
        <h2 className="section-heading">
          For people who aren&apos;t in crisis <em>yet</em>
        </h2>
        <p className="section-body">
          Every debt app on the market requires you to be drowning before
          they&apos;ll throw you a rope. Usury is built for the{" "}
          <strong>111 million Americans</strong> carrying revolving balances who
          are current on payments but sinking slowly.
        </p>

        <div className="for-grid">
          <RevealOnScroll className="for-card">
            <div className="for-icon">&#x1F4B3;</div>
            <h4>The minimum-payment payer</h4>
            <p>
              You pay on time every month but the balance never seems to go down.
              That&apos;s not a coincidence — it&apos;s by design. Usury shows
              you why and what to do about it.
            </p>
          </RevealOnScroll>
          <RevealOnScroll className="for-card">
            <div className="for-icon">&#x1F4F1;</div>
            <h4>The statement avoider</h4>
            <p>
              You know you should look at the numbers but you don&apos;t. The
              anxiety of not knowing is actually less painful than knowing —
              until it&apos;s not. Usury makes looking easy.
            </p>
          </RevealOnScroll>
          <RevealOnScroll className="for-card">
            <div className="for-icon">&#x26A1;</div>
            <h4>The &ldquo;I&apos;ll deal with it later&rdquo; person</h4>
            <p>
              You&apos;re not behind. Not yet. But you can feel it creeping.
              Usury catches the trajectory and intervenes before
              &ldquo;later&rdquo; becomes &ldquo;too late.&rdquo;
            </p>
          </RevealOnScroll>
        </div>
      </div>

      {/* ═══ NOT SECTION ═══ */}
      <div className="not-section">
        <RevealOnScroll className="not-inner">
          <h2>
            This is <em>not</em> another budgeting app
          </h2>
          <p>
            We&apos;re not going to tell you to skip the latte. We&apos;re not
            going to gamify your spending. We&apos;re not going to send you
            motivational push notifications.
          </p>
          <p>
            <strong>
              We&apos;re going to show you exactly how much money is being
              extracted from you, by whom, and how to stop it.
            </strong>
          </p>
          <p>That&apos;s it. That&apos;s the app.</p>
        </RevealOnScroll>
      </div>

      {/* ═══ MANIFESTO ═══ */}
      <div className="manifesto">
        <RevealOnScroll>
          <blockquote>
            The banks have lobbyists. The credit card companies have lawyers. The
            system has 4,000 years of momentum.{" "}
            <em>Now you have Usury.</em>
          </blockquote>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="attribution">— The Usury Manifesto</div>
        </RevealOnScroll>
      </div>

      {/* ═══ SOCIAL PROOF ═══ */}
      <div className="proof-section">
        <div className="proof-inner">
          <div className="section-kicker">Early reactions</div>
          <h2 className="section-heading">What the waitlist is saying</h2>

          <div className="proof-grid">
            <RevealOnScroll className="proof-card">
              <div className="proof-quote">
                &ldquo;I had no idea my &lsquo;fixed rate&rsquo; card had been
                charging me 26.99% for eight months. I only found out because of
                a Usury video.&rdquo;
              </div>
              <div className="proof-author">Waitlist member — Texas</div>
            </RevealOnScroll>
            <RevealOnScroll className="proof-card">
              <div className="proof-quote">
                &ldquo;I thought I was fine. I make every payment on time. Then I
                calculated how much I&apos;ve paid in interest this year alone. I
                wasn&apos;t fine.&rdquo;
              </div>
              <div className="proof-author">Waitlist member — Florida</div>
            </RevealOnScroll>
            <RevealOnScroll className="proof-card">
              <div className="proof-quote">
                &ldquo;Every other app wanted me to be 90 days behind before
                they&apos;d help. Usury is the first one that treats me like
                I&apos;m worth helping now.&rdquo;
              </div>
              <div className="proof-author">
                Waitlist member — California
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>

      {/* ═══ FINAL CTA ═══ */}
      <div className="final-cta" id="waitlist">
        <div className="final-cta-inner">
          <div className="section-kicker">Join the fight</div>
          <h2>
            Your lender already knows these numbers.{" "}
            <em>Now you will&nbsp;too.</em>
          </h2>
          <p className="cta-sub">
            Usury is launching soon. Join the waitlist to be first to see what
            your debt is really costing you.
          </p>
          <WaitlistForm id="footer-form" />
          <div className="hero-meta" style={{ opacity: 1, animation: "none" }}>
            <span>Free to join</span>
            <span>No spam, ever</span>
            <span>Launching 2026</span>
          </div>
          <p className="closing-line">
            The banks have lobbyists. <em>Now you have Usury.</em>
          </p>
        </div>
      </div>

      {/* ═══ FOOTER ═══ */}
      <footer>
        <div className="footer-inner">
          <div className="footer-left">
            <a href="#" className="footer-logo">
              Usury
            </a>
            <span className="footer-tagline">
              Exposing predatory lending since 2026.
            </span>
          </div>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">TikTok</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </footer>
    </WaitlistProvider>
  );
}
