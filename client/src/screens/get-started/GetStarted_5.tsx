import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import NextButton from '../../components/button/NextButton';
import LineInput from '../../components/input/LineInput';
import MainTitle from '../../components/text/MainTitle';
import NextPageView from '../../components/view/NextPageView';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { Bold, Light } from '../../theme/fonts';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from 'styled-components/native';
import LineSelect from '../../components/input/LineSelect';
import { StackScreenProps } from '@react-navigation/stack';

const schema = yup.object({
  name: yup.string().required(),
});

const Seperator = styled.View`
  height: 15px;
`;

type GetStartedProps = StackScreenProps<RootStackParamList, 'GetStarted_5'>;

export default function GetStarted_5({ route }: GetStartedProps) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const [isPressed, setIsPressed] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (isPressed) {
        setIsPressed(false);
      }
    });
    return unsubscribe;
  }, [navigation, isPressed]);

  const clearErrorMessage = () => setErrorMessage('');

  const onSubmit = (data: string) => {
    console.log(data);
  };

  const goToNext = () => {
    setIsPressed(true);
    navigation.navigate('GenderSelect', { screenName: 'GetStarted_5' });
  };

  return (
    <>
      <NextPageView>
        <MainTitle>
          <>
            <Bold size={22}>프로필 정보</Bold>
            <Light size={22}>를</Light>
          </>
          <Light size={22}>입력해 주세요😀</Light>
        </MainTitle>
        <LineInput
          control={control}
          title="이름"
          name="name"
          placeholder="이름을 입력해주세요"
          errorMessage={errorMessage}
          clearErrorMessage={clearErrorMessage}
        />
        <Seperator />
        <LineSelect
          title="성별"
          isPressed={isPressed}
          onPress={() => goToNext()}
          selected={route.params?.gender}
        />
      </NextPageView>
      <NextButton
        text="가입 완료"
        disabled={!isValid || route.params?.gender === undefined || Boolean(errorMessage)}
        onPress={() => navigation.navigate('GetStarted_6')}
      />
    </>
  );
}
