export interface Moment {
    id?: number,
    title: string,
    description: string,
    image: string,
    created_at?: string,
    update_ate?: string,
    comments?: [{ text: string; username: string }]
}