

export interface Article {
    _id: string,
    title: string,
    link: string,
    cover: string,
    description: string,
    md_content: string,

    // author: string,
    created_at: number,
    updated_at: number,
    word_count: number,
}