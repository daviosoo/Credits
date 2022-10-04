import { SafeAreaView, Text, View, StyleSheet, ScrollView, Touchable } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useSelector } from "react-redux"
import CreditCard from "./components/CreditCard"

export default function CreditList({ navigation }) {

    const credits = useSelector( s => s.credits )

    return(

        <SafeAreaView style={styles.container}>

            <ScrollView style={{ width: '100%', marginVertical: '10%', marginVertical: '10%' }}>

                <View style={{ width: '100%', justifyContent: 'flex-end', alignItems: 'center'}}>

                    <View style={{ width: '90%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>

                        <Text style={{ fontSize: 30, marginBottom: 20 }} >Credits</Text>     

                        {
                            credits.length > 0

                            ? 
                            credits.map( credit => {

                                return(

                                    <View style={{ width: '100%', backgroundColor: '#DEDCDB', padding: 10, borderRadius: 5, marginBottom: 10 }}>

                                        <TouchableOpacity onPress={() => navigation.navigate('CreditDetails', credit)} key={credit.code} >
                                            <CreditCard credit={ credit } />
                                        </TouchableOpacity>

                                    </View>
                                )

                            })

                            : 
                            <Text> There is no credits </Text>
                        }

                    </View>

                </View>

            </ScrollView>

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