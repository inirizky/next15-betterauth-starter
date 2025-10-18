
// import { NavUser } from "./nav-user";
// import Search from "./Search";

import Link from "next/link";
import { NavUser } from "./nav-user";
import { ModeToggle } from "./theme-toggle";

export default function Navbar() {

	return (
		<div className="border-b fixed top-0 md:top-10 left-1/2 -translate-x-1/2 z-50
             container px-4 py-3 flex items-center justify-between md:rounded-full 
            bg-zinc-100 dark:bg-zinc-900 backdrop-blur-sm max-w-5xl xl:max-w-7xl">

			<div>
				<Link href={'/'} className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-300">
					Movie Playlist
				</Link>
			</div>

			<div className="flex gap-2 items-center">

				<ModeToggle />
				<NavUser />
			</div>
			{/* {!session.data?.user && <Button>Login</Button>}
			{session.data?.user && <Button>Logout</Button>} */}
			{/* 			<Search placeholder="Search" /> */}


			{/* <NavUser session={session} /> ✅ session dilempar ke komponen */}
		</div>

	)
}
