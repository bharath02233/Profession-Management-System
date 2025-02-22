let employees = [];
let employeeId = 1;

function addEmployee() {
    const name = document.getElementById("name").value.trim();
    const profession = document.getElementById("profession").value.trim();
    const age = document.getElementById("age").value.trim();
    const message = document.getElementById("message");

    if (!name || !profession || !age) {
        message.textContent = "Error: All fields are required!";
        message.className = "error";
        return;
    }

    const newEmployee = {
        id: employeeId++,
        name,
        profession,
        age: parseInt(age)
    };

    employees.push(newEmployee);
    message.textContent = "Employee added successfully!";
    message.className = "success";

    displayEmployees();
    clearInputs();
}

function displayEmployees() {
    const employeeList = document.getElementById("employeeList");
    employeeList.innerHTML = "";

    employees.forEach(employee => {
        const div = document.createElement("div");
        div.className = "employee-item";
        div.innerHTML = `
            <span>${employee.name} - ${employee.profession} - Age: ${employee.age}</span>
            <button class="btn delete-btn" onclick="deleteEmployee(${employee.id})">Delete</button>
        `;
        employeeList.appendChild(div);
    });
}

function deleteEmployee(id) {
    employees = employees.filter(emp => emp.id !== id);
    displayEmployees();
}

function clearInputs() {
    document.getElementById("name").value = "";
    document.getElementById("profession").value = "";
    document.getElementById("age").value = "";
}
