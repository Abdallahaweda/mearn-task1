export interface IRegisterUser {
  email: string;
  name: string;
  password: string;
  phoneNumber: string;
}
export interface ILoginUser {
  email: string;

  password: string;
}
export interface IStoredUser {
  name: '';
  token: '';
}
