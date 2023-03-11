import { ray } from 'node-ray/web';
import { useRef, useEffect } from 'react';

export const useRay = (...args) => {
    return ray(...args);
};

export const useRaySequentialRef = (ref, deps = []) => {
    useEffect(() => {
        ray().html(ref.current.innerHTML);
    }, [ ref, ...deps ]);
};

export const useRayTrackRef = (ref, deps = []) => {
    const rayRef = useRef(null);

    useEffect(() => {
        const r = rayRef.current ?? ray();
        rayRef.current = r.html(ref.current.innerHTML);
    }, [ ref, ...deps ]);
};
