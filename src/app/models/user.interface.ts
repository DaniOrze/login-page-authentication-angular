export interface User {
  name: string;
  email: string;
  password: string;
  role: string;
  id?: number;
}

export interface UserLogin {
  accessToken: string;
  user: User;
}
