# react-ray

React integration for the [Ray app](https://myray.app).

<p align="center">
    <img src="https://img.shields.io/github/actions/workflow/status/permafrost-dev/react-ray/run-tests.yml?branch=main&label=tests&logo=github&style=flat-square" alt="test status">
    <img src="https://shields.io/npm/v/react-ray?style=flat-square&nocache=1" alt="npm version">
    <img src="https://shields.io/github/license/permafrost-dev/react-ray?style=flat-square&nocache=1" alt="license">
</p>

## Installation

You can install the package via npm:

```bash
npm install react-ray
```

## Usage

`react-ray` provides several React hooks:

- `useRay` - send data to the Ray app.
- `useRaySequentialRef` - send the contents of a ref to the Ray app in a sequential manner.
- `useRayTrackRef` - send the contents of a ref to the Ray app and track the changes.

```js
import { useRay } from 'react-ray';
import { useEffect, useState } from 'react';

const MyComponent = () => {
    const [count, setCount] = useState(0);

    const ray = useRay(count);

    useEffect(() => {
        ray('Count updated: ', count);
    }, [count]);

    return (
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
    );
};
```

If you want to send the contents of a ref to the Ray app in a sequential manner (each dependency change sends a new item), use the `useRaySequentialRef` hook:

```js
import { useRaySequentialRef } from 'react-ray';
import { useRef, useState } from 'react';

const MyComponent = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);

    useRaySequentialRef(countRef, [count]);

    return (
        <div>
            <div ref={countRef}>{count}</div>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
};
```
![react-ray-02](https://user-images.githubusercontent.com/5508707/224473711-e1a59701-35a7-4c75-80c5-e69eb13cbf35.gif)


To update the Ray item in place that was sent with the contents of a ref when its dependencies change, use the `useRayTrackRef` hook:

```js
import { useRayTrackRef } from 'react-ray';
import { useRef, useState } from 'react';

const MyComponent = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);

    useRayTrackRef(countRef, [count]);

    return (
        <div>
            <div ref={countRef}>{count}</div>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
};
```

![react-ray-01](https://user-images.githubusercontent.com/5508707/224473546-c695914e-3919-466f-bf05-f760dac36c0f.gif)


## Setup

```bash
npm install

npm run dev
```

## Testing

`react-ray` uses Jest for unit tests.  To run the test suite:

`npm run test`

---

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## Security Vulnerabilities

Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

## Credits

- [Patrick Organ](https://github.com/patinthehat)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
