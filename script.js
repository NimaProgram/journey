const sizer = document.getElementById("sizer")

window.onload = () => {
    getSize();
}

const getSize = () => {sizer.innerHTML = `${innerWidth} x ${innerHeight}`}

    window.addEventListener('resize', () => {
    sizer.innerHTML = `${innerWidth} x ${innerHeight}`
});
