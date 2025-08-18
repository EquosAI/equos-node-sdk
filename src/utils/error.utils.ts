import { AxiosError } from 'axios';
import { EquosError } from '../types/error.type';

export class ErrorUtils {
  static UNKNOWN_ERROR = new EquosError(
    'An unknown error occurred',
    'UNKNOWN_ERROR',
  );

  static convertToEquosError(e: unknown): never {
    if (e instanceof AxiosError) {
      throw new EquosError(e.response?.data?.message, e.code);
    } else if (e instanceof Error) {
      throw new EquosError(e.message);
    }

    throw ErrorUtils.UNKNOWN_ERROR;
  }
}
