import { EquosError } from '../types/error.type';

export class ErrorUtils {
  static UNKNOWN_ERROR = new EquosError(
    'An unknown error occurred',
    'UNKNOWN_ERROR',
  );

  static convertToEquosError(e: any): never {
    throw new EquosError(
      e.response?.data?.message || e.message || 'An unknown error occured.',
      e.code,
    );
  }
}
