import React from "react";


export default function SideMenu() {
  return (
    
      <div className="col-12 col-sm-3 col-xl-2 px-sm-2 px-0 bg-light d-flex sticky-top">
        <div className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white">
          <ul
            className="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start mt-5"
            id="menu"
          >
            <li className="nav-item">
              <a
                href="FORMULARIO HOUSE/index.html"
                className="nav-link px-sm-0 px-2 text-white text-decoration-none "
              >
                <span className="ms-1 d-none d-sm-inline">
                  Cadastrar Cliente
                </span>
              </a>
              <a
                href="/"
                className="nav-link px-sm-0 px-2 text-white text-decoration-none"
              >
                <span className="ms-1 d-none d-sm-inline">Histórico</span>
              </a>
              <a
                href="/"
                className="nav-link px-sm-0 px-2 text-white text-decoration-none"
              >
                <span className="ms-1 d-none d-sm-inline">Meu Perfil</span>
              </a>
            </li>

            <div className="user px-3 py-sm-5">
              <img
                className="user-avatar"
                src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/profile-icon.png"
                alt="perfil"
              />
              <h3 className="py-2 px-3">ADMIN</h3>
            </div>
          </ul>
          <div id="dropdown" className="dropdown px-3">
            <button
              className="btn btn-primary dropdown-toggle "
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              FERRAMENTAS
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="FORMULARIO HOUSE/index.html">
                  Cadastrar Cliente
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Histórico
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Meu Perfil
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown py-sm-2 mt-sm-auto ms-auto ms-sm-1 flex-shrink-1">
            <a
              href="../index.html"
              className="d-flex align-items-center text-white text-decoration-none"
            >
              <i className="text-warning fs-5 bi bi-box-arrow-in-right me-2"></i>
              <span className="d-none d-sm-inline mx-1 ms-2">Sair</span>
            </a>
          </div>
        </div>
      </div>
    
  );
}
