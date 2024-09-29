export interface Envelope<T> {
    timestamp: string;
    status: string;
    message: string | null;
    data: T | null;
}