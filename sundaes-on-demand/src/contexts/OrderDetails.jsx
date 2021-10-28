import { useEffect } from "react"
import { createContext, useContext, useState, useMemo } from "react"
import { pricePerItem } from "../constants"

const orderDetails = createContext()

export function useOrderDetails() {
    const context = useContext(OrderDetails)

    if (!context) {
        throw new Error("useOrderDetails must be used within an OrderDetailsProvider")
    }

    return context
}

function calculateSubtotal(optionType, optionCounts) {
    let optionCount = 0
    for(const count of optionCounts[optionType].values()) {
        optionCount += count
    }

    return optionCount * pricePerItem[optionType]
}

export function OrderDetailsProvider(props) {
    const [optionCounts, setOptionCounts] = useState({
        scoops: new Map(),
        toppings: new Map()
    })
    const [totals, setTotals] = useState({
        scoops: 0,
        toppings: 0,
        grandTotal: 0
    })

    useEffect(() => {
        const scoopsSubtotal = calculateSubtotal("scoops", optionCounts)
        const toppingsSubtotal = calculateSubtotal("toppings", optionCounts)
        const grandTotal = scoopsSubtotal + toppingsSubtotal
        setTotals({
            scoops: scoopsSubtotal,
            toppings: toppingsSubtotal,
            grandTotal
        })
    }, [optionCounts])

    const value = useMemo(() => {
        function UpdateItemCount(item, newItemCount, oprtionType) {
            const newOptionCounts = { ...optionCounts }
            const optionCountsMap = optionCOunts[optionType]
            optionCountsMap.set(itemName, parseInt(newItemCount))
            setOptionCounts(newOptionCounts)
        }
        // Will return: 
        // getter: object containing counts for scoops, toppings, subtotals, and totals
        // setter: updateOptionCount
        return [{ ...optionCounts, totals }]
    }, [optionCounts, totals])
    return <OrderDetails.Provider value = {} {...props} />
}