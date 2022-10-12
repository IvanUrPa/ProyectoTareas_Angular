import {AuthorInterface} from "@core/author.interface";

export interface TaskInterface {
  title:string;
  description:string;
  author:AuthorInterface;
}
