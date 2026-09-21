export default class IdGenerator {
    public static generateId(): number {
        return Math.round(Math.random() * 1000000);
    }
}
