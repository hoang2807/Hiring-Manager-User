// store/users.ts
import { atom } from "nanostores";

interface Auth {
  accessToken: string;
  accessTokenExpiredAt: number;
  refreshToken: string;
  refreshTokenExpiredAt: number;
}
export const $auth = atom<Auth[]>([]);

export function addUser(auth: Auth) {
  $auth.set([...$auth.get(), auth]);
}
