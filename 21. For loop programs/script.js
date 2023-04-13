for(i=1;i<=10;i++)
    document.getElementById('numbers').innerHTML += i+"<br>"

for(i=10;i>=1;i--)
document.getElementById('rev-numbers').innerHTML += i+"<br>"

for(i=1;i<=10;i++){
    for(j=1;j<=i;j++)
    document.getElementById('p1').innerHTML += "*"
    document.getElementById('p1').innerHTML += "<br>"
}

for(i=1;i<=5;i++){
    for(j=1;j<=i;j++)
    document.getElementById('p2').innerHTML += "*"
    document.getElementById('p2').innerHTML += "<br>"
}

for(i=5;i>=1;i--){
    for(j=1;j<=i;j++)
    document.getElementById('p2').innerHTML += "*"
    document.getElementById('p2').innerHTML += "<br>"
}

for (i = 1; i <= 10; i++) {
    for (s = 9; s >= i; s--)
    document.getElementById('p3').innerHTML += "&nbsp;&nbsp;"
    for (j = 1; j <= i; j++)
    document.getElementById('p3').innerHTML += "*"
    for (k = i - 1; k >= 1; k--)
    document.getElementById('p3').innerHTML += "*"
    document.getElementById('p3').innerHTML += "<br>"
}

for (i = 1; i <= 10; i++) {
    for (j = 1; j <= i; j++)
    document.getElementById('p4').innerHTML += "*"
    for (k = 9; k >= i; k--)
    document.getElementById('p4').innerHTML += "&nbsp;&nbsp;"+"&nbsp;&nbsp;"
    for (l = i; l >= 1; l--)
    document.getElementById('p4').innerHTML += "*"
    document.getElementById('p4').innerHTML += "<br>"
}