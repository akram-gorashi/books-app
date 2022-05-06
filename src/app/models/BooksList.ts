import { BookListItem } from "./BookListItem";

export interface BooksList {
    id: string;
    title: string;
    books: BookListItem[];
}