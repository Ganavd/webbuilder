import { Link } from 'react-router-dom';


export default function Preview() {

  return (

    <>
      <div className="preview-layout">
        {/*Top bar */}
        <div className="preview-topbar">
          <div className="preview-topbar__info">
            <span className="preview-topbar__badge">Preview</span>
            <span className="preview-topbar__title">Homepage</span>
            <span className="preview-topbar__slug">/homepage</span>
          </div>
          <Link to="/builder" className="btn btn--ghost btn--sm">
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 2L3 6.5 8 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
            Back to Builder
          </Link>
        </div>

        {/*Preview content */}
        <div className="preview-content">
          {/*Section 1: Hero Banner */}
          <div className="preview-section">
            <div className="preview-section__label">
              <span className="preview-section__num">01</span>
              <span className="preview-section__template-name">hero-banner</span>
            </div>
            <div className="preview-section__body">
              <div className="preview-hero">
                <h1 className="preview-hero__title">
                  Build Beautiful Pages, Fast.
                </h1>
                <p className="preview-hero__subtitle">
                  The visual page builder for modern teams. Compose sections,
                  define fields, and publish instantly.
                </p>
                <div>
                  <button className="btn btn--primary" type="button">
                    Get Started
                  </button>
                </div>
                {/*No image URL provided — placeholder shown */}
                <div className="preview-hero__image-placeholder">
                  No image URL provided
                </div>
              </div>
            </div>
          </div>

          {/*Section 2: Feature Grid */}
          <div className="preview-section">
            <div className="preview-section__label">
              <span className="preview-section__num">02</span>
              <span className="preview-section__template-name">feature-grid</span>
            </div>
            <div className="preview-section__body">
              <div className="preview-features">
                <div className="preview-features__heading">Why WelBuilder?</div>
                <div className="preview-features__grid">
                  <div className="preview-feature-card">
                    <div className="preview-feature-card__icon">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1"
                          y="1"
                          width="16"
                          height="16"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M5 9h8M9 5v8"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="square"
                        />
                      </svg>
                    </div>
                    <div className="preview-feature-card__title">
                      Drag &amp; Drop
                    </div>
                    <div className="preview-feature-card__text">
                      Reorder sections visually with intuitive drag-and-drop
                      controls.
                    </div>
                  </div>

                  <div className="preview-feature-card">
                    <div className="preview-feature-card__icon">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="9"
                          cy="9"
                          r="7.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M9 5v4l3 2"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="square"
                        />
                      </svg>
                    </div>
                    <div className="preview-feature-card__title">Live Preview</div>
                    <div className="preview-feature-card__text">
                      See exactly how your page looks before publishing it.
                    </div>
                  </div>

                  <div className="preview-feature-card">
                    <div className="preview-feature-card__icon">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 3h12v12H3z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M6 7h6M6 10h4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="square"
                        />
                      </svg>
                    </div>
                    <div className="preview-feature-card__title">
                      Reusable Templates
                    </div>
                    <div className="preview-feature-card__text">
                      Define section templates once and reuse them across all
                      your pages.
                    </div>
                  </div>

                  <div className="preview-feature-card">
                    <div className="preview-feature-card__icon">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 1l2.5 5 5.5.8-4 3.9.9 5.5L9 13.5l-4.9 2.7.9-5.5-4-3.9L6.5 6z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="preview-feature-card__title">REST API</div>
                    <div className="preview-feature-card__text">
                      Full API access for headless publishing and integrations.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*Section 3: CTA Strip */}
          <div className="preview-section">
            <div className="preview-section__label">
              <span className="preview-section__num">03</span>
              <span className="preview-section__template-name">cta-strip</span>
            </div>
            <div className="preview-section__body">
              <div className="preview-cta">
                <div className="preview-cta__text">
                  Ready to build your first page?
                </div>
                <button className="btn btn--primary" type="button">
                  Start Building →
                </button>
              </div>
            </div>
          </div>

          {/*Section 4: Hero Section */}
          <div className="preview-section">
            <div className="preview-section__label">
              <span className="preview-section__num">04</span>
              <span className="preview-section__template-name">hero</span>
            </div>
            <div className="preview-section__body">
              <div className="preview-hero-section">
                <div className="preview-hero-section__content">
                  <h2 className="preview-hero-section__title">
                    Shape the Future, Today.
                  </h2>
                  <p className="preview-hero-section__subtitle">
                    A bold new starting point for every great idea. Your hero.
                    Your story. Your page.
                  </p>
                  <button className="btn btn--primary" type="button">
                    Explore Now →
                  </button>
                </div>
                <div className="preview-hero-section__image-placeholder">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1"
                      y="1"
                      width="30"
                      height="30"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="10"
                      cy="11"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M1 22l8-7 6 5 5-4 11 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="square"
                    />
                  </svg>
                  <span>background_image</span>
                </div>
              </div>
            </div>
          </div>

          {/*Section 5: About Section */}
          <div className="preview-section">
            <div className="preview-section__label">
              <span className="preview-section__num">05</span>
              <span className="preview-section__template-name">about</span>
            </div>
            <div className="preview-section__body">
              <div className="preview-about">
                <div className="preview-about__image-placeholder">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1"
                      y="1"
                      width="30"
                      height="30"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="10"
                      cy="11"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M1 22l8-7 6 5 5-4 11 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="square"
                    />
                  </svg>
                  <span>image</span>
                </div>
                <div className="preview-about__body">
                  <div className="preview-about__label">About Us</div>
                  <h2 className="preview-about__heading">
                    We build tools that get out of your way.
                  </h2>
                  <p className="preview-about__description">
                    WelBuilder was born from frustration with bloated, opaque
                    content systems. We believe a page builder should be fast,
                    structured, and developer-friendly — without sacrificing the
                    experience for editors and marketers.
                  </p>
                  <a href="#" className="btn btn--ghost btn--sm">
                    Learn more →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/*Section 6: Services Section */}
          <div className="preview-section">
            <div className="preview-section__label">
              <span className="preview-section__num">06</span>
              <span className="preview-section__template-name">services</span>
            </div>
            <div className="preview-section__body">
              <div className="preview-services">
                <div className="preview-services__heading">Our Services</div>
                <div className="preview-services__grid">
                  <div className="preview-service-card">
                    <div className="preview-service-card__icon">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 3h16v16H3z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M7 11h8M11 7v8"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="square"
                        />
                      </svg>
                    </div>
                    <div className="preview-service-card__name">service_1_name</div>
                    <div className="preview-service-card__meta">service_1_icon</div>
                  </div>

                  <div className="preview-service-card">
                    <div className="preview-service-card__icon">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="11"
                          cy="11"
                          r="9"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M11 7v4l3 2.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="square"
                        />
                      </svg>
                    </div>
                    <div className="preview-service-card__name">service_2_name</div>
                    <div className="preview-service-card__meta">service_2_icon</div>
                  </div>

                  <div className="preview-service-card">
                    <div className="preview-service-card__icon">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 2l2.5 6 6.5 1-4.7 4.6 1.1 6.5L11 17l-5.4 3.1 1.1-6.5L2 9l6.5-1z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="preview-service-card__name">service_3_name</div>
                    <div className="preview-service-card__meta">service_3_icon</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*Section 7: Contact Section */}
          <div className="preview-section">
            <div className="preview-section__label">
              <span className="preview-section__num">07</span>
              <span className="preview-section__template-name">contact</span>
            </div>
            <div className="preview-section__body">
              <div className="preview-contact">
                <div className="preview-contact__left">
                  <h2 className="preview-contact__title">Let's Talk</h2>
                  <div className="preview-contact__details">
                    <div className="preview-contact__detail">
                      <div className="preview-contact__detail-icon">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 3h14v10H1z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M1 3l7 6 7-6"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="square"
                          />
                        </svg>
                      </div>
                      <span className="preview-contact__detail-value">
                        hello@welbuilder.io
                      </span>
                    </div>
                    <div className="preview-contact__detail">
                      <div className="preview-contact__detail-icon">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 2h4l1.5 3.5-2 1.5c.9 1.8 2.5 3.4 4.3 4.3l1.5-2L15 10.5V14c0 .6-.4 1-1 1C5.7 15 1 10.3 1 3c0-.6.4-1 1-1z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="preview-contact__detail-value">
                        +1 (800) 555-0100
                      </span>
                    </div>
                  </div>
                </div>
                <div className="preview-contact__map-placeholder">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 3C11 3 7 7 7 12c0 7 9 17 9 17s9-10 9-17c0-5-4-9-9-9z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="16"
                      cy="12"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <span>map_image</span>
                </div>
              </div>
            </div>
          </div>

          {/*Section 8: Footer Section */}
          <div className="preview-section">
            <div className="preview-section__label">
              <span className="preview-section__num">08</span>
              <span className="preview-section__template-name">footer</span>
            </div>
            <div className="preview-section__body">
              <div className="preview-footer">
                <div className="preview-footer__top">
                  <div className="preview-footer__logo-placeholder">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="1"
                        y="1"
                        width="16"
                        height="16"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <rect
                        x="5"
                        y="5"
                        width="8"
                        height="8"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="preview-footer__logo-label">logo_url</span>
                  </div>
                  <div className="preview-footer__socials">
                    <a
                      href="#"
                      className="preview-footer__social-link"
                      aria-label="Instagram"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1"
                          y="1"
                          width="14"
                          height="14"
                          rx="4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <circle
                          cx="8"
                          cy="8"
                          r="3"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <circle cx="12" cy="4" r="1" fill="currentColor" />
                      </svg>
                      <span>instagram_link</span>
                    </a>
                    <a
                      href="#"
                      className="preview-footer__social-link"
                      aria-label="Facebook"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 1H10a4 4 0 00-4 4v2H4v3h2v5h3v-5h2.5L12 7H9V5a1 1 0 011-1h2V1z"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>facebook_link</span>
                    </a>
                  </div>
                </div>
                <div className="preview-footer__bottom">
                  <span className="preview-footer__copyright">
                    © 2025 WelBuilder. All rights reserved.
                  </span>
                  <span className="preview-footer__copyright-label">
                    copyright_text
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/preview-content */}
      </div>

    </>

  );
}
