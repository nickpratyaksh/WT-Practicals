function sty(){
    document.getElementById('output').style.backgroundColor = "coral"
}

function change(){
    document.getElementById('output').innerText = "Changed Content"
}

function del(){
    document.getElementById('output').innerText = ""
}

function add(){
    document.getElementById('output').innerText += " added content"
}