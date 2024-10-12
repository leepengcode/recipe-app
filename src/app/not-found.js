import Link from "next/link"
export default function NotFound() {
    return <div className="w-full min-h-screen">
        <h1>Page not fount!</h1>
        <Link href={'/'}>
            Go Back...
        </Link>
    </div>
    
};
