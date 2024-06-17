function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    flatpickr("#date", {
        dateFormat: "Y-m-d",
        minDate: "today"
    });

    flatpickr("#time", {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        time_24hr: true
    });
});
