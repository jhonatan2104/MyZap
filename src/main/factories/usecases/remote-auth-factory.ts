import { RemoteAuth } from '@/data/usecases/auth/remote-auth'

export const factoryRemoteAuth = (): RemoteAuth => {
  return new RemoteAuth()
}
