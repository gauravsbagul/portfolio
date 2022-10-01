import type { CSSProperties, FC } from 'react';
import { memo, useEffect, useState } from 'react';

import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

const styles: CSSProperties = {
  display: 'inline-block',
  transform: 'rotate(-7deg)',
  WebkitTransform: 'rotate(-7deg)',
  cursor: 'move',
  padding: 20
}

export interface BoxDragPreviewProps {
  component: ReactJSXElement
}

export const BoxDragPreview: FC<BoxDragPreviewProps> = memo(
  function BoxDragPreview({component}) {
     const [tickTock, setTickTock] = useState(false)

    useEffect(
      function subscribeToIntervalTick() {
        const interval = setInterval(() => setTickTock(!tickTock), 500)
        return () => clearInterval(interval)
      },
      [tickTock],
    )

    return (
      <div style={styles}>
        {component}
      </div>
    )
  },
)
