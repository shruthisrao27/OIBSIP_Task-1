var screen = document.getElementById('screen');
/*events listener*/


 function btnClick(value){
      screen.value+=value;
  }
  function clearScreen(){
          screen.value="";
}
  function findResult(){
      var result=eval(screen.value);
      screen.value=result;
  }
  function answerClick(){
    var ans=eval(screen.value);
    ans=findResult();
    
  }
function DeleteScreen(){
      screen.value=screen.value.substr(0,screen.value.length-1);
}
function power() {
    var getValue = document.getElementById("screen").value;
        var nextValue=document.getElementById("screen").value;
        nextValue=screen.value++;
        var powerTotal = Math.pow(getValue,nextValue);
        document.getElementById("screen").value = powerTotal;
       }
function percentage(){
 screen.value=screen.value/100;
}
function plus(){
    screen.value=screen.value*(-1);
}

