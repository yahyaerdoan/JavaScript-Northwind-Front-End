/* fetch("http://dummy.restapiexample.com/api/v1/employees")
  .then((response) => Promise.all([response.json()]))
  .then((responseJson) => {
    console.log(responseJson);
  }); */

fetch("http://dummy.restapiexample.com/api/v1/employees").then((response) => {
  response.json().then((data) => {
    console.log(data.data);
    if (data.data.length > 0) {
      var temp = "";
      data.data.forEach((itemData) => {       
        temp += "<td>" + itemData.id + "</td>";
        temp += "<td>" + itemData.employee_name + "</td>";
        temp += "<td>" + itemData.employee_salary + "</td>";
        temp += "<td>" + itemData.employee_age + "</td></tr>";      
      });
      document.getElementById("data").innerHTML = temp;
    }
  });
});
