function check(){
    let value = document.getElementById('input').value
    if (value % 2 == 0)
    document.getElementById('output').innerText = "Even"
    else
    document.getElementById('output').innerText = "Odd"
}