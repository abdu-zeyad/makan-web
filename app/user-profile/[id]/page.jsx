// app/user-profile/[id]/page.tsx

export default function UserProfilePage({ params }) {
    const { id } = params;

    return (
        <div className="p-8 font-sans">
            <h1 className="text-3xl font-bold mb-4">User Profile Page</h1>
            <p>
                Dynamic ID: <strong>{id}</strong>
            </p>
        </div>
    );
}
