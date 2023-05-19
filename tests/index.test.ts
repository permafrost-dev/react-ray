import { useRay, useRayInstance } from '@/index';
import { Ray, ray } from 'node-ray/web';
import { renderHook } from '@testing-library/react';
import { useRef } from 'react';

// Tests that useRay function calls the appropriate Ray method based on the type option.
it('useRay calls the appropriate ray method', () => {
    const value = '<h1>Hello World</h1>';
    const expectedType = 'html';
    const raySpy = jest.spyOn(Ray.prototype, expectedType);

    const result = renderHook(() => useRay(value, { type: expectedType }));

    expect(raySpy).toHaveBeenCalledWith(value);
    expect(result.result.current).not.toBeNull();
});

// Tests that useRay function updates rayRef.current with new Ray instance if replace option is false.
it('useRay updates ray ref.current', () => {
    const value = 'test';
    const expectedType = 'json';
    const expectedReplace = false;
    const raySpy = jest.spyOn(Ray.prototype, expectedType);
    const rayRef = renderHook(() => useRef()); //{ current: null };

    renderHook(() => useRay(value, { replace: expectedReplace }));

    expect(raySpy).toHaveBeenCalledWith(value);
    expect(rayRef.result.current).not.toBeNull();
});

// Tests that useRayInstance function returns the same instance when called multiple times with the same argument.
it('useRay instance returns the same instance when called multiple times with same argument', () => {
    const instance = ray();

    const result1 = renderHook(() => useRayInstance({ instance }));
    const result2 = renderHook(() => useRayInstance({ instance }));

    expect(result1.result.current.uuid).toBe(result2.result.current.uuid);
});
