import { RayWithElementOptions, UseRayOptions } from '@/types';
import { Ray } from 'node-ray';
import { ray } from 'node-ray/web';
import { RefObject, useEffect, useRef } from 'react';

export const useRay = (value, options: UseRayOptions = { replace: false, type: 'json' }) => {
    const rayRef = useRef(ray());

    useEffect(() => {
        if (options.replace !== true) {
            rayRef.current = ray();
        }

        rayRef.current[options.type ?? 'json'](value);
    }, [ value ]);
};

export interface UseRayInstanceProps {
    instance?: Ray;
}

export const useRayInstance = ({ instance = ray() }: UseRayInstanceProps) => {
    return instance || ray();
};

export const useRayWithElement = (ref: RefObject<HTMLElement>, deps: any[] = [], options: RayWithElementOptions = { replace: true }) => {
    const rayRef = useRef(ray());

    useEffect(() => {
        if (!options.replace) {
            rayRef.current = ray();
        }

        if (ref.current) {
            rayRef.current.html(ref.current.innerHTML);
        }
    }, deps);
};
