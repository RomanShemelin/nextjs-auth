import { SessionOptions } from "iron-session"

export interface SessionDate {
    id?: string
    username?: string
    img?: string
    isPremium?: boolean
    isLoggedIn: boolean
}

export const defaultSession: SessionDate = {
    isLoggedIn: false
}

export const sessionOptions: SessionOptions={
    password: process.env.SECRET_KEY!,
    cookieName: 'test-session',
    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production'
    }
}