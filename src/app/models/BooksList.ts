import { BookListItem } from "./BookListItem";

export interface BookList {
    id: string;
    title: string;
    books: BookListItem[];
}