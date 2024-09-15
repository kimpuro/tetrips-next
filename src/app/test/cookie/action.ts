'use server'

import { cookies } from 'next/headers'

export async function cookieSet(){
  cookies().set('username','test@test.com')
}