import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
  font-family: 'Fuzzy Bubbles', cursive;
  font-weight: bold;
  background: var(--mainWhite);
  height: 5rem;
  border-bottom: 2px solid var(--primaryColor);
  box-shadow: var(--lightShadow);
  }
  .nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: var(--smallWidth);
    margin: 0 auto;
    max-width: var(--fullWidth);
  }
  .nav-links {
    display: flex;
    align-items: center;
    margin-bottom: 0px;    
  }
  .nav-links a {
    text-transform: capitalize;
    display: inline-block;
    font-weight: bold;
    margin-right: 0.5rem;
    letter-spacing: 2px;
    font-size: 1.2rem;
    padding: 0.25rem 0.5rem;
    transition: var(--mainTransition);
  }
  .nav-links a:hover {
    color: var(--primaryColor);
  }
  .logo {
    width: 8rem;
  }

  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
    color: var(--mainBlack);
  }
  img {
    width: 100%;
    display: block;
  }
`;
