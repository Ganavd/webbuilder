import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import { api } from "../api";

// Ikon kecil untuk pesan error (dipakai ulang)
function ErrorIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6.5" cy="6.5" r="5.5" stroke="#c0392b" strokeWidth="1.5" />
      <path
        d="M6.5 4v3"
        stroke="#c0392b"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
      <circle cx="6.5" cy="9" r="0.7" fill="#c0392b" />
    </svg>
  );
}

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState(
    { email: "",
      password: "" 
    });


  const [error, setError] = useState("");


  const [loading, setLoading] = useState(false);


  // (kunci state = atribut name)
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  // Dipanggil saat tombol Sign In diklik ATAU Enter ditekan
  const handleSubmit = async (e) => {
    e.preventDefault();  // cegah halaman memuat ulang
    setLoading(true); 
    setError("");


    const { ok, result } = await api("/login", "POST", form);
    if (!ok) {
      setError(result.message || "Login gagal.");
      return;
    }

    Cookies.set("tokenSaya", result.data.token);
    Cookies.set("userName", result.data.user.name);
    navigate("/pages");
  };


  return (
    <div className="auth-panel">
      <div className="auth-card">
        <div className="auth-card__header">
          <h1 className="auth-card__title">Sign In</h1>
          <p className="auth-card__subtitle">
            Enter your credentials to continue
          </p>
        </div>

        {/* div.auth-card__body diganti form dengan class yang sama */}
        <form className="auth-card__body" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email Address
            </label>
            <input
              className="form-input"
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className={"form-input" + (error ? " form-input--error" : "")}
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              autoComplete="current-password"
              value={form.password}
              onChange={handleChange}
            />
            {error && (
              <span className="form-error">
                <ErrorIcon />
                {error}
              </span>
            )}
          </div>

          <button className="btn btn--primary btn--full" type="submit" disabled={loading}>
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className="auth-card__footer">
          <span>Don't have an account?</span>
          <Link to="/register">Create one</Link>
        </div>
      </div>
    </div>
  );
}
