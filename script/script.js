// Voltage (V) = Current (I) * Resistance (R) 
// Power (P) = Voltage (V) * Current (I)
// power = 1.0,
// voltage = 10.0,
// current = 100.0,
// resistance = 100.0;

var power = 1.0,
   voltage = 10.0,
   current = 100.0,
   resistance = 100.0,
   powerMultiplier = 1.0,
   voltageMultiplier = 1.0,
   currentMultiplier = 1.0,
   resistanceMultplier = 1.0,
   modifiedValue;

var txtPower = document.getElementById("input-power");
var txtVoltage = document.getElementById("input-voltage");
var txtCurrent = document.getElementById("input-current");
var txtResistance = document.getElementById("input-resistance");

var ddw = document.getElementById("ddw");
var ddKw = document.getElementById("ddKw");
var ddMw = document.getElementById("ddMw");
var ddGw = document.getElementById("ddGw");
var ddv = document.getElementById("ddv");
var ddKv = document.getElementById("ddKv");
var ddMv = document.getElementById("ddMv");
var ddA = document.getElementById("ddA");
var ddmA = document.getElementById("ddmA");
var dduA = document.getElementById("dduA");
var ddO = document.getElementById("ddO");
var ddKO = document.getElementById("ddKO");
var ddMO = document.getElementById("ddMO");

ddw.addEventListener("click",function(){
   powerMultiplier = 1.0;
   txtPower.value = (power * powerMultiplier).toFixed(3);
});
ddKw.addEventListener("click",function(){   
   powerMultiplier = .001;
   txtPower.value = (power * powerMultiplier).toFixed(3);
});
ddMw.addEventListener("click",function(){
   powerMultiplier = .000001;
   txtPower.value = (power * powerMultiplier).toFixed(3);
});
ddGw.addEventListener("click",function(){
   powerMultiplier = .000000001;
   txtPower.value = (power * powerMultiplier).toFixed(3);
});
ddv.addEventListener("click",function(){
   voltageMultiplier = 1.0;
   txtVoltage.value = (voltage * voltageMultiplier).toFixed(3);
});
ddKv.addEventListener("click",function(){
   voltageMultiplier = .001;
   txtVoltage.value = (voltage * voltageMultiplier).toFixed(3);
});
ddMv.addEventListener("click",function(){
   voltageMultiplier = .000001; 
   txtVoltage.value = (voltage * voltageMultiplier).toFixed(3);
});
ddA.addEventListener("click",function(){
   currentMultiplier = 1.0;
   txtCurrent.value = (current * currentMultiplier).toFixed(3);
});
ddmA.addEventListener("click",function(){
   currentMultiplier = 1000;
   txtCurrent.value = (current * currentMultiplier).toFixed(3);
});
dduA.addEventListener("click",function(){
   currentMultiplier = 1000000;
   txtCurrent.value = (current * currentMultiplier).toFixed(3);
});
ddO.addEventListener("click",function(){
   resistanceMultplier = 1.0;
   txtResistance.value = (resistance * resistanceMultplier).toFixed(3);
});
ddKO.addEventListener("click",function(){
   resistanceMultplier = .001;
   txtResistance.value = (resistance * resistanceMultplier).toFixed(3);
});
ddMO.addEventListener("click",function(){
   resistanceMultplier = .000001;
   txtResistance.value = (resistance * resistanceMultplier).toFixed(3);
});


// update dropdown button whenever a list item is selected
var entryList = document.getElementsByClassName("input-group-append");
[].forEach.call(entryList, function(elx)  {
   var listItems = elx.getElementsByClassName("dropdown-item");
   var btn = elx.getElementsByClassName("dropdown-toggle")[0];
   [].forEach.call(listItems, function(ely)  {
         ely.addEventListener("click",function()   {
            btn.innerHTML = ely.innerHTML;
         })
   })
})

var btnRefreshButtons = [];
btnRefreshButtons.push(document.getElementsByClassName("btn-danger")[0]);
btnRefreshButtons.push(document.getElementsByClassName("btn-danger")[1]);
btnRefreshButtons.push(document.getElementsByClassName("btn-danger")[2]);

btnRefreshButtons.forEach(function(el)  {
   el.hide = function() {
      this.style.width = "0px";
      this.style.padding = "0px 0px";
   }

   el.unhide = function() {
      this.style.width = "42px";
      this.style.padding = "0px 12px";
   }
})

// voltage refresh button
btnRefreshButtons[0].addEventListener("click", function (){
   current = txtCurrent.value * (1/currentMultiplier);
   resistance = txtResistance.value * (1/resistanceMultplier);

   voltage = current * resistance;
   txtVoltage.value = (voltage * voltageMultiplier).toFixed(3);
   power = voltage*current;
   txtPower.value = (power*powerMultiplier).toFixed(3);

   btnRefreshButtons.forEach(function(el){
      el.hide();
   })

})

// current refresh button
btnRefreshButtons[1].addEventListener("click", function (){
   voltage = txtVoltage.value * (1/voltageMultiplier);
   resistance = txtResistance.value * (1/resistanceMultplier);

   current = voltage / resistance;
   txtCurrent.value = (current * currentMultiplier).toFixed(3);
   power = voltage*current;
   txtPower.value = (power*powerMultiplier).toFixed(3);

   btnRefreshButtons.forEach(function(el){
      el.hide();
   })
})

// resistance refresh button
btnRefreshButtons[2].addEventListener("click", function (){
   current = txtCurrent.value * (1/currentMultiplier);
   voltage = txtVoltage.value * (1/voltageMultiplier);
   
   resistance = voltage / current;
   txtResistance.value = (resistance * resistanceMultplier).toFixed(3);
   power = voltage*current;
   txtPower.value = (power*powerMultiplier).toFixed(3);

   btnRefreshButtons.forEach(function(el){
      el.hide();
   })
})

// events for value input
var txtInput = document.getElementsByTagName("input");
[].forEach.call(txtInput, function(el) {
   el.addEventListener("input", function()   {
         updateValues(this);
   })
})

//update values
function updateValues(preserveElement) {
   switch (preserveElement.id) {
         case "input-power":
            console.log("script.js: updateValues() - Invalid update");
            break;
         case "input-current":
            current = preserveElement.value;
            btnRefreshButtons[0].unhide();
            btnRefreshButtons[2].unhide();
            break;
         case "input-resistance":
            resistance = preserveElement.value;
            btnRefreshButtons[0].unhide();
            btnRefreshButtons[1].unhide();
            break;
         case "input-voltage":
            voltage = preserveElement.value;
            btnRefreshButtons[1].unhide();
            btnRefreshButtons[2].unhide();
            break;
         default:
            alert("You can't see this window because it will never appear.");
            break;
   }

   modifiedValue = preserveElement;
}