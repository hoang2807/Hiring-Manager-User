// store/users.ts
import { atom } from "nanostores";

interface Auth {
  accessToken: string;
  id: string;
  // accessTokenExpiredAt: number;
  // refreshToken: string;
  // refreshTokenExpiredAt: number;
}
export const $auth = atom<Auth>({
  accessToken: "test",
  id: "test",
});

export function addUser(accessToken = "", id = "") {
  $auth.set({ accessToken, id });
}

class User {
  private id: string;
  private token: string;
  constructor() {
    this.id = "";
    this.token = "";
  }

  setId(id: string) {
    this.id = id;
  }

  setToken(token: string) {
    this.token = token;
  }

  getId() {
    return this.id;
  }

  getToken() {
    return this.token;
  }
}

const user = new User();
export default user;
