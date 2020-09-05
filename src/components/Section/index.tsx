import React from 'react';

import { Container, HeaderWrapper, Header, DropboxLogo, Content } from './styles';

interface Props {
  variant: 'blue' | 'beige' | 'white' | 'black'
  title: string
  description: string
}

const Section: React.FC<Props> = ({ variant, title, description }) => {
  const buttonVariant = Math.round(Math.random()) // retornando zero ou 1

  return (
    <Container className={variant} >
      <HeaderWrapper>
        <Header>
          <h1>
            <DropboxLogo />
            <span>Dropbox</span>
          </h1>
          {/* Criando efeito de mudança no nome do header */}
          <button>{buttonVariant === 0 ? 'Acessar' : 'Interagir'}</button>
        </Header>

      </HeaderWrapper>

      <Content>
        <h2>{title}</h2>
        <p>{description}</p>
      </Content>
    </Container>
  )
}

export default Section;