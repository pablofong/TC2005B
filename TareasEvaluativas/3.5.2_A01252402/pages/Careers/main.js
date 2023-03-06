
window.addEventListener('load', function (event) {
    showCareers();
});


function showCareers() {
    let careers_records = JSON.parse(localStorage.getItem("careers")) || [];
    if (careers_records) {
        for (let i = 0; i < careers_records.length; i++) {
            let addRow = document.createElement('tr');
            addRow.innerHTML = `
                <td colspan="1">${careers_records[i].jobId}</td>
                <td colspan="1">${careers_records[i].jobPosition}</td>
                <td colspan="1">${careers_records[i].jobCity}</td>
                <td colspan="1">${careers_records[i].jobType}</td>
                <td colspan="1">${careers_records[i].jobVacancy}</td>
                <td colspan="1"></td>
            `
            document.getElementById("showCareers").appendChild(addRow);

            let secondRow = document.createElement('tr');
            secondRow.classList.add("bg-light", "border-bottom", "border-danger");
            secondRow.innerHTML = `
                <td>Qualifications</td>
                <td colspan="4">${careers_records[i].jobDescription}</td>
                <td><button type="button" class="btn btn-outline-secondary">Apply</button></td>
            `;
            document.getElementById("showCareers").appendChild(secondRow);
        }
    }
}

