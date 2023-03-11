# react-ray

---

React integration for the Ray app

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
