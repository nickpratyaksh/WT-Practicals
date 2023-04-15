function calculate(){
    let pcpl = Number(document.getElementById('pcpl').value)
    let time = Number(document.getElementById('time').value)
    let amt = Number(document.getElementById('amt').value)

    let inter = amt-pcpl
    let rate = (inter*100)/(pcpl*time)

    document.getElementById('output').innerText = rate
}