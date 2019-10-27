import { ResponseCode } from "./response-code";
import { HttpStatuses } from "./http-statuses";

export class MetaResponse<resultType> {
    value: resultType;
    mainResponseStatus: ResponseCode;
    responseMessages: string[];
  
    setResponseCode(newStatus: HttpStatuses, message: string) {
        if (newStatus === HttpStatuses.InternalError) {
            this.mainResponseStatus = new ResponseCode(newStatus, message);
        }
        if (newStatus === HttpStatuses.BadRequest) {
            if (this.mainResponseStatus.code !== HttpStatuses.BadRequest){
                this.responseMessages = [];
            }
            this.responseMessages.push(message);
        }
    }
  }