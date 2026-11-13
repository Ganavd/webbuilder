import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { api } from "../api";

export default function Index() {
  const navigate = useNavigate();


  const [pages, setPages] = useState([]);  // daftar page dari API

  // modal New Page / Edit Page
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null); // null = New Page, isinya page = Edit
  const [form, setForm] = useState({ title: "", slug: "", summary: "" });
  const [formError, setFormError] = useState("");

  // modal Delete
  const [deleting, setDeleting] = useState(null); // null = tertutup, isinya page = tampil

  const userName = Cookies.get("userName") || "User";

  
  const logout = () => {
    Cookies.remove("tokenSaya");
    Cookies.remove("userName");
    navigate("/login");
  };


  const loadPages = async () => {
    const { status, result } = await api("/pages");
    if (status === 401) return logout(); 
    setPages(result.data.pages);
  };

  useEffect(() => {
    loadPages();
  }, []);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const openNew = () => {
    setEditing(null);
    setForm({ title: "", slug: "", summary: "" });
    setFormError("");
    setShowForm(true);
  };

  const openEdit = (page) => {
    setEditing(page);
    setForm({
      title: page.title,
      slug: page.slug,
      summary: page.summary || "",
    });
    setFormError("");
    setShowForm(true);
  };

  const handleSave = async () => {

    const body = editing ? form : { title: form.title, summary: form.summary };
    const path = editing ? `/pages/${editing.slug}` : "/pages";

    const { ok, result } = await api(path, editing ? "PUT" : "POST", body);
    if (!ok) {
      setFormError(result.message || "Gagal menyimpan page.");
      return;
    }
    setShowForm(false);
    loadPages(); // ambil ulang daftar
  };


  const handleDelete = async () => {
    await api(`/pages/${deleting.slug}`, "DELETE");
    setDeleting(null);
    loadPages();
  };

  // ---------- TAMPILAN ----------
  return (
    <>
      <div className="app-layout">
        {/* Navbar */}
        <nav className="navbar">
          <Link to="/pages" className="navbar__brand">
            WelBuilder
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
            <button
              className="btn btn--ghost btn--sm"
              type="button"
              onClick={logout}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1h3v1.5L9.5 4h2V11H1.5V4h2L5 2.5V1z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 7.5L7 9.5l-2-2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
              </svg>
              Logout
            </button>
          </div>
        </nav>

        <main className="app-main">
          <div className="page-container">
            {/* Page Header */}
            <div className="page-header">
              <div className="page-header__left">
                <h1 className="page-title">My Pages</h1>
                <p className="page-subtitle">
                  {pages.length} pages · manage your web content
                </p>
              </div>
              <div>
                <button
                  className="btn btn--primary"
                  type="button"
                  onClick={openNew}
                >
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
                  New Page
                  <span className="kbd">Alt+N</span>
                </button>
              </div>
            </div>

            {/* Pages List: satu blok, diulang dengan map */}
            <div className="pages-grid">
              {pages.map((page) => (
                <div className="page-item" key={page.id}>
                  <div className="page-item__info">
                    <span className="page-item__title">
                      <Link to={`/builder/${page.slug}`}>{page.title}</Link>
                      <span className="page-item__title-arrow">→</span>
                    </span>
                    <div className="page-item__meta">
                      <span className="page-item__slug">/{page.slug}</span>
                      {page.summary && (
                        <span className="page-item__summary">
                          {page.summary}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="page-item__actions">
                    <Link
                      to={`/builder/${page.slug}`}
                      className="btn btn--ghost btn--sm"
                    >
                      Build
                    </Link>
                    <button
                      className="btn btn--ghost btn--sm"
                      type="button"
                      onClick={() => openEdit(page)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn--danger btn--sm"
                      type="button"
                      onClick={() => setDeleting(page)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* MODAL: Create / Edit Page */}
      {showForm && (
        <div className="modal-backdrop">
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-create-title"
          >
            <div className="modal__header">
              <h2 className="modal__title" id="modal-create-title">
                {editing ? "Edit Page" : "New Page"}
              </h2>
              <button
                className="modal__close"
                type="button"
                aria-label="Close"
                onClick={() => setShowForm(false)}
              >
                ✕
              </button>
            </div>

            <div className="modal__body">
              <div className="form-group">
                <label className="form-label" htmlFor="new-title">
                  Title
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="new-title"
                  name="title"
                  placeholder="e.g. Homepage"
                  value={form.title}
                  onChange={handleChange}
                />
              </div>

              {/* Slug hanya muncul saat Edit; saat Create dibuat otomatis oleh server */}
              {editing && (
                <div className="form-group">
                  <label className="form-label" htmlFor="new-slug">
                    Slug
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    id="new-slug"
                    name="slug"
                    placeholder="e.g. homepage"
                    value={form.slug}
                    onChange={handleChange}
                  />
                  <span className="form-hint">Lowercase, no spaces.</span>
                </div>
              )}

              <div className="form-group">
                <label className="form-label" htmlFor="new-summary">
                  Summary <span className="form-hint">(optional)</span>
                </label>
                <textarea
                  className="form-input"
                  id="new-summary"
                  name="summary"
                  placeholder="Brief description of this page…"
                  value={form.summary}
                  onChange={handleChange}
                ></textarea>
              </div>

              {formError && <span className="form-error">{formError}</span>}
            </div>

            <div className="modal__footer">
              <button
                className="btn btn--ghost"
                type="button"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
              <button
                className="btn btn--primary"
                type="button"
                onClick={handleSave}
              >
                Save Page
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: Confirm Delete */}
      {deleting && (
        <div className="modal-backdrop">
          <div
            className="modal confirm-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-delete-title"
          >
            <div className="modal__header">
              <h2 className="modal__title" id="modal-delete-title">
                Delete Page
              </h2>
              <button
                className="modal__close"
                type="button"
                aria-label="Close"
                onClick={() => setDeleting(null)}
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
                Are you sure you want to delete{" "}
                <strong>"{deleting.title}"</strong>?
                <br />
                This action cannot be undone.
              </p>
            </div>

            <div className="modal__footer">
              <button
                className="btn btn--ghost"
                type="button"
                onClick={() => setDeleting(null)}
              >
                Cancel
              </button>
              <button
                className="btn btn--danger"
                type="button"
                onClick={handleDelete}
              >
                Ok, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
