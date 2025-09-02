import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { password, token } = await req.json();

        const response = await fetch('https://msydxsmddlishdoecrdr.supabase.co/functions/v1/reset-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}` // user access token
            },
            body: JSON.stringify({ password })
        });

        const data = await response.json();
        return NextResponse.json(data, { status: response.status });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
