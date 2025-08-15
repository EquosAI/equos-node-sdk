import axios from 'axios';

export class HttpUtils {
  constructor(
    private readonly baseUrl: string,
    private readonly version: string,
    private readonly apiKey: string,
  ) {}

  private getPath(path: string): string {
    return `${this.baseUrl}/${this.version}${path}`;
  }

  async get<T>(path: string): Promise<T> {
    return axios
      .get<T>(this.getPath(path), {
        headers: {
          'x-api-key': this.apiKey,
        },
      })
      .then((response) => response.data);
  }

  async post<T, U>(path: string, data: T): Promise<U> {
    return axios
      .post<U>(this.getPath(path), data, {
        headers: {
          'x-api-key': this.apiKey,
        },
      })
      .then((response) => response.data);
  }

  async patch<T, U>(path: string, data: T): Promise<U> {
    return axios
      .patch<U>(this.getPath(path), data, {
        headers: {
          'x-api-key': this.apiKey,
        },
      })
      .then((response) => response.data);
  }
}
