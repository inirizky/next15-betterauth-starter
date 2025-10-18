
import { headers } from "next/headers";
import { auth } from "../auth";

export async function useSession() {


	const session = await auth.api.getSession({
		headers: await headers() // you need to pass the headers object.
	})
	return session
} 	