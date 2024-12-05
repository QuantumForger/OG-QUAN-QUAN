import { useEffect, useState } from 'react'

export default function DynamicContent() {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    setCurrentTime(new Date().toLocaleTimeString())
  }, [])

  return (
    <div suppressHydrationWarning={true}>
      Current time: {currentTime}
    </div>
  )
}

