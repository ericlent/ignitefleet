import { Container, Greeting, Message, Name } from './styles';

import { TouchableOpacity } from 'react-native';
import theme from '../../theme';

export function HomeHeader() {
  return (
    <Container>
        <Greeting>
            <Message>
                Olá
            </Message>

            <Name>
                Eric
            </Name>
        </Greeting>

        <TouchableOpacity>
            
        </TouchableOpacity>
    </Container>
  );
}