function setTemp(temp) {
    temp=prompt("set temp to")
if (temp >= 10 && temp<=30) {
      alert("AC set to " + temp);
 }else {
    alert("Invalidinput! give input from 10 to 30")
    setTemp()
}
}
setTemp()