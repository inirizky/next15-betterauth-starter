import { SignupForm } from "@/components/signup-form"
import { useSession } from "@/lib/auth/session"
import { redirect } from "next/navigation"


export default async function SignupPage() {
  const session = await useSession()
  if (session?.user) {
    redirect('/')
  }
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <SignupForm />
      </div>
    </div>
  )
}
