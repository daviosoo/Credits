import { Text, StyleSheet, View, ScrollView } from "react-native"
import SafeAreaView from "react-native-safe-area-view";
import { calculateCredit } from "./func/calculateCredit";


function CreditDetailsScreen({ route }){

    const creditDetails = calculateCredit( route.params )

    return(
        <SafeAreaView style={styles.container}>

            <ScrollView style={{ width: '100%', marginVertical: '10%' }}>

                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>

                    <View style={{ width: '85%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>

                        <Text style={{ fontSize: 30, marginBottom: 20 }} >Credit details</Text>

                        <View style={{ marginBottom: 30, width: '100%' }}>

                            <Text style={{ marginBottom: 5, color: '#636161' }}>Name</Text>
                            <Text style={{ borderRadius: 10, backgroundColor: '#E8E8E8', padding: 10 }}> { creditDetails.name } </Text>

                        </View>

                        <View style={{ marginBottom: 30, width: '100%' }}>

                            <Text style={{ marginBottom: 5, color: '#636161' }}>Type</Text>
                            <Text style={{ borderRadius: 10, backgroundColor: '#E8E8E8', padding: 10 }}> { creditDetails.type } </Text>

                        </View>

                        <View style={{ marginBottom: 30, width: '100%' }}>

                            <Text style={{ marginBottom: 5, color: '#636161' }}> Start date </Text>
                            <Text style={{ borderRadius: 10, backgroundColor: '#E8E8E8', padding: 10 }}> { creditDetails.startDate } </Text>

                        </View>

                        <View style={{ marginBottom: 30, width: '100%' }}>

                            <Text style={{ marginBottom: 5, color: '#636161' }}>Gross ammount</Text>
                            <Text style={{ borderRadius: 10, backgroundColor: '#E8E8E8', padding: 10 }}> { creditDetails.grossAmount } </Text>

                        </View>

                        <View style={{ marginBottom: 30, width: '100%' }}>

                            <Text style={{ marginBottom: 5, color: '#636161' }}>Net ammount</Text>
                            <Text style={{ borderRadius: 10, backgroundColor: '#E8E8E8', padding: 10 }}> { creditDetails.netAmount } </Text>

                        </View>

                        <View style={{ marginBottom: 30, width: '100%' }}>

                            <Text style={{ marginBottom: 5, color: '#636161' }}>Interests</Text>
                            <Text style={{ borderRadius: 10, backgroundColor: '#E8E8E8', padding: 10 }}> { creditDetails.interests }</Text>

                        </View>

                        <View style={{ marginBottom: 30, width: '100%' }}>

                            <Text style={{ marginBottom: 5, color: '#636161' }}> Quotes </Text>
                            <Text style={{ borderRadius: 10, backgroundColor: '#E8E8E8', padding: 10 }}> { creditDetails.quotes } </Text>

                        </View>

                        <View style={{ marginBottom: 30, width: '100%' }}>

                            <Text style={{ marginBottom: 5, color: '#636161' }}>Monthly quote</Text>
                            <Text style={{ borderRadius: 10, backgroundColor: '#E8E8E8', padding: 10 }}> { creditDetails.monthlyQuote } </Text>

                        </View>

                        <View style={{ marginBottom: 30, width: '100%' }}>

                            <Text style={{ marginBottom: 5, color: '#636161' }}> Finish date </Text>
                            <Text style={{ borderRadius: 10, backgroundColor: '#E8E8E8', padding: 10 }}> { creditDetails.finishDate }  </Text>

                        </View>

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

export default CreditDetailsScreen