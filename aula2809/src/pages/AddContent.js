import { useState } from "react";
import Storage from "../local/recordData";
import { Button, View, Text, Input } from "react-native";

export default function AddContent(){
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')

    const onUpdate = () => {
        Storage.save(Math.random(), {value});
        Storage.listContents().then((stores) => {
            if(stores){
                let data = JSON.parse(stores[0]);
                setResult(data.value)
            }
        })
    }
    
    return(
        <View>
            {/* <Input value={value} onChangeText={(text) => setValue(text)} /> */}
            <Button title="Salvar" onPress={onUpdate} />
            <Text value={result} />
        </View>
    )


}