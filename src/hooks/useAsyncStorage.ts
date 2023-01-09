import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const storeData = async (key: string, value: any): Promise<any> => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue);

        return true
    } catch (e) {
        Alert.alert("Desculpe...", "Tivemos um erro ao salvar este item, tenta novamente mais tarde!");
        return false
    }
}

export const getData = async (key: string): Promise<any> => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value
        } else {
            Alert.alert("Atenção", "Dados vazios e/ou inexistentes!")
            return null
        }
    } catch (e) {
        Alert.alert("Desculpe...", "Tivemos um erro ao obter este item, tenta novamente mais tarde!");
        return null
    }
}

export const removeData = async (key: string): Promise<any> => {
    try {
        await AsyncStorage.removeItem(key);
        return true
    } catch (e) {
        Alert.alert("Desculpe...", "Tivemos um erro ao remover este item, tenta novamente mais tarde!");
        return false
    }
}