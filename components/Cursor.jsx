"use client"

import { useEffect } from 'react';
const CursorLight = () => {
    useEffect(() => {
        const moveLight = (e) => {
            const light = document.getElementById('cursor-light');
            light.style.left = `${e.clientX}px`;
            light.style.top = `${e.clientY}px`;
        };

        window.addEventListener('mousemove', moveLight);

        return () => {
            window.removeEventListener('mousemove', moveLight);
        };
    }, []);

    return <div id="cursor-light" className="fixed blur-3xl pointer-events-none z-50 w-80 h-80 rounded-full bg-[#67a3b6] dark:bg-[#816be7] transform -translate-x-1/2 -translate-y-1/2 bg-opacity-30 dark:bg-opacity-30"></div>;
};

// bg-[#67a3b6] bg-opacity-70 fixed dark:bg-[#816be7] dark:bg-opacity-30 -z-10 w-5 h-5 rounded-full blur-[10rem] sm:w-[68.75rem]
// fixed pointer-events-none z-50 w-5 h-5 rounded-full bg-[#67a3b6] dark:bg-[#816be7] transform -translate-x-1/2 -translate-y-1/2

export default CursorLight;