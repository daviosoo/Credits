import SafeAreaView from 'react-native-safe-area-view';
import { StyleSheet, Text, TextInput, View, ScrollView, Button } from 'react-native';
import { useEffect, useState } from "react"
import DateTimePicker from '@react-native-community/datetimepicker';
import { PickerIOS } from '@react-native-picker/picker';
import { regexValidate } from '../../utils/regexValidator';

export default function CreditFormScreen({ navigation }) {

    const initForm = {
        name: {
            value: '',
            isValid: false,
            color: '#636161'
        },
        amount: {
            value: 0,
            isValid: false,
            color: '#636161'
        },
        date: {
            value: new Date(),
            isValid: true,
            color: '#636161'
        },
        type: {
            value: "1",
            isValid: true,
        },
        quotes: {
            value: "6",
            isValid: true,
        }
    }

    const [creditForm, setCreditForm] = useState(initForm)

    const getIsValidForm = () => {
        const credit = Object.values(creditForm)
        const isValidEntries = credit.every(p => p.isValid)

        return isValidEntries
    }

    return (
        <SafeAreaView style={styles.container}>

            <ScrollView style={{ width: '100%', marginVertical: '10%' }}>

                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>

                    <View style={{ width: '85%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>

                        <Text style={{ fontSize: 30, marginBottom: 20 }} >Credit</Text>

                        <View style={{ marginBottom: 30, width: '100%' }}>

                            <Text style={{ marginBottom: 5, color: creditForm.name.color }}>Name</Text>
                            <TextInput style={{ borderRadius: 10, borderColor: creditForm.name.color, borderWidth: .3, padding: 10 }} maxLength={30} placeholder='Name' onChangeText={(v) => {

                                const isValid = regexValidate({
                                    regexp: /[A-Za-zÁ-Üá-ü ]{5,30}/,
                                    stringToValidate: v
                                })

                                setCreditForm(s => ({
                                    ...s,
                                    name: {
                                        value: v,
                                        isValid,
                                        color: isValid ? "green" : "red"
                                    }
                                }))

                            }} ></TextInput>
                        </View>

                        <View style={{ marginBottom: 30, width: '100%' }}>

                            <Text style={{ marginBottom: 5, color: creditForm.amount.color }}>Credit value</Text>
                            <TextInput style={{ borderRadius: 10, borderColor: creditForm.amount.color, borderWidth: .3, padding: 10 }} placeholder='Credit value' maxLength={12} keyboardType='numeric' onChangeText={(v) => {

                                const isValid = +v >= 1000000 && +v <= 999999999

                                setCreditForm(s => ({
                                    ...s,
                                    amount: {
                                        value: +v,
                                        isValid,
                                        color: isValid ? "green" : "red"
                                    }
                                }))
                                
                            }} ></TextInput>
                        </View>

                        <View style={{ marginBottom: 30, width: '100%' }}>

                            <Text style={{ marginBottom: 5, color: creditForm.date.color }}>Date</Text>
                            <DateTimePicker value={creditForm.date.value} display="spinner" textColor={creditForm.date.color} style={{ width: '100%' }} onChange={(e, enteredDate) => {

                                const actuallyDate = new Date()
                                const isValid = enteredDate > actuallyDate

                                setCreditForm(s => ({
                                    ...s,
                                    date: {
                                        value: enteredDate,
                                        isValid,
                                        color: isValid ? "green" : "red"
                                    }
                                }))

                            }} />
                        </View>

                        <View style={{ marginBottom: 40, width: '100%' }}>

                            <Text style={{ color: '#636161' }}>Type</Text>
                            <PickerIOS
                                selectedValue={creditForm.type.value}
                                onValueChange={(v) =>

                                    setCreditForm(s => ({
                                        ...s,
                                        type: {
                                            value: v,
                                            isValid: true,
                                        }

                                    }))}
                                    
                                style={{ marginVertical: -50 }}
                            >
                                <PickerIOS.Item label="Housing" value="1" />
                                <PickerIOS.Item label="Free investment" value="2" />
                                <PickerIOS.Item label="Education" value="3" />
                            </PickerIOS>

                        </View>

                        <View style={{ marginBottom: 50, width: '100%' }}>

                            <Text style={{ color: '#636161' }}>Quotas</Text>
                            <PickerIOS
                                selectedValue={creditForm.quotes.value}
                                onValueChange={(value) =>

                                    setCreditForm(s => ({
                                        ...s,
                                        quotes: {
                                            value,
                                            isValid: true,
                                        }

                                    }))}

                                style={{ marginVertical: -50 }}
                            >
                                <PickerIOS.Item label="6" value="6" />
                                <PickerIOS.Item label="12" value="12" />
                                <PickerIOS.Item label="24" value="24" />
                                <PickerIOS.Item label="36" value="36" />
                            </PickerIOS>

                        </View>

                        <View style={{ width: '100%', backgroundColor: '#DEDCDB', padding: 10, borderRadius: 5 }}>

                            <Button
                                onPress={() => { navigation.navigate('CreditDetails', {
                                    name: creditForm.name.value,
                                    typeId: creditForm.type.value,
                                    startDate: creditForm.date.value,
                                    grossAmount: creditForm.amount.value,
                                    quotes: creditForm.quotes.value
                                }) }}
                                title="Calculate"
                                color='#636161'
                                disabled={ !getIsValidForm() }
                            />

                        </View>

                    </View>

                </View>

            </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
