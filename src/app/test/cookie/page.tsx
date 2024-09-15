import { cookieSet } from '@/app/test/cookie/action'

export default async function Page() {
  await cookieSet()
  return (
    <div>
      <h1>쿠키 세팅용 페이지입니다.</h1>
    </div>
  )
}
