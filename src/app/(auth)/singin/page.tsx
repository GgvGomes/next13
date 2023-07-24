import Link from "next/link";

export default function SignIn() {
    return (
        <div>
            <h1>Login</h1>
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
        </div>
    )
}