'use client'
import { cookieSet } from '@/app/test/cookie/action'

export default function Page() {
  const handleSetCookie = async () => {
    await cookieSet()
    alert('쿠키가 설정되었습니다.')
  }

  return (
    <div>
      <button onClick={handleSetCookie}>쿠키 설정</button>
      <h1>쿠키 세팅용 페이지입니다.</h1>
    </div>
  )
}