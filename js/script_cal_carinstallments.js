document.addEventListener("DOMContentLoaded", function () {
  //input
  const CalBt = document.getElementById("btn-result");
  const ResultSum = document.getElementById("btn-result");
  const BtCancel = document.getElementById("btn-cancel");
  const Radio = document.querySelectorAll('input[name="car"]');
  const Name = document.getElementById("name");
  const LastName = document.getElementById("Lastname");
  const CarPrice = document.getElementById("price");
  const dwnPrice = document.getElementById("down");
  const y = document.getElementById("downYear");
  const Intrest = document.getElementById("interest");
  //display
  const Name1 = document.getElementById("name1");
  const CarType = document.getElementById("car1");
  const dwnPrice1 = document.getElementById("down1");
  const Finance = document.getElementById("FinanceSum");
  const PayMonth = document.getElementById("permonth");

  //functions
  function Calculate() {
    const CarPri = parseFloat(CarPrice.value)
    const Finan = parseFloat(Finance.value)
    const INtrs = parseFloat(Intrest.value)
    const years = parseFloat(y.value)


    Name1.textContent = Name.value +" "+  LastName.value;

    if (Radio[0].checked) {
        CarType.textContent = "Honda";
      } else if (Radio[1].checked) {
        CarType.textContent = "Toyota";
      } else if (Radio[2].checked) {
        CarType.textContent = "MG";
      } else if (Radio[3].checked) {
        CarType.textContent = "Mazda";
      } else if (Radio[4].checked) {
        CarType.textContent = "ISUZU";
      } else {
        CarType.textContent = "Nissan";
      }
    
      dwnPrice1.textContent = CarPri *  (dwnpri / 100)
      Finance.textContent = CarPri -  (CarPri*(dwnpri/100))
      PayMonth.textContent = ((CarPri - (CarPri * (dwnpri/100))) * (INtrs / 100) * years +(CarPri - CarPri * (dwnpri / 100))) /(years * 12)


      //((CarPri -(CarPri*(INtrs/100)))*((INtrs/100)*(years))) + (CarPri -  (CarPri*(dwnpri/100)))/(years*12);
    
    }
  

    function cancel() {
      //input
      Name.value = "";
      LastName.value = "";
      Radio[0].checked = true;
      CarPrice.value = "";
      dwnPrice.value = "";
      y[0].selected = true;
      Intrest.value = "";
      //display
      Name1.textContent = "XXXXX";
      CarType.textContent = "XXXXX";
      dwnPrice1.textContent = "XXXXX";
      Finance.textContent = "XXXXX";
      PayMonth.textContent = "XXXXX";
    }

  //Radio.forEach((option) => option.addEventListener("select", cartype));
  BtCancel.addEventListener("click", cancel);
  
  ResultSum.addEventListener("click", Calculate);
  
});
