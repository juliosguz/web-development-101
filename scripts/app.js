const animales = [
  'Gato',
  'Perro',
  'Pez',
  'Delfin',
  'Cocodrilo'
]

function listarAnimales () {
  console.log(animales)
}

function mostrarAnimal (posicion) {
  const texto = 'El animal es: ' + animales[posicion]
  console.log(texto)
}

mostrarAnimal(2)
mostrarAnimal(1)
mostrarAnimal(4)
listarAnimales()
