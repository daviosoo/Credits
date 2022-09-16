import { Button, Text, View, StyleSheet, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function LandingScreen({ navigation }){

    return(

        <SafeAreaView style={styles.container}>

            <View style={{ width: '100%', justifyContent: 'flex-end', alignItems: 'center', marginVertical: '10%' }}>

                <View style={{ width: '85%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>

                    <Text style={{ fontSize: 30, marginBottom: 5 }} >Welcome</Text>
                    <Text style={{ fontSize: 25, marginBottom: 50 }} >Credit manager</Text>

                    <View style={{ width: '100%', backgroundColor: '#DEDCDB', padding: 10, borderRadius: 5, marginBottom: 10 }}>

                        <Button
                            onPress={ () => navigation.navigate('CreditForm') }
                            title="Create credit"
                            color="#636161" 
                        />
                        
                    </View>

                    <View style={{ width: '100%', backgroundColor: '#DEDCDB', padding: 10, borderRadius: 5, marginBottom: 10 }}>

                        <Button
                            onPress={ () => Alert.alert('Soon!') }
                            title="See credits"
                            color="#636161" 
                        />
                        
                    </View>

                    <View style={{ width: '100%', backgroundColor: '#DEDCDB', padding: 10, borderRadius: 5, marginBottom: 10 }}>

                        <Button
                            onPress={ () => Alert.alert('Soon!') }
                            title="Search credit"
                            color="#636161" 
                        />
                        
                    </View>

                </View>

            </View>

        </SafeAreaView>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default LandingScreen