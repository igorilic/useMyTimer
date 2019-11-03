import React from 'react'
import useMyTimer from './useTimer'

const Clock: React.FC = () => {
  const date = useMyTimer(new Date())
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  )
}

export default Clock
