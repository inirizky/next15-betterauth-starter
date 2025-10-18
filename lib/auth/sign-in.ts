import { redirect } from "next/navigation";
import { signIn, signUp } from "../auth-client";
import { toast } from "sonner";

type User = {
	email: string,
	password: string,
}

export async function SignIn({ email, password }: User) {
	const { data, error } = await signIn.email({
		/**
		 * The user email
		 */
		email,
		/**
		 * The user password
		 */
		password,
		/**
		 * A URL to redirect to after the user verifies their email (optional)
		 */
		callbackURL: "/",
		/**
		 * remember the user session after the browser is closed. 
		 * @default true
		 */
		rememberMe: false
	}, {

		onSuccess: (ctx) => {
			//redirect to the dashboard or sign in page
			toast.success("Login successfully")

		},
	})
	return {
		data, error
	}
}

export async function SignInGithub() {

	const data = await signIn.social({
		provider: "github",
		callbackURL: "/",
	},

	)

	return {
		data
	}
}
