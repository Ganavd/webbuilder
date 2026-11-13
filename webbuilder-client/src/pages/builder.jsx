import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { api } from "../api";

export default function Builder() {


  const [newSections, setnewSections] = useState([
    'title',
    'template_id',
  ])

  const [Templates, setTemplates] = useState([])

  const [formSections, setformSections] = useState([])  
  const [Pages, setPages] = useState()
  const [openSections, setopenSections] = useState(null)
  const [LoadEror, setLoadEror] = useState("")


  const navigation = useNavigate();
  const { slug } = useParams();
  const [Popup, setPopup] = useState(false);
  const userName = Cookies.get("userName") || "User";

  const Logout = () => {
      Cookies.remove("tokenSaya");
      Cookies.remove("userName");
      navigation("/login");
      
  }

  const handleChange = (e) => {
      setnewSections( {
        ...newSections,
        [e.target.name] : e.target.value
      });
  };


  const addSections = async () => {
      const { ok, result } = await api
      (`/pages/${slug}/sections`,
        "POST",
        {
          "title" : newSections.title,
          "template_id" : Number(newSections.template_id)
        }
      );

      if (!ok) {
        setLoadingEror(result.message || "Gagal menambahkan section.");
        return;
      }

      setformSections((daftarLama) => [
        ...daftarLama,
        result.data.sections,
      ]);
      setnewSections({ title: "", template_id: "" });


  }

  const LoadSections = async () => {
      const {status: pageStatus, result: pageResult } = await api(`/pages/${slug}`);

      if (pageStatus === 401) return Logout();
      if (!pageResult.success) {
          setLoadEror(pageResult.message || "Gagal memuat halaman.");
          return;
      }
      setPages(pageResult.data);

      const { status: sectionsStatus, result: sectionsResult } = await api(`/pages/${slug}/sections`);
      if (sectionsStatus === 401) return Logout();
      if (!sectionsResult.success) {
          setLoadEror(sectionsResult.message || "Gagal memuat sections.");
          return;
      }

      setformSections(sectionsResult.data.sections);


      setLoadEror("");

  }

  useEffect(() => {
    LoadSections();
    

    const loadTemplate = async () => {
      const { result } = await api 
      ("/templates");
      setTemplates(result.data.templates);
    }

    loadTemplate();
  }, [slug])
  
  




  return (
    <>
      <div className="app-layout">
        {/*  Navbar */}
        <nav className="navbar">
          <Link to="pages.html" className="navbar__brand">
          </Link>
          <div className="navbar__actions">
            <button
              className="navbar__menu-toggle"
              type="button"
              aria-label="Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <button className="btn btn--ghost btn--sm" type="button">
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="6.5"
                  cy="4.5"
                  r="2.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M1 12c0-2.485 2.462-4.5 5.5-4.5S12 9.515 12 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
              </svg>
              {userName}
            </button>
            <button className="btn btn--ghost btn--sm" type="button" onClick={Logout}>
              Logout
            </button>
          </div>
        </nav>

        <div className="app-main">
          <div className="builder-layout">
            {/* MAIN CANVAS ── */}
            <div className="builder-main">
              {/* Toolbar */}
              <div className="builder-toolbar">
                <div className="builder-toolbar__left">
                  <div className="builder-breadcrumb">
                    <Link to="/pages">Pages</Link>
                    <span>→</span>
                    <span>{Pages?.title ?? "Memuat..."}</span>
                  </div>
                  <div className="builder-toolbar__divider"></div>
                  <span className="tag">{formSections.length}</span>
                </div>
                <div className="navbar__actions">
                  <a href="preview.html" className="btn btn--primary btn--sm">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.5 1v11M1 6.5h11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="square"
                      />
                    </svg>
                    Add Section
                  </a>
                  <Link to="/preview" className="btn btn--ghost btn--sm">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6.5C1 6.5 3 2 6.5 2S12 6.5 12 6.5 10 11 6.5 11 1 6.5 1 6.5z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="6.5"
                        cy="6.5"
                        r="1.75"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                    Preview
                  </Link>
                </div>
              </div>

              {/*  Canvas */}
              <div className="builder-canvas">

              {formSections.map (( sections, index) => {
                const isOpen = openSections === sections.id;

                return (
                  
                <div key={sections.id}
                className={`field-editor ${isOpen ? "field-editor--open" : ""}`}>

                  <div className="field-editor__header">
                    <div>
                      <div className="field-editor__title">
                        <span className="tag">
                          {String(sections.position ?? index + 1).padStart(2, "0")}
                        </span>
                        &nbsp; {sections.name}
                      </div>
                      <div className="field-editor__meta">
                        template ID : {sections.template_id}
                      </div>




                      
                    </div>



                    <div className="field-editor__toggle">
                      <button 
                      type="button"
                      className="field-editor__toggle"
                      onClick={() => setopenSections (isOpen ? null : sections.id)}
                      >
                      <span>{isOpen ? "Collapse" : "Expand"}</span>
                      <svg
                        className="field-editor__chevron"
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1l5 5 5-5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="square"
                        />
                      </svg>
                      </button>
                    </div>
                  </div>


                  {isOpen && (
                    <>
                    

                  <div className="field-editor__body">
                    <div className="form-group">
                      <label className="form-label" htmlFor="f-hero-title">
                        Heading
                      </label>
                      <input
                        className="form-input"
                        type="text"
                        id="f-hero-title"
                        placeholder="Enter heading text…"
                        defaultValue="Build Beautiful Pages, Fast."
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="f-hero-subtitle">
                        Subtitle
                      </label>
                      <input
                        className="form-input"
                        type="text"
                        id="f-hero-subtitle"
                        placeholder="Enter subtitle text…"
                        defaultValue="The visual page builder htmlFor modern teams."
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="f-hero-cta">
                        Button Label
                      </label>
                      <input
                        className="form-input"
                        type="text"
                        id="f-hero-cta"
                        placeholder="e.g. Get Started"
                        defaultValue="Get Started"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="f-hero-image">
                        Background Image URL
                      </label>
                      <input
                        className="form-input"
                        type="url"
                        id="f-hero-image"
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>
                  </div>
                  <div className="field-editor__footer">
                    <div className="shortcuts-hint">
                      <span className="kbd">Esc</span> to close
                    </div>
                    <div className="field-editor__footer-actions">
                      <button className="btn btn--ghost btn--sm" type="button">
                        Discard
                      </button>
                      <button
                        className="btn btn--primary btn--sm"
                        type="button"
                        >
                        Save
                      </button>
                    </div>
                  </div>

                  </>
                )}


                </div>
             )})}


                {/* Add Section inline panel */}
                <div className="add-section-panel">
                  <div className="add-section-panel__header">
                    <span className="add-section-panel__title">
                      Add Section
                    </span>
                    <button
                      className="btn btn--ghost btn--sm btn--icon"
                      type="button"
                    >
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1l9 9M10 1L1 10"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="square"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="form-wrap">
                    <div className="form-group" style={{ flex: 1 }}>
                      <label className="form-label" htmlFor="section-name">
                        Section Name
                      </label>
                      <input
                        type="text"
                        className="form-input"
                        id="section-name"
                        placeholder="Hero 1"
                        name="title"
                        value={newSections.title}
                        onChange={handleChange}
                      />
                    </div>



                    <div className="form-group" style={{ flex: 1 }}>
                      <label className="form-label" htmlFor="section-template">
                        Section Template
                      </label>
                      <select
                        className="form-input"
                        id="section-template"
                        name="template_id"
                      >
                        { Templates.map ( (template) => (

                          
                          <option key={template.id} value={template.id}>
                            {template.slug} - {template.title}
                          </option>
                          
                        ))}

                      </select>
                    </div>
                    <button
                      className="btn btn--primary"
                      type="button"
                      style={{ alignSelf: "flex-start" }}
                    >
                      Add
                    </button>
                  </div>
                </div>

              </div>
            
            {/* /canvas */}
            </div>
            {/* /builder-main */}
            </div>
            </div>
              
              {/* MODAL: Confirm Remove Section */}

        {Popup && (
          <div className="modal-backdrop">
            <div
              className="modal confirm-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-remove-title"
            >
              <div className="modal__header">
                <h2 className="modal__title" id="modal-remove-title">
                  Remove Section
                </h2>
                <button
                  className="modal__close"
                  type="button"
                  aria-label="Close"
                  onClick={() => setPopup(false)}
                >
                  ✕
                </button>
              </div>

              <div className="modal__body">
                <div className="confirm-dialog__icon">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 4v7"
                      stroke="#c0392b"
                      strokeWidth="2"
                      strokeLinecap="square"
                    />
                    <circle cx="11" cy="16" r="1" fill="#c0392b" />
                    <path
                      d="M3 19L11 3l8 16H3z"
                      stroke="#c0392b"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <p className="confirm-dialog__text">
                  Remove <strong>"Hero Section"</strong> from this page?
                  <br />
                  This action cannot be undone.
                </p>
              </div>
              <div className="modal__footer">
                <button
                  className="btn btn--ghost"
                  type="button"
                  onClick={() => setPopup(false)}
                >
                  Cancel
                </button>

                <button className="btn btn--danger" type="button">
                  Ok, Remove
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
