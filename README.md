# Testing config

## Testing tools we weill use

- [Enzyme REact 16](https://enzymejs.github.io/enzyme/)
- [Enzyme React 17](https://github.com/wojtekmaj/enzyme-adapter-react-17)
- [Enzyme to JSON](https://www.npmjs.com/package/enzyme-to-json)
- [React Hook Testing Library](https://react-hooks-testing-library.com)

 ## Steps to do testing config with this dependencies, **"react": "^16.13.1"**


### 1. Install Enzyme, Enzyme to JSON and React.Hooks Testing Library.

- ``` npm i --save-dev enzyme enzyme-adapter-react-16 ```
- ``` npm install --save-dev enzyme-to-json ```
- ``` npm install --save-dev @testing-library/react-hooks ```

Now we have the next Development dependencies installed:
```js
"devDependencies": {
    "@testing-library/react-hooks": "^7.0.2",
    "enzyme": "^3.11.0",
    "enzyme-adapter-react-16": "^1.15.6",
    "enzyme-to-json": "^3.6.2"
  }
```

### 2. Config process

- Inside **SRC folder**, create a file call **setupTests.js**
- Write the next fragments:
    - from Enzyme:
      ```js
      import Enzyme from 'enzyme';
      import Adapter from 'enzyme-adapter-react-16';

      Enzyme.configure({ adapter: new Adapter() });
      ```
    - from Enzyme to JSON:
      ```js
      import {createSerializer} from 'enzyme-to-json';
      expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
      ```
- Final order is:
  ```js
  import Enzyme from 'enzyme';
  import Adapter from 'enzyme-adapter-react-16';
  import {createSerializer} from 'enzyme-to-json';

  Enzyme.configure({ adapter: new Adapter() });
  expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
  ```
And we are ready to start our tests ✅


 ## Steps to do testing config with this dependencies, **"react": "^17"**

You have to install a different adapter:
- ``` npm install --save-dev @wojtekmaj/enzyme-adapter-react-17 ```


and the fragment code you will write the **setupTests.js**:

```js
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });
```

The final config code result is:
```js
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {createSerializer} from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
```

## CustomHook Tests

