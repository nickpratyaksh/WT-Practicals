function percentcalc(income){
    if(income>50000){
        if(income>80000){
            if(income>100000){
                if(income>120000){
                    return 10
                }
                return 9
            }
            return 8
        }
        return 7
    }
    else
    return 0
}

function calculate(){
    let income = document.getElementById('input').value
    let taxperc = percentcalc(income)
    tax = taxperc/100*income
    document.getElementById('output').innerText = tax
}