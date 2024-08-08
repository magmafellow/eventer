'use client'

import { useEffect } from 'react'
import { IoMdClose } from 'react-icons/io'

export function modalToggle(id: string) {
  const modal = document.querySelector(`#${id}`)
  modal?.classList.toggle('active')
}

export function modalTurnOn(id: string) {
  const modal = document.querySelector(`#${id}`)
  modal?.classList.add('active')
}

export function modalTurnOff(id: string) {
  const modal = document.querySelector(`#${id}`)
  modal?.classList.remove('active')
}

export function doesParentHaveElem(parent: any, child: any, count = 1) {
  if (child === null || child === undefined) {
    return false
  }
  if (count > 150) {
    return false
  }
  if (parent === child && count > 1) {
    console.log(`deep=${count}`)
    return true
  } else {
    return doesParentHaveElem(parent, child.parentNode, count + 1)
  }
}

export default function Modal({
  title,
  text,
  children,
  id,
}: {
  title?: string
  text?: string
  children?: any
  id: string
}) {
  useEffect(function () {
    const modalWrapper = document.querySelector<any>(`#${id}`)
    const modalBox = modalWrapper.querySelector('.modal-box')

    window.addEventListener('click', function (e) {
      console.log(modalWrapper?.classList.contains('active'))

      if (
        modalWrapper?.classList.contains('active') &&
        doesParentHaveElem(e.target, modalBox)
      ) {
        console.log('close modal')
        modalTurnOff(id)
      }
    })
  }, [])

  return (
    <div
      id={id}
      className="modal-wrapper justify-center items-center w-screen h-screen bg-black bg-opacity-30 fixed top-0 left-0 z-50"
    >
      <div className="modal-box dark:text-blue-100 px-4 relative min-w-[250px] max-w-[500px] w-[90%] h-[70%] sm:w-[55%] rounded-xl bg-white dark:bg-slate-700">
        {title && <h2 className='text-center py-8 text-xl'>{title}</h2>}
        {text && (
          <div>
            <p className='text-center'>{text}</p>
          </div>
        )}
        {children && <div>{children}</div>}

        <div
          className="absolute cursor-pointer top-1 right-2"
          onClick={() => modalTurnOff(id)}
        >
          <IoMdClose className="text-3xl hover:text-neutr" />
        </div>
      </div>
    </div>
  )
}
