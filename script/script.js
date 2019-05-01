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
   powerMultiplier = 1,
   voltageMultiplier = 1,
   currentMultiplier = 1,
   resistancMultplier = 1,
   modifiedValue;

var txtPower = document.getElementById("input-power");
var txtVoltage = document.getElementById("input-voltage");
var txtCurrent = document.getElementById("input-current");
var txtResistance = document.getElementById("input-resistance");

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

// var hide = function(element) {
//    element.style.width = "0px";
//    element.style.padding = "0px 0px";
// }

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
   voltage = current * resistance;
   this.value = voltage * voltageMultiplier;
   power = voltage*current;
   txtPower.value = power*powerMultiplier;
   btnRefreshButtons.forEach(function(el){
      el.hide();
   })
})

// current refresh button
btnRefreshButtons[1].addEventListener("click", function (){
   current = voltage / resistance;
   this.value = current * currentMultiplier;
   power = voltage*current;
   txtPower.value = power*powerMultiplier;
   btnRefreshButtons.forEach(function(el){
      el.hide();
   })
})

// resistance refresh button
btnRefreshButtons[1].addEventListener("click", function (){
   resistance = voltage / current;
   this.value = resistance * resistancMultplier;
   power = voltage*current;
   txtPower.value = power*powerMultiplier;
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

   // var x = [].slice.call(btnRefreshButtons);


})

//update values
function updateValues(preserveElement) {
   switch (preserveElement.id) {
         case "input-power":
            console.log("You cannot change the Wattage");
            break;
         case "input-current":
            current = preserveElement.value;
            // voltage = current * resistance;
            // power = voltage * current;
            btnRefreshButtons[0].unhide();
            btnRefreshButtons[2].unhide();
            break;
         case "input-resistance":
            resistance = preserveElement.value;
            // current = voltage / resistance;
            // power = voltage * current;
            btnRefreshButtons[0].unhide();
            btnRefreshButtons[1].unhide();
            break;
         case "input-voltage":
            voltage = preserveElement.value;
            // current = voltage / resistance;
            // power = voltage * current;
            btnRefreshButtons[1].unhide();
            btnRefreshButtons[2].unhide();
            break;
         default:
            alert("You can't see this window because it will never appear.");
            break;
   }

   modifiedValue = preserveElement;

   // [].forEach.call(txtInput, function(el) {
   //    if (el.id != preserveElement.id){
   //       switch (el.id) {
   //          case "input-power":
   //                el.value = power * powerMultiplier;
   //                break;
   //          case "input-current":
   //                el.value = current * currentMultiplier;
   //                break;
   //          case "input-resistance":
   //                el.value = resistance * resistancMultplier;
   //                break;
   //          case "input-voltage":
   //                el.value = voltage * voltageMultiplier;
   //                break;
         
   //          default:
   //                break;
   //       }
   //    }
   // })
}
        // report value debug
   function reportValues() {
      console.log("power: " + power + "\nvoltage: " + voltage + "\ncurrent: " + current + "\nresistance: " + resistance);
   }