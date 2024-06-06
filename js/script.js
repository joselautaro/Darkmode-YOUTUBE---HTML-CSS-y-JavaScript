document.addEventListener('DOMContentLoaded', () =>{

    const toggleButton = document.getElementById('toggle-button')

    toggleButton.addEventListener('click', () =>{
        document.body.classList.toggle('dark-mode');
        toggleButton.classList.toggle('dark-mode');

        if(document.body.classList.contains('dark-mode')){
            toggleButton.textContent = 'Cambiar a modo claro'
        }else{
            toggleButton.textContent = 'Cambiar a modo oscuro';
        }
    })
})