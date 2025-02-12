export default class IdGenerator {
    static generateId(): number {
        return Math.round(Math.random() * 1000000);
    }
}