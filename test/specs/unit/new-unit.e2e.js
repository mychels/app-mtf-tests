import { addUnit } from "../../helpers/unit.helper.js";

describe("Unidade - Cadastro", () => {
  it("Deve cadastrar uma nova unidade de medida com sucesso", async () => {
    await addUnit();
  });
});
