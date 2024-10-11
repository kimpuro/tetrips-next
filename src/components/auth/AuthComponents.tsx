
import { signIn, signOut } from '@/auth'
import { Button } from '@/components/auth/Button'

export function SignIn({
                         provider,
                         ...props
                       }: { provider?: string } & any) {
  return (
    <form
      action={async () => {
        "use server"
        await signIn(provider)
      }}
    >
      <Button {...props}>Sign In</Button>
    </form>
  )
}

export function SignOut(props: any) {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
      className="w-full"
    >
      <Button  className="w-full p-0" {...props}>
        Sign Out
      </Button>
    </form>
  )
}