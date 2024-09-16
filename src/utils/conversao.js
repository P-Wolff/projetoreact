

export function tratarNumber(valor) {

    return(
        Number( valor.replaceAll( ',', '.' ) ) 
    );
}