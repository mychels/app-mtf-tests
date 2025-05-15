class Tools {
  getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
}

export default new Tools();
