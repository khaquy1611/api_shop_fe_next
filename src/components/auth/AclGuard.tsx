// ** React Imports
import { ReactNode } from 'react'

// ** Types
import type { ACLObj } from 'src/configs/acl'

interface AclGuardProps {
  children: ReactNode
  authGuard?: boolean
  guestGuard?: boolean
  aclAbilities: ACLObj
}

const AclGuard = (props: AclGuardProps) => {
  // ** Props
  const { children } = props
  
return <>{children}</>
}

export default AclGuard
