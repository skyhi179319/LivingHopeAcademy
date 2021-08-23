setInterval(function(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      var info = [];
      var text = "";
      for (i = 0; i < myArr.length; i++) {
        info.push(myArr[i])
      }
      for (i = 0; i < info.length; i++) {
        if(info.length == 0){
          text = info[i];
        }
        else{
          text +=  "<p> " + info[i] + " </p>";
        }
      }
      document.getElementById("demo").innerHTML = text;
    }
  };
  xmlhttp.open("GET", "Events.txt", true);
  xmlhttp.send();
},500)