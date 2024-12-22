// Copy functionality
document.querySelectorAll('.copy-field').forEach(function(cell) {
    cell.addEventListener('click', function() {
        this.title = "copied!";

        const tempInput = document.createElement('input');
        tempInput.value = cell.innerText;
        document.body.appendChild(tempInput);

        tempInput.select();
        tempInput.setSelectionRange(0, 99999);

        document.execCommand('copy');

        document.body.removeChild(tempInput);
        const alertBox = document.getElementById('alert');
        alertBox.innerText = `"${cell.innerText}" has been copied to clipboard!`;
        alertBox.style.display = 'block';
        setTimeout(() => {
            alertBox.style.display = 'none';
        }, 1200);
    });
});

// Search functionality
const searchInput = document.getElementById('search');
const tableRows = document.querySelectorAll('#course-table tr');

searchInput.addEventListener('input', function() {
    const searchValue = searchInput.value.toLowerCase();

    tableRows.forEach(row => {
        const course = row.cells[1].innerText.toLowerCase();

        if (course.includes(searchValue)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});