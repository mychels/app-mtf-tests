class DietScreen {
  get dietName() {
    return $("id:br.com.mrs.mtf:id/edtNomedietaCD");
  }

  get cafeDaManha() {
    return $("id:br.com.mrs.mtf:id/rlCafemanha");
  }

  get saveButton() {
    return $("id:br.com.mrs.mtf:id/menusalvarCD");
  }
}

export default new DietScreen();
