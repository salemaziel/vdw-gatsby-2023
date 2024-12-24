import clsx from 'clsx'
import React, { useEffect, useState } from 'react'

export default function Container({ children, className }) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className={clsx('container mx-auto px-5 sm:px-10', className)}>
      {isClient && children}
    </div>
  )
}
