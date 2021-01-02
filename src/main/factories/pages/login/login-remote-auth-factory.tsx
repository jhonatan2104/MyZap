import React from 'react'
import { factoryRemoteAuth } from '@/main/factories/usecases/remote-auth-factory'
import { Login } from '@/presentation/pages'
import { useNavigation } from '@react-navigation/native'

export const makeLogin: React.FC = () => {
  const auth = factoryRemoteAuth()
  const nav = useNavigation()

  return <Login authentication={auth} navigation={nav} />
}
