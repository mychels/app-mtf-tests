class FoodScreen {
  get foodName() {
    return $("id:br.com.mrs.mtf:id/edtNomealimentoCA");
  }

  get saveButton() {
    return $("id:br.com.mrs.mtf:id/btnSalvarCA");
  }

  get cancelButton() {
    return $("//*[@text='Cancelar']");
  }

  get deleteButton() {
    return $("//*[@text='Excluir']");
  }
}

export default new FoodScreen();
