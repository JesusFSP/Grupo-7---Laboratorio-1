
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    const style = document.createElement('style');
    
    document.head.appendChild(style);

    //Estructura de la Calculadora
    const calcDiv = document.createElement('div');
    calcDiv.className = 'calc-container';

    const display = document.createElement('input');
    display.id = 'display';
    display.type = 'text';
    display.readOnly = true;
    calcDiv.appendChild(display);

    const btnGrid = document.createElement('div');
    btnGrid.className = 'buttons';

    // Definición de botones
    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '+', '=', 'C'
        
    ];

    let operacionActual = "";
    const pilaHistorial = []; // Estructura de Pila

    // Contenedor de Historial (Pila)
    const historyContainer = document.createElement('div');
    historyContainer.id = 'history-container';
    const historyTitle = document.createElement('h2');
    historyTitle.textContent = 'Historial (Pila)';
    const historyList = document.createElement('div');
    historyContainer.appendChild(historyTitle);
    historyContainer.appendChild(historyList);    

    calcDiv.appendChild(btnGrid);
    body.appendChild(calcDiv);
    body.appendChild(historyContainer);
});