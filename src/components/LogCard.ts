export default class LogCard {
    private title: string;
    private date: Date;
    private text: string;
    constructor(title: string, date: Date, text: string) {
        this.title = title;
        this.date = date;
        this.text = text;
    }
}
