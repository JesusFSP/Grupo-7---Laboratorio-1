
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

    // 3. Lógica y Creación de Botones
    buttons.forEach(text => {
        const btn = document.createElement('button');
        btn.textContent = text;
        
        if (text === '=') {
            btn.className = 'equal';
            btn.onclick = () => {
                try {
                    const resultado = eval(operacionActual);
                    const registro = `${operacionActual} = ${resultado}`;
                    
                    // Guardar en la pila
                    pilaHistorial.push(registro);
                    actualizarPilaVisual();
                    
                    operacionActual = resultado.toString();
                    display.value = operacionActual;
                } catch (e) {
                    display.value = "Error";
                    operacionActual = "";
                }
            };
        } else if (text === 'C') {
            btn.className = 'clear';
            btn.onclick = () => {
                operacionActual = "";
                display.value = "";
            };
        } else {
            btn.className = isNaN(text) && text !== '.' ? 'op' : 'num';
            btn.onclick = () => {
                operacionActual += text;
                display.value = operacionActual;
            };
        }
        btnGrid.appendChild(btn);
    });

    // Función para mostrar la pila al pie (LIFO)
    const actualizarPilaVisual = () => {
        historyList.innerHTML = "";
        // Recorremos la pila de forma inversa para mostrar el último arriba
        for (let i = pilaHistorial.length - 1; i >= 0; i--) {
            const item = document.createElement('div');
            item.className = 'stack-item';
            item.textContent = `[${i}] ${pilaHistorial[i]}`;
            historyList.appendChild(item);
        }
    };

    calcDiv.appendChild(btnGrid);
    body.appendChild(calcDiv);
    body.appendChild(historyContainer);
});