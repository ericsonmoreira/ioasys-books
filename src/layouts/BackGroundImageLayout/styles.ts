import styled from 'styled-components';
import bgImage from '../../assets/bg.png';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bgImage});
  background-blend-mode: darken;
  background-size: cover;
  background-position: center;
`;
