import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <form className="flex-1 flex flex-col min-w-72">
      {" "}
      <div className="flex min-h-screen flex-col items-center justify-center  p-4">
        <div className="w-full max-w-sm space-y-6 text-center">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold tracking-tight text-white">
              Log in to Supaside
            </h1>
            <p className="text-sm text-gray-400">
              Don&apos;t have an account?{" "}
              <Link
                href="/sign-up"
                className="text-purple-400 hover:text-purple-300"
              >
                Sign up
              </Link>
            </p>
          </div>
          <div className="flex justify-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="h-11 w-11 rounded-xl bg-zinc-800 hover:bg-zinc-700"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span className="sr-only">Google</span>
            </Button>
     
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full bg-zinc-800" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-black px-2 text-zinc-500">Or</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Email"
                className="h-11 rounded-xl border-zinc-800 bg-zinc-900 text-white placeholder:text-zinc-400"
              />
            </div>
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Password"
                className="h-11 rounded-xl border-zinc-800 bg-zinc-900 text-white placeholder:text-zinc-400"
              />
            </div>
          </div>

          <SubmitButton pendingText="Loging in..." formAction={signInAction}>
            Log in
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </div>
    </form>
  );
}
