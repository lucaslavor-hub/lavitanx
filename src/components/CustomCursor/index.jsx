import {useRef} from 'react';
import React, { useEffect } from "react";
import "./style.scss";

const Cursor = () => {
    const delay = 18;

    const dot = useRef(null);
    const dotOutline = useRef(null);

    const cursorVisible = useRef(true);
    const cursorEnlarged = useRef(false);

    const endx = useRef(window.innerWidth / 2);
    const endy = useRef(window.innerHeight / 2);
    const _x = useRef(0);
    const _y = useRef(0);

    const requestRef = useRef(null);

    useEffect(() => {
        document.addEventListener('mousedown', mouseOverEvent);
        document.addEventListener('mouseup', mouseOutEvent);
        document.addEventListener('mousemove', mouseMoveEvent);
        document.addEventListener('mouseenter', mouseEnterEvent);
        document.addEventListener('mouseleave', mouseLeaveEvent);

        animateDotOutline();

        return () => {
            document.removeEventListener('mousedown', mouseOverEvent);
            document.removeEventListener('mouseup', mouseOutEvent);
            document.removeEventListener('mousemove', mouseMoveEvent);
            document.removeEventListener('mouseenter', mouseEnterEvent);
            document.removeEventListener('mouseleave', mouseLeaveEvent); 

            cancelAnimationFrame(requestRef.current);
        };

    }, []);

    const toggleCursorVisbility = () => {
        if (cursorVisible.current){
            dot.current.style.opacity = 1;
            dotOutline.current.style.opacity = 1;
        } else {
        dot.current.style.opacity = 0;
        dotOutline.current.style.opacity = 0;
        }
    }

    const toggleCursorSize = () => {
        if (cursorEnlarged.current){
            dot.current.style.transform = 'translate(-50%, -50%) scale(0.75)';
            dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
        } else {
            dot.current.style.transform = 'translate(-50%, -50%) scale(1)';
            dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    }

    const mouseOverEvent = () => {
        cursorEnlarged.current = true;
        toggleCursorSize();
    }

    const mouseOutEvent = () => {
        cursorEnlarged.current = false;
        toggleCursorSize();
    }

    const mouseEnterEvent = () => {
        cursorVisible.current = true;
        toggleCursorVisbility();
    }

    const mouseLeaveEvent = () => {
        cursorVisible.current = false;
        toggleCursorVisbility();
    }

    const mouseMoveEvent = e => {
        cursorVisible.current = true;
        toggleCursorVisbility();

        endx.current = e.pageX;
        endy.current = e.pageY;

        dot.current.style.top = endy.current + 'px';
        dot.current.style.left = endx.current + 'px';
    }

    const animateDotOutline = () => {
        _x.current += (endx.current - _x.current) / delay;
        _y.current += (endy.current - _y.current) / delay;

        dotOutline.current.style.top = _y.current + 'px';
        dotOutline.current.style.left = _x.current + 'px';

        requestRef.current = requestAnimationFrame(animateDotOutline);
    }

    return (
        <>
        <div ref={dotOutline} className="cursor-dot-outline"></div>
        <div ref={dot} className="cursor-dot"></div>
        
        </>
    );
};

export default Cursor;