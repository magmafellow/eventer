'use client'

import { useEffect, useState } from 'react'

export default function AnimateBallsOnClick({ id }: { id: string }) {
  return (
    <div id={id} className='balls-box absolute'>
      <div
        id={`${id}_01`}
        className="ball-01 w-5 h-5 bg-red-700 rounded-full absolute animate--fast"
      ></div>
      <div
        id={`${id}_02`}
        className="ball-02 w-10 h-10 bg-blue-700 rounded-full absolute animate--slow"
      ></div>
      <div
        id={`${id}_03`}
        className="ball-03 w-8 h-8 bg-green-500 rounded-full absolute animate--fast"
      ></div>
    </div>
  )
}
