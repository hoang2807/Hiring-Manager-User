// store/users.ts
import { atom } from "nanostores";

interface Auth {
  accessToken: string;
  // accessTokenExpiredAt: number;
  // refreshToken: string;
  // refreshTokenExpiredAt: number;
}
export const $auth = atom<Auth>({
  accessToken: "",
});

export function addUser(accessToken: string) {
  $auth.set({ accessToken });
}
