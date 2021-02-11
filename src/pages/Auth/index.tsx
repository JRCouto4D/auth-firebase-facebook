import React from 'react';

import icon from '../../assets/icon.png';

import {Container, Title, Button, Icon, TextButton} from './styles';

const Auth: React.FC = () => (
  <Container>
    <Title>Fazer login com</Title>

    <Button>
      <Icon source={icon} />
      <TextButton>Facebook</TextButton>
    </Button>
  </Container>
);

export default Auth;
