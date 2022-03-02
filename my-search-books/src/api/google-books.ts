import HttpClient from "./http-client";
import { Result } from "../models/result";
import { Item } from "../models/item";
// import { User } from './types';

export class GoogleBooksApi extends HttpClient {
  public constructor() {
    super(process.env.REACT_APP_URL_API_GOOGLE_BOOK || '');
  }

  public getBooks = (search: string, page: number) => this.instance.get<Result>('', {
    params: { q: search, startIndex: page }
  });

  public getBookById = (id: string) => this.instance.get<Item>(id);
}