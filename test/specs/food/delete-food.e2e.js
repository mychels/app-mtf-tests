import { addAndDeleteFood } from "../../helpers/food.helper.js";

describe("Alimento - Exclusão", () => {
  it("Deve excluir alimento que acabou de ser cadastrado", async () => {
    await addAndDeleteFood();
  });
});
