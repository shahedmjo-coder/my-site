document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("تم الحجز بنجاح ");

    document.getElementById("bookingForm").reset();
});