import React, { ReactElement, ReactNode } from 'react';
import useTimer from '../../../hooks/timer.hook';
import './show-timer.css'

export const AnimationType = {
    FADE_IN: `FADE-IN`,
    FADE_UP: `FADE-UP`
}

const ShowTimer = ({ children, timeout, animationType = AnimationType.FADE_UP }: { children: ReactElement, timeout: number, animationType?: string }) => {
    const shown = useTimer(timeout)
    return React.cloneElement(children, { className: `${children.props.className}${!shown ? (animationType == AnimationType.FADE_UP ? ` hidden` : ` hidden-in`) : ``}` })
}

export default ShowTimer;