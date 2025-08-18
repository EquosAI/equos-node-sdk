import axios, { AxiosError } from 'axios';
import { EquosError } from '../types/error.type';

export class ErrorUtils {
  static UNKNOWN_ERROR = new EquosError(
    'An unknown error occurred',
    'UNKNOWN_ERROR',
  );

  static convertToEquosError(e: unknown): never {
    if (axios.isAxiosError(e)) {
      throw new EquosError(e.response?.data?.message || e.message, e.code);
    } else if (e instanceof Error) {
      throw new EquosError(e.message);
    }

    throw ErrorUtils.UNKNOWN_ERROR;
  }
}
