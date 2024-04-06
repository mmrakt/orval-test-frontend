import { Pet } from "@mmrakt/orval-test-backend/src/api/aPISpecification.schemas";
import { getAPISpecification } from "@mmrakt/orval-test-backend/src/api/aPISpecification";

const { listPets, createPets, showPetById } = getAPISpecification();

const res = await listPets();
res.data.forEach((pet) => {
  console.log(pet.id, pet.name);
});
