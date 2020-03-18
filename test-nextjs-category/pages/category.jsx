import Link from 'next/link';

export default function Category() {
    return (
        <>
            <h1>This is a Category Page</h1>
            <p>
                <Link href="/product">
                    <a>Product page</a>
                </Link>
            </p>
        </>
    );
}