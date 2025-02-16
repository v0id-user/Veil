enum AuthMessageCode {
  ACCOUNT_CREATED = 'ACCOUNT_CREATED',
  ACCOUNT_ALREADY_EXISTS = 'ACCOUNT_ALREADY_EXISTS',
  ACCOUNT_NOT_FOUND = 'ACCOUNT_NOT_FOUND',
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
}

type Language = 'en' | 'ar';
type Status = 'ok' | 'error';

export const authMessages: Record<Language, Record<AuthMessageCode, string>> = {
  en: {
    [AuthMessageCode.ACCOUNT_CREATED]: 'Account created successfully',
    [AuthMessageCode.ACCOUNT_ALREADY_EXISTS]: 'Account already exists',
    [AuthMessageCode.ACCOUNT_NOT_FOUND]: 'Account not found',
    [AuthMessageCode.INVALID_CREDENTIALS]: 'Invalid credentials',
  },
  ar: {
    [AuthMessageCode.ACCOUNT_CREATED]: 'تم إنشاء الحساب بنجاح',
    [AuthMessageCode.ACCOUNT_ALREADY_EXISTS]: 'الحساب موجود بالفعل',
    [AuthMessageCode.ACCOUNT_NOT_FOUND]: 'الحساب غير موجود',
    [AuthMessageCode.INVALID_CREDENTIALS]: 'بيانات الدخول غير صالحة',
  },
};

export interface IAuthMessage {
  status: Status;
  language?: Language;
  code?: AuthMessageCode;
  getMessage: (language?: Language, code?: AuthMessageCode) => string;
}

class AuthMessage implements IAuthMessage {
  constructor(
    public status: Status,
    public language: Language = 'en',
    public code?: AuthMessageCode
  ) {
    this.status = status;
    this.language = language;
    this.code = code;
  }

  getMessage(
    language: Language = this.language,
    code: AuthMessageCode | undefined = this.code
  ): string {
    if (!language || code === undefined) {
      return 'Message not found';
    }
    return authMessages[language][code];
  }
}

export { AuthMessageCode, AuthMessage };
