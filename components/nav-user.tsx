"use client"; // 🚀 ini client component

import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/components/ui/avatar"

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import Link from "next/link"
import { Button } from "./ui/button";
import { signOut, useSession } from "@/lib/auth-client";

type NavUserProps = {
	session: any; // bisa ganti pakai tipe dari next-auth
}

export function NavUser() {
	const session = useSession(); // ✅ jalan di server
	return (
		(session.data?.user ?
			(<DropdownMenu>
				<DropdownMenuTrigger>
					<div className="flex gap-2 items-center">

						<Avatar className="h-10 w-10 rounded-full">
							<AvatarImage
								src={session.data?.user.image ?? undefined}
								alt={session.data?.user.name ?? "User"}
							/>
							<AvatarFallback className="rounded-lg">CN</AvatarFallback>
						</Avatar>
						<div className="flex flex-col items-start">
							<span>{session.data?.user.name}</span>

						</div>
					</div>
				</DropdownMenuTrigger>

				<DropdownMenuContent
					className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg "
					align="end"
					sideOffset={4}
				>
					<DropdownMenuGroup>

						{/* <DropdownMenuItem asChild>
                        <Link href={`/user/${session.user.id}`}>Profile</Link>
                    </DropdownMenuItem> */}
						<DropdownMenuItem asChild>
							<Link href={`/user/${session.data?.user.id}/watchlist`}>Watchlist</Link>
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem onClick={async () => await signOut()}>
							Sign out
						</DropdownMenuItem>
					</DropdownMenuGroup>
					{/* <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                        <Link href="/settings/account">Watchlist</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <CreditCard />
                        Billing
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Bell />
                        Notifications
                    </DropdownMenuItem>
                </DropdownMenuGroup> */}
				</DropdownMenuContent>
			</DropdownMenu>) : (
				<Button asChild>

					<Link href={'/auth/login'}>Login</Link>
				</Button>
			))
	)
}