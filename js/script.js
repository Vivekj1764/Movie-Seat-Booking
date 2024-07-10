document.addEventListener('DOMContentLoaded', () => {
    const seats = document.querySelectorAll('.seating-chart .seat:not(.occupied)');
    const checkoutBtn = document.querySelector('.checkout-btn');

    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            seat.classList.toggle('selected');
        });
    });

    checkoutBtn.addEventListener('click', () => {
        const selectedSeats = document.querySelectorAll('.seating-chart .seat.selected');
        const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
        console.log(seatsIndex);
        // Here you can handle the seat selection (e.g., send to server or process further)
    });
});
