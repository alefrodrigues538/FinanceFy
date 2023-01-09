import React from 'react';
import { View } from 'react-native';
import { Container, Paragraph } from '../components/GlobalComponents';
import Colors from '../constants/Colors';

// import { Container } from './styles';

const Expenses: React.FC = () => {
    return (
        <Container>
            <View style={{
                flex: 1,
                width: '100%',
                justifyContent: 'flex-end',
                backgroundColor: Colors.primary,
                alignItems: 'center'
            }}>

                <View style={{
                    backgroundColor: Colors.white,
                    width: '100%',
                    minHeight: '30%',
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    paddingHorizontal: 16,
                }}>

                    <Paragraph>Expenses</Paragraph>
                </View>
            </View>
        </Container>
    );
}

export default Expenses;