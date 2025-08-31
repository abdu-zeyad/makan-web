// app/user-profile/[id]/page.tsx
import { useParams } from 'next/navigation';

export default function UserProfilePage({ params }: { params: { id: string } }) {
    // params.id is the dynamic part of the URL
    const { id } = params;

    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <h1>User Profile Page</h1>
            <p>
                Dynamic ID: <strong>{id}</strong>
            </p>
        </div>
    );
}
