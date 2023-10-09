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
    (this.petName = nameInput.value),
    (this.petOwner = ownerInput.value),
    (this.species = speciesInput.value),
    (this.breed = breedInput.value)
  )

  pets.push(newPet)

  const petA = new Pet()
  const petB = new Pet()

  // funzione per comparare i pet
  const comparePets = function (pet1, pet2) {
    if (pet1.ownerName === pet2.ownerName) {
      return true
    } else {
      return false
    }
  }

  console.log(comparePets(petA, petB))
  // svuoto campi
  nameInput.value = ''
  ownerInput.value = ''
  speciesInput.value = ''
  breedInput.value = ''

  petList()
})
