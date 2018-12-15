function checkInput(o) {
   return o;
}

function InchConverter() {
   var url = "http://statenweb.mockable.io/conversions/";
   axios.get(url)
       .then(function (resault) {
           var json = resault.data
           var inchFromForm = document.getElementById("inch").value;
           $("#cm_from").text(checkInput(inchFromForm) ? "there is  " + inchFromForm * json.centimetersInInch + " inch" : "wrong value");
       })
       
}

function CmConverter() {
   var url = "http://statenweb.mockable.io/conversions/";
   axios.get(url)
       .then(function (resault) {
           var json = resault.data
           var cmFromForm = document.getElementById("cm").value;
           $("#inch_from").text(checkInput(cmFromForm) ? "there is  " + cmFromForm * json.inchesInCm + " inch" : "wrong value");
       })
       
}

