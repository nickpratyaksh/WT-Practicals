function calculate(){
    let eng = Number(document.getElementById('eng').value)
    let phy = Number(document.getElementById('phy').value)
    let chem = Number(document.getElementById('chem').value)
    let math = Number(document.getElementById('math').value)
    let total = eng+phy+chem+math

    let perc = total/4
    console.log(perc)

    if(perc>=90 && perc<=100)
    document.getElementById('output').innerText = "A"
    else if(perc>=80 && perc<90)
    document.getElementById('output').innerText = "B"
    else if(perc>=70 && perc<80)
    document.getElementById('output').innerText = "C"
    else if(perc>=60 && perc<70)
    document.getElementById('output').innerText = "D"
    else if(perc>=0 && perc<60)
    document.getElementById('output').innerText = "No Grade"
    else
    document.getElementById('output').innerText = "invalid inputs"

}