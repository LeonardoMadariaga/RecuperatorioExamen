let cantidadTotal: number = Number(
  prompt("Ingrese la cantidad de productos que va a llevar: ")
);
let cantidad: number[] = new Array(cantidadTotal);
let productos: string[] = new Array(cantidadTotal);
let precioUnitario: number[] = new Array(cantidadTotal);
let cantidadCCP: number[] = new Array(cantidadTotal);

function Compra(
  productos: string[],
  dimension: number[],
  precioUnitario: number[],
  cantidadCCP: number[]
): any {
  let texto: string = " ";
  let indice: number = 0;
  let sumaTotal: number = 0;

  for (indice = 0; indice < cantidadTotal; indice++) {
    productos[indice] = String(prompt("Ingrese el nombre de los productos: "));
    cantidadCCP[indice] = Number(
      prompt("Ingrese la cantidad de cada producto: ")
    );
    texto = `Compraste ${cantidadCCP[indice]} unidades de: ${productos[indice]}`;
    console.log(texto);
  }

  for (indice = 0; indice < cantidadTotal; indice++) {
    precioUnitario[indice] = Number(prompt("Ingrese el precio del producto: "));
    console.log(
      "El precio unitario del producto es de: $" + precioUnitario[indice]
    );
    sumaTotal += precioUnitario[indice] * cantidadCCP[indice];
  }

  console.log("El precio total a pagar es de: $" + sumaTotal);

  if (sumaTotal >= 1000 && sumaTotal < 2000) {
    console.log("!Felicitaciones, estas participando por una TV Led!");
  } else if (sumaTotal >= 2000 && sumaTotal < 3000) {
    console.log("!Felicitaciones, estas participando por una Moto 0KM!");
  } else if (sumaTotal >= 3000) {
    console.log("!Felicitaciones, estas participando por un auto 0KM!");
  }
}

Compra(productos, cantidad, precioUnitario, cantidadCCP);
