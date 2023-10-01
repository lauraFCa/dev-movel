import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Storage(){
    
    const listContents = async () => {
        try{

            const keys = await AsyncStorage.getAllKeys();
            return await AsyncStorage.multiGet(keys);
        }catch(e){
            console.log(e);
        }
    };


    const save = async (key, content) => {
        try{
            await AsyncStorage.setItem(key, content);
        }catch(e){
            console.log(e);
        }
    };


    const storeObject = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('my-key', jsonValue);
        } catch (e) {
            console.log(e);
        }
    };
    

    const getObject = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('my-key');
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            console.log(e);
        }
    };

    const remove = async (index) => {
        await AsyncStorage.removeItem(index.toString())
    };

}