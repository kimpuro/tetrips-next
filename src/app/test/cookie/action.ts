'use server'

import { cookies } from 'next/headers'

export async function cookieSet(){
  const email = 'test@test.com'
  cookies().set('username',email)
}