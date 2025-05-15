import { addFood } from "../../helpers/food.helper.js";
import { addUnit } from "../../helpers/unit.helper.js";
import { addDiet } from "../../helpers/diet.helper.js";

describe("Dieta - Cadastro", () => {
  before(async () => {
    await addFood();
    await addUnit();
  });

  it("Deve cadastrar uma nova dieta com sucesso", async () => {
    await addDiet();
  });
});
