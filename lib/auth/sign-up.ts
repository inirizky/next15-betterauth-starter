import { redirect } from "next/navigation";
import { signUp } from "../auth-client";
import { toast } from "sonner";

type User = {
	email: string,
	password: string,
	name: string
}

export async function SignUp({ email, password, name }: User) {
	const { data, error } = await signUp.email({
		email, // user email address
		password, // user password -> min 8 characters by default
		name, // user display name
		callbackURL: "/dashboard" // A URL to redirect to after the user verifies their email (optional)
	}, {
		onRequest: (ctx) => {
			//show loading
		},
		onSuccess: (ctx) => {
			//redirect to the dashboard or sign in page
			toast.success("Signup successfully")
			redirect('/login')
		},
		onError: (ctx) => {
			toast.error(ctx.error.message);
		},
	});

	return {
		data, error
	}
}
