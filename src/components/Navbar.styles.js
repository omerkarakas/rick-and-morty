import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  height: 70px;
  width: 90%;
  display: flex;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 15px;
  font-family: 'Fuzzy Bubbles', cursive;
  font-weight: bold;
    background: var(--mainWhite);
    height: 5rem;
    display: flex;
    align-items: center;
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
    width: 12rem;
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
