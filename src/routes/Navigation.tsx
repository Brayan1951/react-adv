import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import { RegisterPage, FormikBasicPage, FormikYupPage, FormikComponents, FormikAbstraction } from "../03-forms/pages";

import logo from "../logo.svg";
export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                to={"/register"}
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Register Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/formik-basic"}
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                formik Basic
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/formik-yup"}
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                formik-yup
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/formik-components"}
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                formik-components
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/formik-abstractation"}
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                formik-abstractations
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/formik-basic" element={<FormikBasicPage />} />
          <Route path="/formik-yup" element={<FormikYupPage />} />
          <Route path="/formik-components" element={<FormikComponents />} />
          <Route path="/formik-abstractation" element={<FormikAbstraction />} />
          <Route path="/*" element={<Navigate to={"/formik-abstractation"} replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
