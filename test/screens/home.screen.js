class HomeScreen {
  get foodMenu() {
    return $("id:br.com.mrs.mtf:id/rlAlimento");
  }

  get unitMenu() {
    return $("id:br.com.mrs.mtf:id/rlUnidade");
  }

  get dietMenu() {
    return $("id:br.com.mrs.mtf:id/rlDieta");
  }
}

export default new HomeScreen();
