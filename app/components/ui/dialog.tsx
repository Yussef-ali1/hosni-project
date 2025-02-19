import type React from "react"
import type { ReactNode } from "react"
import { X } from "lucide-react"

interface DialogProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title: string
}

export function Dialog({ isOpen, onClose, children, title }: DialogProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-black bg-opacity-50">
      <div className="relative w-auto max-w-3xl mx-auto my-6">
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="relative p-6 flex-auto">{children}</div>
        </div>
      </div>
    </div>
  )
}

export const DialogTrigger: React.FC<{ children: ReactNode; onClick: () => void }> = ({ children, onClick }) => {
  return <div onClick={onClick}>{children}</div>
}

export const DialogContent: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div>{children}</div>
}

export const DialogHeader: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="mb-4">{children}</div>
}

export const DialogTitle: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <h2 className="text-lg font-semibold">{children}</h2>
}

export const DialogDescription: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <p className="text-sm text-gray-500">{children}</p>
}

