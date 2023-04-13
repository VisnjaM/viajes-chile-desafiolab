// HABILITAR COMPONENTES DE BOOTSTRAP
// tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// form submit
document.getElementById("formulario").addEventListener("submit", (e) => {
    e.preventDefault();
    const date = new Date(Date.now());
    const popup = document.getElementById('popup');
    document.getElementById("date").textContent = date.toLocaleString();
    const toast = bootstrap.Toast.getOrCreateInstance(popup);
    toast.show()
    setTimeout(() => {
        toast.hide()
    }, 2500)
    e.target.reset();
})