const modal = document.getElementById('leaveContactsModal');
const openBtns = document.querySelectorAll(".try-button");

openBtns.forEach(btn => btn.onclick = () => modal.style.display = "block");

window.onclick = e => {
    if (e.target == modal) modal.style.display = "none";
};

document.addEventListener('DOMContentLoaded', () => {
    const splide = new Splide('.first', {
        type: 'loop',
        focus: 'center',
        // perPage: 1,
        gap: 32,
        autoWidth: true,
        arrows: false,
        pagination: false,
    });
    splide.mount();
});

document.addEventListener('DOMContentLoaded', () => {
    const splide = new Splide('.second', {
        type: 'slide',
        focus: 'center',
        perPage: 3,
        perMove: 1,
        gap: 30,
        arrows: false,
        pagination: false,
        updateOnMove: true,
        breakpoints: {
            1024: {
                perPage: 1,
                type: 'slide',
            },
        }
    });
    splide.mount();
});