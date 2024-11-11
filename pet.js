const petName = document.getElementById('petName')
const ownerName = document.getElementById('ownerName')
const species = document.getElementById('species')
const breed = document.getElementById('breed')


const myForm = document.getElementById('pet-form')


class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName
    this.ownerName = _ownerName
    this.species = _species
    this.breed = _breed
  }
}

myForm.addEventListener('submit', function (e) {
  e.preventDefault()
  const animale = new Pet(
   petName.value,
   ownerName.value,
   species.value,
   breed.value
  )

  console.log('UTENTE CREATO', animale)
})