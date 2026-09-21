export default class IdGenerator {
    public static generateId() {
        return Math.round(Math.random() * 1000000);
    }
}
