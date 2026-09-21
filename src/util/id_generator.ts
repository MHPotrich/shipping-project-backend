export default class IdGenerator {
    static generateId() {
        return Math.round(Math.random() * 1000000);
    }
}
