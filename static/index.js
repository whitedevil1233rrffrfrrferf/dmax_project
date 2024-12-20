function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);  // Clear the previous timer
        timeoutId = setTimeout(() => func.apply(this, args), delay);  // Start a new timer
    };
}
function showAlert() {
    var employeeName = document.getElementById('employee_name').value;
    
    
}
document.getElementById('employee_name').addEventListener('input', debounce(showAlert, 2000));
function searchEmployee(){
    
        var employeeName = document.getElementById('employee_name').value;
        
        // Send an Axios POST request
        axios.post('/search', {
            employee_name: employeeName
        })
        .then(function (response) {
            var employees = response.data.employees;
            
            var listHtml = '';
            
            if (employees.length > 0) {
                employees.forEach(function(employee) {
                    console.log("Employee details:", employee);
                    var employeeDetails = JSON.stringify(employee)  // Convert the employee object to a string for use in `onclick`
                    console.log("Employee details stringified:", employeeDetails);
                    var listItemStyle = "list-style: none ; color: black;";
                    listHtml += `<a href="#" data-employee='${encodeURIComponent(employeeDetails)}' onclick="selectEmployee(this)"><li style="${listItemStyle}">
                                    
                                    ${employee.employee_name} (${employee.employee_id})
                                    
                                 </li> </a>`;
                });
            } else {
                listHtml += '<li>No employees found</li>';
            }
            toggleProjectTable()
            listHtml += '</ul>';
            document.getElementById('employee-list').innerHTML = listHtml;
            document.getElementById('employee-list').style.display = 'block';
            // document.getElementById('employee_name').style.width='100%'
            document.querySelector('.form_div').style.height = 'auto';
            // document.getElementById('employee-list').style.width='17rem'
            // document.querySelector('.flex_first_div').style.gap = '9rem';
        })
        .catch(function (error) {
            console.error('Error:', error);
        });
    
}
document.getElementById('employee_name').addEventListener('input', debounce(searchEmployee, 1000));

    // Function to handle when an employee is clicked
// Function to handle when an employee is clicked
function selectEmployee(element) {
    var employeeDetails = decodeURIComponent(element.getAttribute('data-employee'));
    
    try {
        var employee = JSON.parse(employeeDetails);
        
        console.log(employeeDetails)
        basic_details=[
            'employee_name',
            'employee_id',
            'employee_email',
            'project',
            'designation'
        ]
        basic_details.forEach(function(detail){
            var inputField=document.getElementById(detail)
            if(inputField){
                inputField.value=employee[detail]
            }
        })
        Object.keys(employee).forEach(function(key){
            if (key.endsWith('_target')){
                var inputField=document.getElementById(key);
                if(inputField){
                    inputField.value=employee[key]
                }
            }
        })
        toggleProjectTable(); 
        toggleDesignationTable();
        // Loop through each key-value pair and populate the corresponding input field
        // for (var key in employee) {
            
        //     if (employee.hasOwnProperty(key)) {
        //         var inputField = document.getElementById(key);
        //         console.log(inputField)
        //         if (inputField) {
        //             inputField.value = employee[key];
        //         }
        //     }
        // }
    } catch (e) {
        console.error('Failed to parse employee details:', e);
    }

    document.getElementById('employee-list').style.display = 'none';
}
const currentDate=new Date()
const formattedDate = currentDate.toISOString().split('T')[0];
document.getElementById('today_date').value=formattedDate



function toggleProjectTable() {
    const projectSelectValue = document.getElementById("project").value;
    
    const projectSections={
        "Akyrian":["test_cases_section","defects_section","test_scripts_section","others_section"],
        "Auxo":["test_cases_section","defects_section","test_scripts_section","others_section"],
        "Avanti":["test_cases_section","defects_section","others_section"],
        "Bench":["training_section"],
        "Training":["training_section"],
        "Fora Travels":["test_cases_section","defects_section","test_scripts_section","others_section"],
        "Indihood":["test_cases_section","defects_section","test_scripts_section","others_section"],
        "IPS":["test_cases_section","defects_section","test_scripts_section","others_section"],
        "IQHive":["test_cases_section","defects_section","test_scripts_section","others_section"],
        "LevelBlue":["test_cases_section","defects_section","test_scripts_section","others_section"],
        "Opus Clip":["test_cases_section","defects_section","others_section"],
        "Web Development":["web_section"]
    }
    const allSections = new Set(Object.values(projectSections).flat());
    allSections.forEach(sectionId => {
        document.getElementById(sectionId).style.display = "none";
    });
    if (projectSections[projectSelectValue]) {
        projectSections[projectSelectValue].forEach(sectionId => {
            document.getElementById(sectionId).style.display = "block";
        });
    }
}

function toggleDesignationTable(){
    const designationSelect = document.getElementById("designation").value;
    
    const newinit=document.getElementById("newInit");
    if (designationSelect === "intern" || designationSelect === "jr_qa_engineer") {
        newinit.style.display="none"
    }
    else{
        newinit.style.display=""
    }
}

document.getElementById("myForm").addEventListener("keydown", function(event) {
    // Prevent form submission on Enter key
    if (event.key === "Enter") {
        event.preventDefault();  // Prevent form submission
        document.getElementById("employee-list").style.display = "none"; // Hide datalist
    }
});
     

