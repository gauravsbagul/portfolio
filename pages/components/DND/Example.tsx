import type { FC } from 'react'

import { Container } from './Container'
import { CustomDragLayer } from './CustomDragLayer'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

interface BoxInterface {
  [key: string]: { top: number; left: number; component?: ReactJSXElement | null | string }
  setBoxes: () => void
  snapToGrid: boolean; 
}

export const Example: FC<BoxInterface> = (props) => {

  return (
    <div style={{ backgroundColor: 'blue' }}>
      <Container snapToGrid {...props} />
      <CustomDragLayer snapToGrid  />
    </div>
  )
}
