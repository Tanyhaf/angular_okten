import {IComment} from "./IComments";

export interface ICommentDetails extends IComment{
  name: string;
  email: string;
}
