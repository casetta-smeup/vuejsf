export default class Column {
  text: string;
  code: string;
  filterValue: string;
  sortMode: string;

  constructor(c: any) {
    this.text = c.text;
    this.code = c.code;
    this.filterValue = c.filterValue;
    this.sortMode = c.sortMode;
  }

  get isAscending() {
    return "A" === this.sortMode;
  }
}