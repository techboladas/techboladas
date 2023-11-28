import Head from "next/head"
import Link from "next/link"

export const Header = () => {
  return (
    <header className="w-100 h-20 bg-tech-secondary p-5 text-2xl text-white flex justify-end gap-10">
      <Link href="https://github.com/techboladas/" target="_blank">Github</Link>
      <Link href="https://facebook.com/techboladas/" target="_blank">Facebook</Link>
      <Link href="@techboladas">Instagram</Link>
      <Link href="https://whatshap.com/send=872204494">whatshap</Link>
    </header>
  )
}
