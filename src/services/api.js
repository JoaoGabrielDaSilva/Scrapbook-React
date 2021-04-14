class Api {
  async login({ email, password }) {
    if (email === "joao@gmail.com" && password === 1234) return true;
    return false;
  }
}

export default new Api();
