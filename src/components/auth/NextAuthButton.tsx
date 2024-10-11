import { auth } from '@/auth'
import { SignIn, SignOut } from '@/components/auth/AuthComponents'

export default async function NextAuthButton() {
  const session = await auth()

  if (!session?.user) return <SignIn />
  return <SignOut/>
}