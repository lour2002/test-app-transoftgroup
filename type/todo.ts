import type {IUser} from "~/type/user";

export interface IToDoTask {
  id: number
  userId: IUser['id']
  title: string
  completed: boolean
}
