export interface User {
    name: string;
    photoUrl: string;
}

export interface Body {
    text: string;
    imageUrl: string;
}

export interface CardProps {
    user: User;
    body: Body;
}
