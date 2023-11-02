import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import styled from 'styled-components/native';


export const FullView = styled(View)`
  width: 100%;
  align-items: center;
`

export const HeaderView = styled(View)`
  background-color: #8aafff;
  text-align: center;
  width: 100%;
  position: absolute;
  top: 25px;
  margin-top: 20px;
  padding: 10px 5px;
`

export const DefaultButton = styled(Button)`
  border: 1px solid #1cce51;
  border-radius: 5px;
  padding: 2px;
  margin: 15px;
  width: 50%;
  font-size: 30px;
`

export const StyledView = styled(View)`
  flex: 1;
  position: absolute;
  top: 0;
`;

export const SmallText = styled(Text)`
  font-size: 15px;
`

export const StyledText = styled(Text)`
  font-size: 24px;
  color: #333;
`;

export const StyledButton = styled(Button)`
  margin-top: 20px;
`;
