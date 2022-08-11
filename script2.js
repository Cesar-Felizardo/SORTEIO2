



function selectOptions(values) {
    
    const status = document.querySelector(".status")
    
    if(values == 'PAGO') {
        status.style.background = 'green'
    } else if (values == 'CANCELADO') {
        status.style.background = 'red'
    } else if (values == 'Á PAGAR') {
        status.style.background = 'orange'
    } else if (values == 'SELECIONE') {
        status.style.background = '#789192'
    }else {
        status.style.background = 'transparent'
    }
} 


