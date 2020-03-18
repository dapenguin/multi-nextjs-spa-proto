import Link from 'next/link';

export default function Product() {
    return (
        <>
            <h1>This is a Product Page</h1>
            <p>
                <Link href="/category">
                    <a>Category page</a>
                </Link>
            </p>
            <p>
                <Link href="/list">
                    <a>List page</a>
                </Link>
            </p>
            <p>
                <Link href="/home">
                    <a>Home page (Doesn't exist so should get a 404 page)</a>
                </Link>
            </p>
        </>
    );
}
