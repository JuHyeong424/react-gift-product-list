export const isValidPhoneFlexible = (phone: string): boolean =>
  /^010\d{8}$|^010-\d{4}-\d{4}$/.test(phone);

export const isValidEmailRegex = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
