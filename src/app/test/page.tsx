import { auth } from '@/auth'
import { SignIn, SignOut } from '@/components/auth/AuthComponents'

export default async function Page() {
  const session = await auth()

  if (!session?.user) return <SignIn/>
  else {
    console.log(session.user.email)
  }
  return (
    <>
<SignOut/>
    </>
  )
}