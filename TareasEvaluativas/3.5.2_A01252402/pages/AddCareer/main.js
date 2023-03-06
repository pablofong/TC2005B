
function saveCareers() {
    let jobId = document.getElementById("job-id").value;
    let jobPosition = document.getElementById("job-position").value;
    let jobType = document.getElementById("job-type").value;
    let jobCity = document.getElementById("job-city").value;
    let jobVacancy = document.getElementById("job-vacancy").value;
    let jobDescription = document.getElementById("job-description").value;

    let careers_records = new Array();
    careers_records = JSON.parse(localStorage.getItem("careers")) ? JSON.parse(localStorage.getItem("careers")) : []
    if (careers_records.some((v) => { return v.jobId == jobId })) { // evitar duplicados
        alert("career already posted");
    }
    else {
        careers_records.push({
            "jobId": jobId,
            "jobPosition": jobPosition,
            "jobType": jobType,
            "jobCity": jobCity,
            "jobVacancy": jobVacancy,
            "jobDescription": jobDescription,
        })
        localStorage.setItem("careers", JSON.stringify(careers_records));
    }
}

function resetForm() {
    document.getElementById('job-form').reset();
}