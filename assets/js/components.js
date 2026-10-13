/* ==========================================================================
   Central Portfolio Configuration
   ========================================================================== */
const PORTFOLIO_CONFIG = {
  authorName: "Saksham Bhatnagar",
  email: "bhatnagarsaksham50@proton.me", 
  githubUrl: "https://github.com/sakshambhatnagar02", 
  gravatarUrl: "https://gravatar.com/sakshambhatnagar",
  activeYear: "2026"
};

/* ==========================================================================
   Lifecycle Initialization
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  setupContactFormHandler();
  initScrollAnimations();
  setupFloatingBackToTop();
});

/* ==========================================================================
   Strict Route / Active Page Detection
   ========================================================================== */
function getActivePage() {
  const pathname = window.location.pathname.toLowerCase().replace(/\/$/, "");

  if (pathname.endsWith("/about.html") || pathname.endsWith("/about")) return "about";
  if (pathname.endsWith("/projects.html") || pathname.endsWith("/projects")) return "projects";
  if (pathname.endsWith("/contact.html") || pathname.endsWith("/contact")) return "contact";

  // Defaults to home for root '/', '/index.html', or repository root directory
  return "home";
}

/* ==========================================================================
   Header Component
   ========================================================================== */
function renderHeader() {
  const headerContainer = document.getElementById("header-root");
  if (!headerContainer) return;

  const active = getActivePage();

  headerContainer.innerHTML = `
    <header id="site-header">
      <div class="container nav-wrapper">
        <a href="index.html" class="brand-logo" aria-label="Saksham Bhatnagar Portfolio">
          <i class="fa-solid fa-terminal"></i>
          <span>Saksham<span style="color: var(--sky-light);">.dev</span></span>
        </a>
        <button class="menu-toggle" id="menuToggle" aria-label="Toggle navigation menu">
          <i class="fa-solid fa-bars"></i>
        </button>
        <ul class="nav-links" id="navMenu">
          <li><a href="index.html" class="nav-link ${active === 'home' ? 'active' : ''}"><i class="fa-solid fa-house"></i> Home</a></li>
          <li><a href="about.html" class="nav-link ${active === 'about' ? 'active' : ''}"><i class="fa-solid fa-user"></i> About & Skills</a></li>
          <li><a href="projects.html" class="nav-link ${active === 'projects' ? 'active' : ''}"><i class="fa-solid fa-layer-group"></i> Projects</a></li>
          <li><a href="contact.html" class="nav-link ${active === 'contact' ? 'active' : ''}"><i class="fa-solid fa-paper-plane"></i> Contact</a></li>
        </ul>
      </div>
    </header>
  `;

  // Mobile menu toggle logic
  const toggleBtn = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      const isOpen = navMenu.classList.contains("open");
      toggleBtn.innerHTML = isOpen 
        ? '<i class="fa-solid fa-xmark"></i>' 
        : '<i class="fa-solid fa-bars"></i>';
    });
  }
}

/* ==========================================================================
   Footer Component
   ========================================================================== */
function renderFooter() {
  const footerContainer = document.getElementById("footer-root");
  if (!footerContainer) return;

  footerContainer.innerHTML = `
    <footer id="site-footer">
      <div class="container footer-grid">
        <!-- Col 1: Brand & Personal Background -->
        <div class="footer-col footer-brand-col">
          <a href="index.html" class="brand-logo" style="margin-bottom: 0.8rem; display: inline-flex;">
            <i class="fa-solid fa-terminal"></i>
            <span>Saksham<span style="color: var(--sky-light);">.dev</span></span>
          </a>
          <p style="color: var(--silver); font-size: 0.9rem; line-height: 1.6; max-width: 320px;">
            Student & Web Developer. Class 12 Non-Medical preparing for JEE at IITian Classes, Bathinda. Hailing from Gurdaspur, India <span class="fi fi-in"></span>.
          </p>
        </div>

        <!-- Col 2: Navigation Links -->
        <div class="footer-col">
          <h4 class="footer-heading">Navigation</h4>
          <ul class="footer-links">
            <li><a href="index.html"><i class="fa-solid fa-chevron-right"></i> Home</a></li>
            <li><a href="about.html"><i class="fa-solid fa-chevron-right"></i> About & Skills</a></li>
            <li><a href="projects.html"><i class="fa-solid fa-chevron-right"></i> Projects</a></li>
            <li><a href="contact.html"><i class="fa-solid fa-chevron-right"></i> Contact</a></li>
          </ul>
        </div>

        <!-- Col 3: Highlights & External Links -->
        <div class="footer-col">
          <h4 class="footer-heading">Highlights</h4>
          <ul class="footer-links">
            <li><a href="https://gplmods.webredirect.org" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i> GPLMods</a></li>
            <li><a href="https://gamingnetindia.github.io/pocketclassics/" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-gamepad"></i> Pocket Classics</a></li>
            <li><a href="https://www.iitiansclasses.com/" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-graduation-cap"></i> IITian Classes</a></li>
            <li><a href="${PORTFOLIO_CONFIG.githubUrl}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i> Open Source Repos</a></li>
          </ul>
        </div>

        <!-- Col 4: Connect & Socials -->
        <div class="footer-col">
          <h4 class="footer-heading">Connect</h4>
          <p style="color: var(--silver); font-size: 0.85rem; margin-bottom: 1rem;">
            Feel free to reach out for collaborations, inquiries, or tech discussions.
          </p>
          <div class="social-links">
            <a href="${PORTFOLIO_CONFIG.githubUrl}" target="_blank" rel="noopener noreferrer" class="social-link" title="GitHub Profile">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="${PORTFOLIO_CONFIG.gravatarUrl}" target="_blank" rel="noopener noreferrer" class="social-link" title="Gravatar Profile">
              <img src="assets/img/gravatar.svg" alt="Gravatar" class="social-svg-icon">
            </a>
            <a href="mailto:${PORTFOLIO_CONFIG.email}" class="social-link" title="Send Direct Email">
              <i class="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="container footer-bottom">
        <p>&copy; ${PORTFOLIO_CONFIG.activeYear} ${PORTFOLIO_CONFIG.authorName} &bull; Built with precision and code.</p>
        <p style="color: var(--text-secondary); font-size: 0.85rem;">Class 12 Non-Medical &bull; Web & Application Developer</p>
      </div>
    </footer>
  `;
}

/* ==========================================================================
   Contact Form Redirect Handler (Mailto Trigger)
   ========================================================================== */
function setupContactFormHandler() {
  const form = document.getElementById("portfolio-contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("form-name").value.trim();
    const senderEmail = document.getElementById("form-email").value.trim();
    const userMessage = document.getElementById("form-message").value.trim();

    if (!name || !senderEmail || !userMessage) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const bodyContent = encodeURIComponent(
      `Hello Saksham,\n\nYou have received a new message from your portfolio contact form:\n\n` +
      `Name: ${name}\n` +
      `Email: ${senderEmail}\n\n` +
      `Message:\n${userMessage}\n\n` +
      `Sent via Saksham.dev Portfolio Form`
    );

    // Automatically launches the user's default email client
    window.location.href = `mailto:${PORTFOLIO_CONFIG.email}?subject=${subject}&body=${bodyContent}`;
  });
}

/* ==========================================================================
   Scroll Reveal Animations
   ========================================================================== */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(".animate-reveal");
  if (!animatedElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  animatedElements.forEach((el) => observer.observe(el));
}

/* ==========================================================================
   Floating Back-to-Top Overlay Component
   ========================================================================== */
// Floating Back-to-Top Overlay with tap animation & auto-reset
function setupFloatingBackToTop() {
  if (document.getElementById("floatingBackToTop")) return;

  const btn = document.createElement("button");
  btn.id = "floatingBackToTop";
  btn.className = "floating-back-to-top";
  btn.setAttribute("aria-label", "Scroll back to top");
  btn.innerHTML = `<i class="fa-solid fa-arrow-up"></i>`;
  document.body.appendChild(btn);

  // Reveals overlay when scrolled past 250px
  window.addEventListener("scroll", () => {
    if (window.scrollY > 250) {
      btn.classList.add("is-visible");
    } else {
      btn.classList.remove("is-visible");
    }
  }, { passive: true });

  // On Tap / Click: Changes color immediately, scrolls up, and automatically resets
  btn.addEventListener("click", () => {
    // 1. Immediately flash active color & glow
    btn.classList.add("tapped");

    // 2. Smoothly scroll to the top
    window.scrollTo({ top: 0, behavior: "smooth" });

    // 3. Automatically reset color back to normal after 400ms
    setTimeout(() => {
      btn.classList.remove("tapped");
      btn.blur();
    }, 400);
  });
}