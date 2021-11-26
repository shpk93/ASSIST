import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { colors } from '../../theme/colors';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/RootStackParamList';

const Container = styled.TouchableOpacity`
  margin-top: 6px;
`;

export default function Menu() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <Container onPress={() => navigation.navigate('MyPage')}>
      <MaterialIcons name="menu" size={28} color={colors.blue} />
    </Container>
  );
}