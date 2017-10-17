// Ejemplo de código en Typescript

    interface DatosLibro{
    
        titulo: any; // igual que no poner nada
        tematica:string;
        paginas:number;
        editorial?: string; //propiedades opcionales a traves de la interfaz
        isbn: string | number; //no admito boolean pero si puede ser o como string o como number
        mostrarDatos: Function;
        calcularPrecio(iva: number): number;
        
    }

    class Libro implements DatosLibro{
        tematica;
        paginas;
        autor: {nombre: string; apellidos: string};
        isbn;
        titulo;
    
        constructor(tematica, paginas) {
            
        }
        mostrarDatos(){}

        calcularPrecio(iva: number) : number{
            return 1;

        }

        prueba() : void{}
    }
    
    class LibroTecnico extends Libro {
        
        precio: number;
        capitulos: Array<string>;

        constructor(tematica, paginas, precio) {
            super(tematica, paginas);
            this.capitulos = [];
            this.precio = precio;
            // ...
        }
        
        precioTotal(pValor:number = 1) {
            console.log(pValor * this.precio);
        }
    }
    
    let oLibro = new LibroTecnico("Informatica", 129, 30);
    
    //oLibro.Autor = "Pepe"
    console.log(oLibro);