document.addEventListener("DOMContentLoaded", function () {
    const BtResult = document.getElementById("btn-sum");
    const Result = document.getElementById("result");
    const Radio = document.querySelectorAll('input[name="radio"]');
    const Distnc = document.getElementById("Distance");
    const duration = document.getElementById("Time");
    const BtCancel = document.getElementById("btn-cancel");
    
  
   
    function Caldistance() {
      const dis = parseFloat(Distnc.value);
      const dura = parseFloat(duration.value);
      //const 
      
      if (dis <= 1) {
        Result.textContent =  35 + (dura * 2);  
      } else if (dis <= 10) {
        Result.textContent = ((dis-1) * 5.5) + 35 +(dura*2);
      } else if (dis <= 20) {
        Result.textContent = ((dis-10) * 6.5) + 84 +(dura*2);
      } else if (dis <= 40) {
        Result.textContent = ((dis-20) * 7.5) + 149+(dura*2);
      } else if (dis <= 60) {
        Result.textContent = ((dis-40) * 8) + 299+(dura*2);
      } else if (dis <= 80) {
      }else {
        Result.textContent = ((dis-80)* 10.5) + 639+(dura*2);
      }
      
      }
    
  
      function cancel(){
        
        Distnc.value ="";
        duration.value = "";
        Result.textContent = "0"
      }
  
  
    
    BtResult.addEventListener("click", Caldistance);
    BtCancel.addEventListener("click", cancel);
  });
