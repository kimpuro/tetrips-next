import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import { SignIn } from '@/components/auth/AuthComponents'

export default async function PromoButton() {
  const session = await auth()
  if (!session?.user) {
    return (<>
<SignIn/>
      </>
    )
  }
  return (
    <a
      href="/project"
      className="inline-block rounded-md border border-transparent bg-white px-8 py-3 font-medium text-black hover:bg-amber-50"
    >
      프로젝트 생성
    </a>
  )
}