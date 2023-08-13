export interface User {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface UserLogin {
  accessToken: string;
  user: User;
}
