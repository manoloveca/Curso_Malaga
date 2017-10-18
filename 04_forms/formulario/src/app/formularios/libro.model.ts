export interface Pais {
    codigo: string;
    nombre: string;
}


export interface Libro {
    autor: string;
    titulo: string;
    editorial: string;
    exlibris: boolean;
    numpag: number;
    genero: string;
    pais: Pais;
}

