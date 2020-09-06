import styled from 'styled-components';
import { FaDropbox } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (min-width: 1024px) {
    /* largura maxima do meno lateral */
    max-width: 480px;
  }
`;

export const Navigation = styled.nav`
  display: flex;

  align-items: center;
  justify-content: space-between;

  padding: 16px 32px;
  min-height: 61px;

  > h1 {
    display: flex;
    align-items: center;

    > span {
      color: var(--color-quaternary);
      margin-left: 10px;
      font-size: 29px;
    }
  }

  > button {
    background: none;
    border: none;
    font-weight: bold;
    font-size: 17px;
    outline: 0;
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    /* a partir desse tamanho de tela, o nome dropbox não é mais exibido */
    > h1 {
      display: none;
    }
  }
`;

export const DropboxLogo = styled(FaDropbox)`
  width: 36px;
  height: 32px;
  fill: var(--color-blue);
`;

export const Form = styled.form`
  display: flex;
  height: 100%;

  flex-direction: column;
  justify-content: center;

  padding: 0 32px;
  max-width: 480px;
  margin: 0 auto;

  > .title {
    font-size: 25px;
    font-weight: 500;
  }

  > .subtitle {
    font-size: 12px;
    margin-top: 3px;
  }
`;
