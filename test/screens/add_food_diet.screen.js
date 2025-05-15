class AddFoodDiet {
  get food() {
    return $("id:br.com.mrs.mtf:id/spnAlimentoAA");
  }

  get foodQuantity() {
    return $("id:br.com.mrs.mtf:id/edtQtdalimentoAA");
  }

  get unit() {
    return $("id:br.com.mrs.mtf:id/spnUnidademedidaAA");
  }

  get addFoodButton() {
    return $("id:br.com.mrs.mtf:id/btnSalvarAA");
  }

  get saveButton() {
    return $("id:br.com.mrs.mtf:id/menusalvarAA");
  }
}

export default new AddFoodDiet();
