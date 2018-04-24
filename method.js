
function Myfun() {
    document.getElementById('dd').setAttribute("class", "myClass");
    
    var R = document.getElementsByClassName('messageCheckbox');
    var txt = "";
    var i;
    for (i = 0; i < R.length; ++i) {
        if (R[i].checked) {
            txt = txt + R[i].value + ", ";
        }
    }
        
var Type;
if (document.getElementById('r1').checked) {
  Type = document.getElementById('r1').value;
}
else if (document.getElementById('r2').checked) {
  Type = document.getElementById('r2').value;
}
  
 document.getElementById("dd").innerHTML=
 "Welcome : "+ document.getElementById("name").value +
 " <br>You have publish the event name :" +document.getElementById("Eventname").value +
 "<br>Of type : "+ Type +  
 "<br>At :" +document.getElementById("date").value+
 "<br>In :" +document.getElementById("ll").value +
 "<br>And you have request: "+ txt +" "+document.getElementById("Req").value +".";

    
    }
 