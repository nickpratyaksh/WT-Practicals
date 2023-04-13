for(i=0;i<=10;i++){
    for(j=1;j<=10;j++)
    document.getElementsByTagName('div')[i].innerHTML += j*i + "<br>"
}