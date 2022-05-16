import {IUser} from "./IUser";

export interface IUserDetails extends IUser{
  userName: string;
  email: string;
}
