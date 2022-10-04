import { Text, TouchableOpacity, View } from "react-native"

function CreditCard({ credit }) {

    const types = [
        { type: 1, text: 'Housing', interestsPercentil: 1.5 },
        { type: 2, text: 'Free investment', interestsPercentil: 2 },
        { type: 3, text: 'Education', interestsPercentil: 1 }
    ]

    const type = types.find(t => t.type === +credit.typeId)

    const formatNumber = new Intl.NumberFormat('de-DE')
    const grossAmountFormat = `${ formatNumber.format(credit.grossAmount) } - ${type.interestsPercentil}% `

    return(

        <>
            <Text style={{ fontSize: 20 }} >{ credit.name }</Text>
            <Text style={{ fontSize: 15, marginBottom: 15 }} >{ credit.code }</Text>

            <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>

                <Text style={{ fontSize: 15, marginBottom: 5 }} >{ type.text }</Text>
                <Text style={{ fontSize: 15, marginBottom: 5 }} >{ grossAmountFormat }</Text>

            </View>
        </>

    )


}

export default CreditCard