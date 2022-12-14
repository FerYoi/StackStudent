import styled from "styled-components";

import LogoImg from "../img/udemy-2-logo.png";

const Footer = () => {
  return (
    <StyledFooter>
      <div className='footer-links'>
        <div className='links-left'>
          <div className='main-links'>
            <a href='http://www.utn.edu.mx/'>UTN Inicio</a>
            <a href='http://siienet.utn.edu.mx/paginas/alumnos/frminiciosesionalumno.php'>SIENET</a>
            <a href='https://es-la.facebook.com/OficialUTN/'>Facebook UTN</a>
            <a href='http://www.utn.edu.mx/acerca_de_la_utn/index.html'>Acerca de la UTN</a>
          </div>
       
        </div>
      </div>

      <div className='copy-right'>
        <img src={LogoImg} alt='Logo' className='logo' />
        <p>&copy; 2022 Hertec</p>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;

  .footer-links {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 1rem 3rem;
    margin-top: 1rem;
  }

  .links-left {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8rem;

    a {
      display: block;
      text-decoration: none;
      padding-bottom: 1rem;
      color: #1b3bdf;
      font-size: 0.82rem;

      &:hover {
        color: #1b3bdf;
      }
    }
  }

  .links-right {
    a {
      text-decoration: none;
      color: #666;
      border: 1px solid #666;
      padding: 0.6rem 2rem 0.6rem 1rem;
      border-radius: 5px;

      display: flex;
      justify-content: center;
      align-items: center;

      i {
        padding-right: 0.5rem;
        font-size: 1rem;
      }
    }
  }

  .copy-right {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0rem 3rem 0rem 1.5rem;
    img {
      width: 10rem;
    }

    p {
      font-size: 0.75rem;
      color: #777;
    }
  }

  @media (max-width: 700px) {
    .links-left {
      grid-gap: 4rem;

      a {
        font-size: 0.7rem;
      }
    }
  }
  @media (max-width: 500px) {
    .footer-links {
      display: flex;
      flex-direction: column;
    }
    .links-left {
      grid-gap: 2rem;
      display: flex;
      flex-direction: column;

      a {
        font-size: 0.9rem;
      }
    }

    .links-right {
      margin-top: 1rem;
    }
  }
`;

export default Footer;
