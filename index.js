// Write your solution in this file!
 const employee = {
    name: "Fred", //(key) 
    age: 31, //(Value)
 }
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmp = {...employee};
    newEmp[key] = value;

    return newEmp;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmp = {...employee}
    delete newEmp[key]
    return newEmp;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
