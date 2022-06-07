// best([15, 10, 20, 22, 1, 9])

// function best(price){
//    let maxProfit = 0;

//    for (let buy=0; buy<price.length; buy++){
//        const buyPrice = price[buy];

//        for (let sell=0 + 1; sell<price.length; sell++){
//            const sellPrice = price[sell];
//            currentProfit = sellPrice - buyPrice;

//            maxProfit = Math.max(maxProfit, currentProfit)
//        }
//    }
//    return maxProfit
// }


function best(stocks){
    let lowest;                                                   //Leaving (lowest) to be defined later
    let high =0;

    for (let i=0; i<stocks.length; i++){
        if (lowest === undefined || stocks[i]<lowest){            //if lowest is undefined and the number we are looping over is less than lowest
            lowest = stocks[i]                                    // if the the value is the value is the lowest assign it to lowest
        }
        let diff = stocks[i] - lowest

        if(diff > high){                                         //If the diff is greater than high, high becomes diff
            high = diff
        }
    }
    return high
}



console.log(best([15, 10, 20, 22, 1, 9]))