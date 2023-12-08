


function taker () { const entrada =  document.getElementById("Entrada").value;

    if (entrada.includes('+')) { 
        const numero = entrada.split('+').map (n => parseFloat(n));
        const resultado = Soma(numero[0],numero[1]); }


    if (entrada.includes('-')) { 
    const numero = entrada.split('-').map (n => parseFloat(n));
    alert(numero[0]);
    const resultado = Sub(numero[0],numero[1]); }
    

    if (entrada.includes('x'))  {
    const numero = entrada.split('x').map (n => parseFloat(n));
    const resultado = Multi(numero[0],numero[1]);} 
    

    if (entrada.includes('deivide&;')){  
    const numero = entrada.split('-').map (n => parseFloat(n));
    const resultado = Sub(numero[0],numero[1]); 
    }
}   
