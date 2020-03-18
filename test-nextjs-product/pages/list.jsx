import Link from 'next/link';

export default function List() {
    return (
        <>
            <h1>This is a List Page</h1>
            <p>
                <Link href="/product">
                    <a>Product page</a>
                </Link>
            </p>
        </>
    );
}
