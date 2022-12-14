import LogoImg from "../img/student-logo.png";

import styled from "styled-components";

const Logo = () => {
  return (
    <StyledLogo>
      <a href='/'>
        <img src={LogoImg} alt='logo' />
      </a>
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  img {
    width: 9.2rem;
  }
`;

export default Logo;
