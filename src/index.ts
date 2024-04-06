import { getAPISpecification } from "@mmrakt/orval-test-backend/src/api/aPISpecification";

const { listPets, createPets, showPetById } = getAPISpecification();

console.log(listPets);
// const res = await listPets();
// res.data.forEach((pet) => {
//   console.log(pet.id, pet.name);
// });
