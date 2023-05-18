import { useRay } from '@/index';
import { Ray } from 'node-ray/web';
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
