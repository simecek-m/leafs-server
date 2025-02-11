import { AVAILABLE_MEMEBR_ROLES } from "constant";
import { Schema } from "mongoose";
import { IconType } from "types/icon";

export interface IFieldError {
  field: string;
  message: string;
}

export interface IColor {
  light: string;
  dark: string;
}

export interface IMdt {
  tasks: object;
  template: string;
}

export type Role = typeof AVAILABLE_MEMEBR_ROLES[number];

export interface IMember {
  user: string;
  role: Role;
  pending: boolean;
}

export interface ITeam {
  name: string;
  color: IColor;
  icon: IconType;
  members: Array<IMember>;
  description: string | null;
}

export interface ITag {
  id: Schema.Types.ObjectId;
  owner: string;
  label: string;
  color: IColor;
}

export interface ITask {
  id: Schema.Types.ObjectId;
  text: string;
  isCompleted: boolean;
  priority: number;
  deadline: Date;
  reminder: Date;
}

export interface IPage {
  id: Schema.Types.ObjectId;
  name: string;
  description: string;
  icon: IconType;
  color: IColor;
  tags: Array<Schema.Types.ObjectId>;
  content: IMdt;
}

export interface IProject {
  id: Schema.Types.ObjectId;
  name: string;
  icon: IconType;
  owner: string;
  description: string;
  tags: Array<Schema.Types.ObjectId>;
  color: IColor;
  pages: Array<IPage>;
  share: Schema.Types.ObjectId | null;
  defaultPageId: Schema.Types.ObjectId | null;
}

export interface IProfile {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  picture: string;
  email: string;
}

export type HttpStatusName =
  | "OK"
  | "OK_NO_CONTENT"
  | "BAD_REQUEST"
  | "NOT_FOUND"
  | "CONFLICT"
  | "INTERNAL_SERVER_ERROR";

export type HttpStatusCode = 200 | 204 | 400 | 404 | 409 | 500;
