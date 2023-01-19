function calculateTotal (event) {

event.preventDefault();

var mondayTips = document.getElementById("mondayTips").value;
var tuesdayTips = document.getElementById("tuesdayTips").value;
var wednesdayTips = document.getElementById("wednesdayTips").value;
var thursdayTips = document.getElementById("thursdayTips").value;
var fridayTips = document.getElementById("fridayTips").value;
var saturdayTips = document.getElementById("saturdayTips").value;
var sundayTips = document.getElementById("sundayTips").value;

var tipsTotal = parseFloat(mondayTips) + parseFloat(tuesdayTips) + parseFloat(wednesdayTips) + parseFloat(thursdayTips) + parseFloat(fridayTips) + parseFloat(saturdayTips) + parseFloat(sundayTips);
 
  var fullCheck = document.querySelector("#fullcheck").value;
  var hoursTotal = document.querySelector("#hoursWorked").value;
  var totalMoneyMade = (parseFloat(fullCheck)  + parseFloat(tipsTotal));
  var totalRate = (parseFloat(fullCheck) + parseFloat(tipsTotal)) / hoursTotal;
  document.querySelector("#result").innerText = `Your total hourly rate is: ${totalRate.toFixed(2)}`;
  document.querySelector("#totalresult").innerText = `You made a total of ${totalMoneyMade} this week`;4
};

function resetFields() {
  
  document.getElementById("mondayTips").value = "";
  document.getElementById("tuesdayTips").value = "";
  document.getElementById("wednesdayTips").value = "";
  document.getElementById("thursdayTips").value = "";
  document.getElementById("fridayTips").value = "";
  document.getElementById("saturdayTips").value = "";
  document.getElementById("sundayTips").value = "";
  document.getElementById("fullcheck").value = "";
  document.getElementById("hoursWorked").value = "";
  document.getElementById("result").innerHTML = "";
}
