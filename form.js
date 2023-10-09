// prendo i riferimenti degli input
const nameInput = document.getElementById('pet-name')
const ownerInput = document.getElementById('pet-owner')
const speciesInput = document.getElementById('pet-species')
const breedInput = document.getElementById('pet-breed')

// creo lista dei pets
const pets = []

// creo classe Pets
class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName
    this.ownerName = _ownerName
    this.species = _species
    this.breed = _breed
  }
  // funzione per comparare i pet
  comparePets(pet) {
    for (let i = 0; i < pets.length; i++) {
      if (this.ownerName === pet[i].ownerName) {
        console.log(true)
      } else {
        console.log(false)
      }
    }
  }
}

// scrivo la lista
const petList = function () {
  const list = document.querySelector('ul')
  list.innerHTML = ''

  pets.forEach((pet) => {
    const newLi = document.createElement('li')
    newLi.innerText = `Mi chiamo ${pet.petName}, il mio padrone è ${pet.ownerName} e sono un/a ${pet.species} ${pet.breed}`
    list.appendChild(newLi)
  })
}

// valori del form
const formValues = document.querySelector('form')
formValues.addEventListener('submit', function (e) {
  e.preventDefault()

  const newPet = new Pet(
    nameInput.value,
    ownerInput.value,
    speciesInput.value,
    breedInput.value
  )

  pets.push(newPet)
  if (pets.length === 2) {
    newPet.comparePets(pets[0].ownerName, pets[1].ownerName)
  }

  // svuoto campi
  nameInput.value = ''
  ownerInput.value = ''
  speciesInput.value = ''
  breedInput.value = ''

  petList()
})
