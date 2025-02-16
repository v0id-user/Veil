interface User {
  email: string;
  name: string;
  avatar: string;
  premium: boolean;
  createdAt: Date;
}

type Status = 'ok' | 'error';

interface Message {
  status: Status;
  message: string;
}

interface AuthResponse {
  user: User;
}
