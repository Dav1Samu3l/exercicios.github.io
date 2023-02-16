function enviar() {
    let input1 = document.getElementById('input1');
    let enviar = document.getElementById('enviar');
    enviar.addEventListener('click', (Event) => {
        Event.preventDefault();
        if (input1.value % 2 == 0) {
            console.log(`  o numero ${input1.value} é par `);
        } else {
            console.log(`  o numero ${input1.value} é impar `);
        }
    })
}
enviar()
