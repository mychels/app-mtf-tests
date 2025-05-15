import { addFood } from "../../helpers/food.helper.js";

describe("Alimento - Cadastro", () => {
  it("Deve cadastrar um novo alimento com sucesso", async () => {
    await addFood();
  });
});
