import { cookies } from 'next/headers'

export default function Page() {
  cookies().set('username','test@test.com')
  return (
    <div>
      <h1>쿠키 세팅용 페이지입니다.</h1>
    </div>
  )
}
