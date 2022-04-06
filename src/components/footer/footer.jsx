import "./footer.scss";
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-arriba">
        <nav className="menu-footer">
          <ul>
            <li>
              <Link to={`/`}>Inicio</Link>
            </li>
            <li>
              <Link to={`/productos`}>Productos</Link>
            </li>
            <li>
              <Link to={`/a-medida`}>Muebles a Medida</Link>
            </li>
            <li>
              <Link to={`/nosotros`}>Sobre Nosotros</Link>
            </li>
            <li>
              <Link to={`/contacto`}>Contacto</Link>
            </li>
          </ul>
        </nav>
        {/* Menú Footer */}
        <div className="newsletter">
          <form action="" method="POST">
            <h3>Newsletter</h3>
            <p>Recibí todas las ofertas y nuevos productos</p>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              className="newsletter-campos"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="newsletter-campos"
            />
            <input type="submit" value="Anotarse " className="btn anotarse" />
          </form>
        </div>
        {/* Newsletter */}
        <div className="sigamos-conectados">
          <div>
            <h3>Sigamos conectados</h3>
          </div>
          <div className="redes-sociales">
            <a
              href="https://www.instagram.com/poltmobiliermuebles/ "
              target="_blank "
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/poltmobiliermuebles/ "
              target="_blank "
            >
              <i className="fab fa-facebook-square"></i>
            </a>
            <a
              href="https://ar.pinterest.com/poltmobiliermuebles/_created/ "
              target="_blank "
            >
              <i className="fab fa-pinterest"></i>
            </a>
            <a href="https://wa.me/541169791816 " target="_blank ">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
          {/* Redes Sociales */}
          <div className="contactos-footer">
            <div className="contacto-footer">
              <a href="tel:+541169791816 ">
                <i className="fas fa-phone"></i>
                <p>1169791816</p>
              </a>
            </div>
            <div className="contacto-footer">
              <a href="mailto:tomasnolivera@gmail.com ">
                <i className="far fa-envelope"></i>
                <p>tomasnolivera@gmail.com</p>
              </a>
            </div>
          </div>
          {/* Teléfono y Correo */}
        </div>
      </div>
      {/* Footer Arriba */}
      <div className="copyright">
        <p>
          &copy; Copyright 2020 PoltMobilier, muebles hechos a tu medida. Todos
          los derechos reservados.
        </p>
      </div>
      {/* Copyright */}
    </footer>
  );
};
