export type AuthResponse = {
  message: string;
  data: {
    user: {
      sub: number;
      email: string;
      user_permission: string[];
    };
    session: string;
  };
};
