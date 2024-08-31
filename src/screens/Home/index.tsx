import { useNavigation } from '@react-navigation/native';
import { CarStatus } from '../../components/CarStatus';
import { HomeHeader } from '../../components/HomeHeader';
import { Container, Content } from './styles';
import { useState } from 'react';
import { Historic } from '../../libs/realm/schemas/Historic';

export function Home() {
    const [vehicleInUse, setVehicleInUse] = useState<Historic | null>(null);

    const { navigate } = useNavigation();

    function handleRegisterMoviment() {
        if (vehicleInUse?._id) {
            navigate('arrival', { id: vehicleInUse._id.toString() });
        } else {
            navigate('departure')
        }
    }

    return (
        <Container>
            <HomeHeader />

            <Content>
                <CarStatus onPress={handleRegisterMoviment} />
            </Content>
        </Container>
    );
}