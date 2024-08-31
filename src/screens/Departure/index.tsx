import { useRef } from 'react';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { LicensePlateInput } from '../../components/LicensePlateInput';
import { TextAreaInput } from '../../components/TextAreaInput';
import { Container, Content } from './styles';
import { TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

const keyboardAvoidingViewBehavior = Platform.OS === 'android' ? 'height' : 'position';

export function Departure() {
  const descriptionRef = useRef<TextInput>(null);

  async function handleDepartureRegister() {
    console.log('OK');
  }

  return (
    <Container>
      <Header title='Saída' />

      <KeyboardAvoidingView behavior={keyboardAvoidingViewBehavior}>
        <ScrollView>
          <Content>
            <LicensePlateInput
              label='Placa do veículo'
              placeholder='BRA1234'
              onSubmitEditing={() => { descriptionRef.current?.focus() }}
              returnKeyType='next'
            />

            <TextAreaInput
              ref={descriptionRef}
              label='Finalidade'
              placeholder='Vou utilizar o veículo para...'
              onSubmitEditing={handleDepartureRegister}
              returnKeyType='send'
              blurOnSubmit
            />

            <Button
              title='Registrar Saída'
              onPress={handleDepartureRegister}
            />
          </Content>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
}