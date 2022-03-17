import { Card, CardContent } from '@mui/material';
import styled from 'styled-components';

export const Container = styled(Card)`
  display: inline-block;
  width: 100%;
  height: 100%;
  min-width: 200px;
  min-height: 160px;
`;

export const Content = styled(CardContent)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const ImgBook = styled.img`
  width: 81px;
  height: 122px;
  filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));
`;

export const ImgBookWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  margin-right: 1rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
`;
