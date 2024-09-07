import { APIRoute } from "astro";

const PasswordChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

export const get: APIRoute = ({ request }) => {
    const lines = {
        GITHUB_TOKEN: "github_token",
        SSH_SERVER_IP: request.headers.get("cf-connecting-ip"),
        SSH_SERVER_PORT: Math.floor(Math.random() * 1000),
        SSH_USERNAME: "root",
        SSH_PASSWORD: Array.from(
            { length: 32 },
            () =>
                PasswordChars[Math.floor(Math.random() * PasswordChars.length)]
        ).join(""),
    };

    return new Response(
        Object.entries(lines)
            .map(([key, value]) => `${key}: ${value}`)
            .join("\n"),
        { status: 200 }
    );
};
