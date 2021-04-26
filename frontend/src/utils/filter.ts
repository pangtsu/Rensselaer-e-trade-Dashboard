
export function filterCategory(inputArray: any, filterKey: string) {
  var filteredArray = [];
  inputArray.forEach(element => {
    if (element.category == filterKey){
        filteredArray.push(element);
    }
  });
  return filteredArray;
}

export function filterDate(inputArray: any, filterKey: string) {
    var filteredArray = [];
    if (filterKey == "today"){
        inputArray.forEach(element => {
            var today = new Date().toISOString().slice(0, 10);
            const ts = element.created_at.slice(0,10);
            console.log(today);
            console.log(ts);
            if (ts == today){
                filteredArray.push(element);
            }
        });
    }
    else {
        const xDays = parseInt(filterKey); // x days ago - 7, 30, or 180 days
        inputArray.forEach(element => {
            var ts1 = new Date(); // today's date
            ts1.setDate(ts1.getDate()-xDays); 
            var ts2 = new Date(element.created_at);
            const t1secondsSinceEpoch = Math.round(ts1.getTime() / 1000);
            const t2secondsSinceEpoch = Math.round(ts2.getTime() / 1000);

            if (t2secondsSinceEpoch >= t1secondsSinceEpoch){
                filteredArray.push(element);
            }
        });
    }
    return filteredArray;
  }


export function filterPrice(inputArray: any, filterKey: string) {
    var filteredArray = [];
    if (filterKey == "200-x"){
        inputArray.forEach(element => {
            if (parseInt(element.price) >= 200){
                filteredArray.push(element);
            }
        });
    }
    else {
        const pRange = filterKey.split("-");
        const p1 = parseInt(pRange[0]);
        const p2 = parseInt(pRange[1]);
        inputArray.forEach(element => {
            if (parseInt(element.price) >= p1 && parseInt(element.price) <= p2){
                filteredArray.push(element);
            }
        });
    }
    return filteredArray;
  }