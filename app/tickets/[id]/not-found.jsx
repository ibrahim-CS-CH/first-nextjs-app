import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center">
        <h2 className="text-3xl">there was a problem</h2>
        <p>we could not find this page</p>
        <p>go back to the <Link href={"/tickets"}>tickets</Link></p>
    </main>
  )
}
