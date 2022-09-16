export function calculateCredit(  { name, typeId, startDate, grossAmount, quotes } ) {

    const types = [
        { type: 1, text: 'Housing', interestsPercentil: 1.5 },
        { type: 2, text: 'Free investment', interestsPercentil: 2 },
        { type: 3, text: 'Education', interestsPercentil: 1 }
    ]

    const type = types.find(t => t.type === +typeId)

    const formatNumber = new Intl.NumberFormat('de-DE')

    const interests = grossAmount * ((type.interestsPercentil * +quotes ) / 100)
    const interestsFormat = `${formatNumber.format(interests)} - ${type.interestsPercentil}% monthly`

    const netAmount = grossAmount + interests
    const netAmountFormat = formatNumber.format(netAmount)

    const grossAmountFormat = formatNumber.format(grossAmount)

    const monthlyQuote = formatNumber.format(netAmount / +quotes)

    const startDateFormat = `${startDate.getFullYear()} / ${startDate.getMonth()} / ${startDate.getDate()}`

    const finishDate = new Date(startDate.getFullYear(), (startDate.getMonth()), startDate.getDate())

    finishDate.setMonth(finishDate.getMonth() + +quotes)

    const finishDateFormat = `${finishDate.getFullYear()} / ${finishDate.getMonth()} / ${finishDate.getDate()}`

    return {
        name,
        type: type.text,
        startDate: startDateFormat,
        grossAmount: grossAmountFormat,
        netAmount: netAmountFormat,
        interests: interestsFormat,
        quotes,
        monthlyQuote,
        finishDate: finishDateFormat
    }
 
}
