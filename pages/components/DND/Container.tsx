import update from 'immutability-helper'
import type { CSSProperties, FC } from 'react'
import { useCallback } from 'react'
import { useDrop } from 'react-dnd'

import { DraggableBox } from './DraggableBox'
import type { DragItem } from './interfaces'
import { ItemTypes } from './ItemTypes'
import { doSnapToGrid } from './snapToGrid'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

const styles: CSSProperties = {
  width: '100vh',
  height: '100vh',
  border: '1px solid black',
  position: 'relative',
  padding: 0
}

export interface ContainerProps {
  snapToGrid: boolean,
  [key: string]: { top: number; left: number; component?: ReactJSXElement | null | string }
  setBoxes: {
    top: number;
    left: number;
    component?: string | JSX.Element | null | undefined;
  }
}


export const Container: FC<ContainerProps> = ({ snapToGrid, boxes, setBoxes }) => {


  const moveBox = useCallback(
    (id: string, left: number, top: number) => {
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left, top },
          },
        }),
      )
    },
    [boxes],
  )

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.BOX,
      drop(item: DragItem, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset() as {
          x: number
          y: number
        }
        let left = Math.round(item.left + delta.x)
        let top = Math.round(item.top + delta.y)
        if (snapToGrid) {
          [left, top] = doSnapToGrid(left, top)
        }

        moveBox(item.id, left, top)
        return undefined
      },
    }),
    [moveBox],
  )

  return (
    <div ref={drop} style={styles}>
      {Object.keys(boxes).map((key) =>(
             <DraggableBox
              key={key}
              id={key}
              {...(boxes[key] as { top: number; left: number; title: string })}
            />
         ))}
    </div>
  )
}
