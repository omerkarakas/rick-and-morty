import styled from 'styled-components';

export const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100vw;

  .flipping-5 {
    width: 60px;
    aspect-ratio: 1;
    animation: f5-0 1s infinite steps(1);
  }

  .flipping-5::before,
  .flipping-5::after {
    content: '';
    position: absolute;
    inset: 0 50% 50% 0;
    transform-origin: bottom right;
    animation: f5-1 0.5s infinite linear alternate,
      f5-2 0.5s infinite steps(1) alternate;
  }

  .flipping-5::after {
    --s: -1, -1;
  }
`;
