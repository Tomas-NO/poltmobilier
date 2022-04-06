import "./navbar.scss";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  $(document).ready(function () {
    $("#menu_on").click(function () {
      // Al hacer click...
      $("body").toggleClass("visible_menu"); // Añadimos o eliminamos la clase 'visible_menu' al body
    });
  });
  $(document).ready(function () {
    $("#productos").click(function () {
      // Al hacer click...
      $("#icono-productos").toggleClass("rotacion-icono"); // Añadimos o eliminamos la clase 'visible_menu' al body
    });
  });
  return (
    <header>
      <div className="barra-header fixed-top">
        <div className="header-superior">
          <div className="logo">
            <NavLink exact to={`/`}>
              <img
                className="logo"
                src={
                  "https://firebasestorage.googleapis.com/v0/b/poltmobilier-5a060.appspot.com/o/Logo.png?alt=media&token=626b5381-28f0-4d83-a41e-e716588864b5"
                }
                alt="Logo"
              />
            </NavLink>
          </div>
          <div className="redes-sociales">
            <a
              href="https://www.instagram.com/poltmobiliermuebles/"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/poltmobiliermuebles/"
              target="_blank"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
            <a
              href="https://ar.pinterest.com/poltmobiliermuebles/_created/"
              target="_blank"
            >
              <i className="fab fa-pinterest"></i>
            </a>
            <a href="https://wa.me/541169791816" target="_blank">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
          {/* <!--Redes Sociales--> */}
        </div>
        {/* <!--Header Superior--> */}

        <div className="menu-principal">
          <div id="wrapper" className="menu-mobile">
            <div className="icono-mobile">
              <a id="menu_on">
                <span></span>
                <span></span>
                <span></span>
              </a>
            </div>

            <nav className="navegacion-mobile">
              <ul>
                <li>
                  <NavLink exact to={`/`} className="nav-link">
                    Inicio
                  </NavLink>
                </li>
                <li>
                  <a
                    id="productos"
                    data-toggle="collapse"
                    data-target="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Productos
                    <i id="icono-productos" className="fas fa-sort-down"></i>
                  </a>
                  <ul className="collapse" id="collapseExample">
                    <li>
                      <NavLink exact to={`/productos`}>
                        Ver todos los Productos
                      </NavLink>{" "}
                    </li>
                    <li>
                      <NavLink exact to={`/productos/bibliotecas`}>
                        Bibliotecas
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to={`/productos/camas`}>
                        Camas
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to={`/productos/escritorios`}>
                        Escritorios
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink exact to={`/a-medida`}>
                    Muebles a Medida
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to={`/nosotros`}>
                    Nosotros
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to={`/contacto`}>
                    Contacto
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className="nav-principal">
            <nav>
              <ul>
                <NavLink exact to={`/`}>
                  <Inicio></Inicio>
                </NavLink>
                <li>
                  <NavLink exact to={`/contacto`}>
                    Productos
                  </NavLink>
                  <ul>
                    <li>
                      <NavLink exact to={`/productos/bibliotecas`}>
                        Bibliotecas
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to={`/productos/bibliotecas`}>
                        Camas
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to={`/productos/bibliotecas`}>
                        Escritorios
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink exact to={`/a-medida`}>
                    Muebles a Medida
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to={`/nosotros`}>
                    Nosotros
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to={`/contacto`}>
                    Contacto
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="buscador">
            <input
              type="search "
              id="buscador "
              name="buscador "
              placeholder="Buscar: "
            />
          </div>
          {/* <!--Buscador--> */}
        </div>
        {/* <!--Menú Principal--> */}
      </div>
      {/* <!--Barra Header--> */}
    </header>
  );
};
