import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background: #fff;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #333;
  margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
  width: 80%;
  height: 40px;
  background: #4865af;
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.Image`
  width: 20px;
  height: 20px;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-left: 10px;
`;
