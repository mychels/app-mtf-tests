class UnitScreen {
  get unitName() {
    return $("id:br.com.mrs.mtf:id/edtNomeunidade");
  }

  get saveButton() {
    return $("id:br.com.mrs.mtf:id/btnSalvarUnidade");
  }
}

export default new UnitScreen();
