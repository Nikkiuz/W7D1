class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName
    this.ownerName = _ownerName
    this.species = _species
    this.breed = _breed
  }
  sameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName;
}

}

function displayPets() {
    petList.innerHTML = '';
    pets.forEach(pet => {
        const listItem = document.createElement('li');
        listItem.textContent = `Nome: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
        petList.appendChild(listItem);
    });
}

function checkSameOwner() {
    for (let i = 0; i < pets.length; i++) {
        for (let j = i + 1; j < pets.length; j++) {
            if (pets[i].sameOwner(pets[j])) {
                console.log(`${pets[i].petName} e ${pets[j].petName} condividono lo stesso proprietario: ${pets[i].ownerName}`);
            }
        }
    }
}


const petName = document.getElementById('petName')
const ownerName = document.getElementById('ownerName')
const species = document.getElementById('species')
const breed = document.getElementById('breed')
const myForm = document.getElementById('pet-form')
const pets = [];


myForm.addEventListener('submit', function (e) {
  e.preventDefault()
  const animale = new Pet(
   petName.value,
   ownerName.value,
   species.value,
   breed.value
  ) 
   pets.push(animale);
   myForm.reset();
   displayPets();
   checkSameOwner();
})
