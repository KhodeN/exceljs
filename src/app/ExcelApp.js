export class ExcelApp {
    constructor(el) {
        this.$el = el;
    }

    run() {
        this.$el.innerHTML = `<p>Привет!</p>`;
    }
}