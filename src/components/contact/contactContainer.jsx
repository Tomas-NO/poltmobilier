import "./contactContainer.scss";

export const ContactContainer = () => {
  return (
    <div>
      <div className="sector-contacto seccion">
        <div className="sector-contacto__contacto">
          <i className="fab fa-whatsapp"></i>
          <h3>Whatsapp</h3>
          <a href="https://wa.me/541169791816">1169791816</a>
        </div>
        <div className="sector-contacto__contacto">
          <i className="far fa-envelope"></i>
          <h3>Email</h3>
          <a href="mailto:tomasnolivera@gmail.com">tomasnolivera@gmail.com</a>
        </div>
        <div className="sector-contacto__contacto">
          <i className="fas fa-phone"></i>
          <h3>Teléfono</h3>
          <a href="tel:+541169791816">1169791816</a>
        </div>
      </div>
      {/* <!--Iconos de Contacto--> */}

      <div className="seccion">
        <div className="formulario-contacto">
          <form action="" method="POST">
            <h3>Formulario de Contacto</h3>
            <input type="text" name="nombre" placeholder="Nombre" />
            <input type="email" name="email" placeholder="Email" />
            <input type="tel" name="telefono" placeholder="Teléfono" />
            <div className="formulario-contacto__forma-de-contacto">
              <p>Elija la forma en la que desea que nos contactemos:</p>
              <select name="forma-contacto" className="cursor-pointer">
                <option value="llamada">Llamada</option>
                <option value="wpp">Whatsapp</option>
                <option value="mail">Email</option>
              </select>
            </div>
            <label for="newsletter">Suscribirse al Newsletter:</label>
            <input
              type="checkbox"
              name="newsletter"
              value="1"
              id="checkbox"
              className="cursor-pointer"
            />
            <p>Si tiene alguna duda o comentario expreselo a continuación:</p>
            <textarea
              name="mensaje"
              id="mensaje"
              cols="30"
              rows="10"
              placeholder="Mensaje"
            ></textarea>
            <input
              type="reset"
              value="Resetear"
              className="btn cursor-pointer"
              id="resetear"
            />
            <input
              type="submit"
              value="Enviar"
              className="btn cursor-pointer"
              id="enviar"
            />
          </form>
        </div>
        {/* <!--Formulario de Contacto--> */}
        <div className="mapa">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20007.184832815055!2d-58.572982436658705!3d-34.44102367673426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca56fbdcf472f%3A0xf8c4963b3c6a198e!2sAv.%20Sobremonte%20491%2C%20B1646AHI%20San%20Fernando%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1601581073612!5m2!1ses-419!2sar"
            width="600"
            height="450"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
        {/* <!--Mapa--> */}
      </div>
    </div>
  );
};
