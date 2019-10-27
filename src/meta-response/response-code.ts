import { HttpStatuses } from "./http-statuses";

export class ResponseCode {
  constructor(httpCode: HttpStatuses, message: string) {
    this.code = httpCode;
    this.message = message;
  }
  code: number;
  message: string;
}