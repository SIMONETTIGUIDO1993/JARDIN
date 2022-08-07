let salaAzul: number = 40;
let salaVerde: number = 35;
let salaAmarilla: number = 30;

let cantidadDeAlumnos: number = Number(prompt(`ingrese cantidad de Alumnos:`));

if (cantidadDeAlumnos <= salaAmarilla) {
  console.log(`AMARILLA`);
} else {
  if (cantidadDeAlumnos <= salaVerde) {
    console.log(`VERDE`);
  } else {
    if (cantidadDeAlumnos <= salaAzul) {
      console.log(`AZUL`);
    } else {
      console.log(`cantidad exedida`);
    }
  }
}
